import React from "react";
import { checboxProps } from "./checkboxProps";

function Checkbox({
  checked = false,
  onChange,
  label,
  className,
}: Pick<checboxProps, "checked" | "label" | "onChange"> &
  Partial<checboxProps>) {
  return (
    <div className={`${className} flex align-middle`}>
      <input
        id={label}
        className="mr-1 w-6 cursor-pointer"
        name={label}
        checked={checked}
        type="checkbox"
        onChange={onChange}
      />
      <label htmlFor={label} className="text-[24px] cursor-pointer">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
