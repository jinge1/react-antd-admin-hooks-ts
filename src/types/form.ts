

export type TInputType = 'input' | 'date' | 'month' | 'weekPicker' | 'rangePicker' | 'inputNumber' | 'select'

interface IOptions {
  label: string;
  value: string | number;
}

export interface IInputItem {
  label: string;
  name: string;
  type?: TInputType;
  value?: any;
  options?: IOptions[];
  [propName: string]: any
}