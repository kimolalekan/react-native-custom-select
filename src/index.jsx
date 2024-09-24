import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import Select from './Select';
import Multiple from './MultiSelect';

function SelectList(props) {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Select {...props} />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

function MultipleSelect(props) {
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Multiple {...props} />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export { SelectList, MultipleSelect };
