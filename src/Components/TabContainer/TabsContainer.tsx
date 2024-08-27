import React from "react";
import { tabContainerProps } from "./tabContainerProps";
import { tabData } from "../../util/data";

function TabsContainer({
  activeStep,
  onTabChange,
}: Pick<tabContainerProps, "activeStep" | "onTabChange">) {
  return (
    <div className="flex align-middle pb-2 ">
      {tabData.map((m) => (
        <div
          className={`p-3 capitalize flex align-middle justify-center text-[24px]  ${
            activeStep === m.id
              ? "font-bold cursor-default border-b-2 text-blueColor border-blueColor"
              : "cursor-pointer "
          }`}
          key={m.id}
          onClick={() => onTabChange(m.id)}
        >
          {m.text}
        </div>
      ))}
    </div>
  );
}

export default TabsContainer;
