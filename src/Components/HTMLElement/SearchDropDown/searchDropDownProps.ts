import { ActionMeta, MultiValue } from "react-select";

export type optionItem = {
  label: string;
  value: string;
};

export interface serachDropDownProps {
  onChange: (newValue: optionItem | null,actionMeta:ActionMeta<optionItem>) => void;
  className: string;
  options: optionItem[];
}
