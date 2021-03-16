export interface IStyledProps {
  fontSize?: number;
  color?: string;
  height?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

export interface IColumnProps {
  isControls?: boolean;
}
export interface IInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  value: string;
}

export interface IDropDownProps extends IInputProps {
  columnName: any;
  selectedColumn: any;
}
