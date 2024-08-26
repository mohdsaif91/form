import React from "react";
import Select from "react-select";
import { serachDropDownProps } from "./searchDropDownProps";

function SearchDropDown({
  options = [],
  onChange,
  className = "",
}: Pick<serachDropDownProps, "className" | "onChange" | "options">) {
  return (
    <Select
      placeholder="Search User"
      className={`${className} rounded-md border-[2px] border-[#333] `}
      onChange={onChange}
      options={options}
      isClearable={true}
    />
  );
}

export default SearchDropDown;
