import { useState } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { SelectList, MultipleSelect } from 'react-native-custom-select';

export default function App() {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValues, setSelectedValues] = useState([]);

  const data = [
    { key: '1', value: 'Option 1' },
    { key: '2', value: 'Option 2' },
    { key: '3', value: 'Option 3' },
    { key: '4', value: 'Option 4' },
  ];

  const handleChange = value => {
    setSelectedValue(value);
  };

  const handleMultipleChange = values => {
    setSelectedValues(values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get
        a shareable url.
      </Text>

      <SelectList
        data={data}
        value={selectedValue}
        onChange={handleChange}
        placeholder="Select an option"
        borderColor="#444"
      />

      <MultipleSelect
        data={data}
        value={selectedValues}
        onChange={handleMultipleChange}
        placeholder="Choose multiple options"
        searchResult="No results found"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    margin: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
