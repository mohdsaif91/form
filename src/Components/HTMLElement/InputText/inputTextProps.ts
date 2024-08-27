export interface inputProps {
  value: string | number;
  onChange: (text: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  type: string;
  required: boolean;
}
