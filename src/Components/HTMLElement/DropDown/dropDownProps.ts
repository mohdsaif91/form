import React from "react";

export interface dropDownProps {
  value: string;
  onChange: (selected: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  className: string;
}
