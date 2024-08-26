import React from "react";
import { inputProps } from "./inputTextProps";

function InputText({
  value,
  onChange,
  className = "",
  type = "text",
  required = false,
}: Pick<inputProps, "value" | "onChange"> & Partial<inputProps>) {
  return (
    <input
      required={required}
      type={type}
      className={`${className} rounded-md border-[2px] border-[#333] p-2 `}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputText;
