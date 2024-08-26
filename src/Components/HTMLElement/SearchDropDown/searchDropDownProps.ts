export type optionItem = {
  label: string;
  value: string;
};

export interface serachDropDownProps {
  onChange: (newValue: any) => void;
  className: string;
  options: optionItem[];
}
