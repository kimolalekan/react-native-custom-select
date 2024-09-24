import { StyleProp, ViewStyle } from 'react-native';

declare module 'react-native-custom-select' {
  type SelectData = {
    key: string;
    value: string;
  };

  export interface Select {
    data: SelectItem[];
    value?: string;
    placeholder?: string;
    searchResult?: string;
    borderColor?: string;
    fontSize?: number;
    containerStyle?: StyleProp<ViewStyle>;
    indexValue?: string;
    icon?: string;
    onChange: (value: string) => void;
  }

  export interface MultipleProps {
    data: SelectItem[];
    value?: string[];
    placeholder?: string;
    searchResult?: string;
    onChange: (values: string[]) => void;
  }
}
