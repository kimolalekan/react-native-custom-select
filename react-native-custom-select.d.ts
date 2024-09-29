import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

declare module 'react-native-custom-select' {
  type SelectData = {
    key: string;
    value: string;
  };

  export interface SelectList {
    data: SelectItem[];
    value?: string;
    placeholder?: string;
    searchResult?: string;
    borderColor?: string;
    fontSize?: number;
    containerStyle?: StyleProp<ViewStyle>;
    indexValue?: string;
    caretIcon?: ReactNode;
    closeIcon?: ReactNode;
    onChange: (value: string) => void;
  }

  export interface MultipleSelect {
    data: SelectItem[];
    value?: string;
    placeholder?: string;
    searchResult?: string;
    borderColor?: string;
    fontSize?: number;
    containerStyle?: StyleProp<ViewStyle>;
    indexValue?: string;
    caretIcon?: ReactNode;
    closeIcon?: ReactNode;
    onChange: (value: string) => void;
  }
}
