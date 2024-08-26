export interface inputProps {
  value: string | number;
  onChange: (text: React.FormEvent<HTMLInputElement>) => void;
  className: string;
  type: string;
  required: boolean;
}
