import { useMemo, useState, ReactNode } from 'react';
import {
  TextInput,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Select = ({
  data,
  value = '',
  placeholder = 'Choose one',
  searchResult = 'No result found',
  onChange,
  borderColor = '#444',
  borderRadius = 10,
  fontSize = 14,
  defaultPadding = 10,
  containerStyle = { marginBottom: 15 },
  indexValue = 'value',
  caretIcon = <Icon name="caret-down" size={20} />,
  closeIcon = <Icon name="close" size={20} />,
}) => {
  const [show, setShow] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [search, setSearch] = useState('');
  const [_value, setValue] = useState('');

  const _data = useMemo(() => {
    let withSearch = data.filter(item =>
      item.value?.toLowerCase().includes(search.trim().toLowerCase()),
    );
    return search ? withSearch : data;
  }, [data, search]);

  return (
    <View style={containerStyle}>
      {showAction === false ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setShow(true);
            setShowAction(true);
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor,
              borderRadius: borderRadius,
              borderBottomRightRadius: show ? 0 : borderRadius,
              borderBottomLeftRadius: show ? 0 : borderRadius,
              padding: defaultPadding,
            }}
          >
            <Row>
              <Col sm={10}>
                <Text style={{ fontSize }}>
                  {value
                    ? _data.filter(item => item[indexValue] === value)[0]?.value
                    : _value
                      ? _value
                      : placeholder}
                </Text>
              </Col>
              <Col sm={2}>
                <TouchableOpacity
                  onPress={() => {
                    setShow(true);
                    setShowAction(true);
                  }}
                  style={{
                    alignItems: 'flex-end',
                  }}
                >
                  {caretIcon}
                </TouchableOpacity>
              </Col>
            </Row>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <View
          style={{
            borderWidth: 1,
            borderColor,
            borderRadius: borderRadius,
            padding: defaultPadding,
            marginBottom: 10,
            borderBottomRightRadius: show ? 0 : borderRadius,
            borderBottomLeftRadius: show ? 0 : borderRadius,
          }}
        >
          <Row>
            <Col sm={10}>
              <TextInput
                placeholderTextColor="#9B9B9B"
                underlineColorAndroid="transparent"
                placeholder={'Search....'}
                style={{ fontSize: 16 }}
                onChangeText={text => setSearch(text)}
              />
            </Col>
            <Col sm={2}>
              <TouchableOpacity
                onPress={() => {
                  setShowAction(false);
                  setShow(false);
                  setSearch('');
                }}
                style={{
                  alignItems: 'flex-end',
                }}
              >
                {closeIcon}
              </TouchableOpacity>
            </Col>
          </Row>
        </View>
      )}

      <View
        style={{
          maxHeight: show ? 200 : 'auto',
          borderWidth: 1,
          borderColor,
          borderRadius: borderRadius,
          padding: defaultPadding,
          marginTop: show ? -10 : 0,
          borderTopColor: show ? 'transparent' : '#444',
          borderTopRightRadius: show ? 0 : borderRadius,
          borderTopLeftRadius: show ? 0 : borderRadius,
          display: show ? 'flex' : 'none',
        }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {_data.map(item => (
            <TouchableOpacity
              key={item.key}
              style={{ marginBottom: 10 }}
              onPress={() => {
                onChange(item[indexValue]);
                setShow(false);
                setShowAction(false);
                setValue(item.value);
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: item[indexValue] === value ? '#000' : '#333',
                }}
              >
                {item.value}
              </Text>
            </TouchableOpacity>
          ))}
          {_data?.length === 0 && (
            <Text style={{ textAlign: 'center', padding: 20 }}>
              {searchResult}
            </Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default Select;
