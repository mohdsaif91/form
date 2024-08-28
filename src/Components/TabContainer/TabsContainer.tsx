import React from "react";
import { tabContainerProps } from "./tabContainerProps";
import ValidationImage from "../../assets/danger.png";
import { tabData } from "../../util/data";

function TabsContainer({
  activeStep,
  onTabChange,
  validationStepError,
}: Pick<
  tabContainerProps,
  "activeStep" | "onTabChange" | "validationStepError"
>) {
  console.log(validationStepError, " <>?");

  return (
    <div className="flex items-center pb-2 ">
      {tabData.map((m, i: number) => (
        <div
          className={`p-3 capitalize flex items-center justify-center text-[24px]  ${
            activeStep === m.id
              ? `font-bold cursor-default border-b-2 text-blueColor ${
                  validationStepError[i].flag
                    ? "border-errorRed"
                    : "border-blueColor"
                }`
              : "cursor-pointer "
          }`}
          key={m.id}
          onClick={() => onTabChange(m.id)}
        >
          {m.text}
          {validationStepError[i].flag && (
            <img src={ValidationImage} className="ml-2 h-[24px] w-[18px]" />
          )}
        </div>
      ))}
    </div>
  );
}

export default TabsContainer;
