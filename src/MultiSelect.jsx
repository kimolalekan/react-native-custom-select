import { useMemo, useState } from 'react';
import {
  TextInput,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Multiple = ({
  data,
  value = [],
  placeholder = 'Choose multiple',
  searchResult = 'No result found',
  onChange,
  borderColor,
  containerStyle,
  indexValue = 'value',
}) => {
  const [show, setShow] = useState(value?.length ? true : false);
  const [showAction, setShowAction] = useState(false);
  const [showList, setShowList] = useState(false);
  const [search, setSearch] = useState('');
  const [all, selectAll] = useState(false);

  const _data = useMemo(() => {
    let withSearch = data.filter(item =>
      item.value?.toLowerCase().includes(search.trim().toLowerCase()),
    );
    return search ? withSearch : data;
  }, [data, search]);

  const handleMultipleSelect = val => {
    if (value.includes(val)) {
      let _value = value.filter(item => item !== val);
      onChange(_value);
    } else {
      let _value = [val, ...value];
      onChange(_value);
    }

    data.length === value.length ? selectAll(true) : selectAll(false);
  };

  return (
    <>
      <View>
        {showAction === false ? (
          <TouchableWithoutFeedback
            onPress={() => {
              setShow(true);
              setShowAction(true);
              setShowList(true);
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: '#444',
                borderRadius: 10,
                borderBottomRightRadius: value?.length ? 0 : 10,
                borderBottomLeftRadius: value?.length ? 0 : 10,
                padding: 15,
                marginBottom: 10,
              }}
            >
              <Row>
                <Col sm={11}>
                  <Text style={{ fontSize: 16 }}>{placeholder}</Text>
                </Col>
                <Col sm={1}>
                  <TouchableOpacity
                    onPress={() => {
                      setShow(true);
                      setShowList(true);
                      setShowAction(true);
                    }}
                  >
                    <Icon name="caret-down" size={20} />
                  </TouchableOpacity>
                </Col>
              </Row>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <View
            style={{
              borderWidth: 1,
              borderColor: '#444',
              borderRadius: 10,
              padding: 15,
              marginBottom: 10,
              borderBottomRightRadius: value?.length ? 0 : 10,
              borderBottomLeftRadius: value?.length ? 0 : 10,
            }}
          >
            <Row>
              <Col sm={11}>
                <TextInput
                  placeholderTextColor="#9B9B9B"
                  underlineColorAndroid="transparent"
                  placeholder={'Search....'}
                  style={{ fontSize: 16 }}
                  onChangeText={text => setSearch(text)}
                />
              </Col>
              <Col sm={1}>
                <TouchableOpacity
                  onPress={() => {
                    setShowList(!showList);
                    setShowAction(false);
                    value?.length ? setShow(true) : setShow(false);
                    setSearch('');
                  }}
                >
                  <Icon name="close" size={20} />
                </TouchableOpacity>
              </Col>
            </Row>
          </View>
        )}

        <View
          style={{
            height: value?.length || search ? 'auto' : 350,
            borderWidth: 1,
            borderColor: '#444',
            borderRadius: 10,
            padding: 15,
            marginTop: value?.length ? -10 : 0,
            borderTopColor: value?.length ? 'transparent' : '#444',
            borderTopRightRadius: value?.length ? 0 : 10,
            borderTopLeftRadius: value?.length ? 0 : 10,
            display: show ? 'flex' : 'none',
          }}
        >
          <ScrollView
            style={{
              height: search ? 'auto' : value?.length ? 200 : 330,
              display: showList ? 'flex' : 'none',
            }}
          >
            {!search && (
              <Row style={{ marginBottom: 10 }}>
                <Col sm={2}>
                  <Checkbox
                    value={all}
                    color={all ? '#9b9b9b' : undefined}
                    onValueChange={() => {
                      !all
                        ? onChange(data.map(item => item.value))
                        : onChange([]);
                      selectAll(!all);
                    }}
                  />
                </Col>
                <Col sm={10}>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 16 }}>Select all</Text>
                  </TouchableOpacity>
                </Col>
              </Row>
            )}
            {_data.map(item => (
              <Row key={item.key} style={{ marginBottom: 10 }}>
                <Col sm={2}>
                  <Checkbox
                    value={
                      value.filter(_item => _item === item.value)?.length === 1
                    }
                    color={
                      value.filter(_item => _item === item.value)?.length === 1
                        ? '#9b9b9b'
                        : undefined
                    }
                    onValueChange={() => handleMultipleSelect(item.value)}
                  />
                </Col>
                <Col sm={10}>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 16 }}>{item.value}</Text>
                  </TouchableOpacity>
                </Col>
              </Row>
            ))}
            {_data?.length === 0 && (
              <Text style={{ textAlign: 'center', padding: 20 }}>
                {searchResult}
              </Text>
            )}
          </ScrollView>
          <View style={{ display: value?.length ? 'flex' : 'none' }}>
            <Row style={{ marginBottom: 10 }}>
              <Col sm={3}>
                <Text
                  style={{
                    position: 'relative',
                    top: 7,
                    fontWeight: '500',
                    fontSize: 12,
                  }}
                >
                  Selected ({value?.length})
                </Text>
              </Col>
              <Col sm={9} style={{ borderBottomWidth: 1, borderColor: '#444' }}>
                <Text>&nbsp;</Text>
              </Col>
            </Row>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {value.map((item, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: '#808080',
                    padding: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 10,
                    margin: 5,
                    // marginLeft: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 12,
                    }}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Multiple;
