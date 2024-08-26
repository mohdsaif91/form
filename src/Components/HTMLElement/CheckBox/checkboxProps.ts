import React from "react";

export interface checboxProps {
  checked: boolean;
  onChange: (evet: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className: string;
}
