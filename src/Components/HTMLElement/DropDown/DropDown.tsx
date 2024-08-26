import { dropDownProps } from "./dropDownProps";

function DropDown({
  onChange,
  value,
  options = [],
  className = "",
}: Pick<dropDownProps, "onChange" | "value" | "options"> &
  Partial<dropDownProps>) {
  return (
    <select
      className={`${className} rounded-md border-[2px] border-[#333] p-2`}
      value={value}
      onChange={onChange}
    >
      {options.map((m: string, i: number) => (
        <option value={m} key={i}>
          {m}
        </option>
      ))}
    </select>
  );
}

export default DropDown;
