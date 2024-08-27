import React, { forwardRef, useImperativeHandle, useState } from "react";
import { stepThreeProps, submitStepThreeprops } from "./stepThreeProps";
import InputText from "../../Components/HTMLElement/InputText/InputText";
import DropDown from "../../Components/HTMLElement/DropDown/DropDown";
import { initialStepThreeData, yesNoOption } from "../../util/data";
import { handleClick } from "../../rootInterface";
import ValidationError from "../../Components/ValidationError/ValidationError";

export const StepThree = forwardRef<handleClick, submitStepThreeprops>(
  ({ onClick }, ref) => {
    const [stepThreeData, setStepThreeData] =
      useState<stepThreeProps>(initialStepThreeData);
    const [formError, setFormError] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
      click: () => {
        console.log("CLICKED 3 <>? ", stepThreeData);
        if (
          stepThreeData.rmClassification === "" ||
          stepThreeData.sopGuidelineForWorkSpace === ""
        ) {
          setFormError(true);
        } else {
          onClick(stepThreeData);
        }
      },
    }));

    return (
      <div>
        <div className="mb-8 grid grid-cols-2 w-full">
          <div className="">
            <label className="text-[20px] block mb-1">RM Classification*</label>
            <InputText
              className="w-96"
              value={stepThreeData.rmClassification}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStepThreeData({
                  ...stepThreeData,
                  rmClassification: e.target.value,
                })
              }
            />
            {formError && stepThreeData.rmClassification === "" && (
              <ValidationError message="RM Classification is required" />
            )}
          </div>
          <div className="">
            <label className="text-[20px] block mb-1">
              Can audit or inscept this workspace
            </label>
            <DropDown
              className="w-96"
              options={yesNoOption}
              value={stepThreeData.canAuditOrInscept}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setStepThreeData({
                  ...stepThreeData,
                  canAuditOrInscept: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="mb-8 grid grid-cols-2 w-full">
          {stepThreeData.canAuditOrInscept !== "No" && (
            <div className="">
              <label className="text-[20px] block mb-1">
                SOP/Guideline specfic*
              </label>
              <InputText
                className="w-96"
                value={stepThreeData.sopGuidelineForWorkSpace}
                onChange={(e: any) =>
                  setStepThreeData({
                    ...stepThreeData,
                    sopGuidelineForWorkSpace: e.target.value,
                  })
                }
              />
              {formError && stepThreeData.sopGuidelineForWorkSpace === "" && (
                <ValidationError message="SOP/Guideline is required" />
              )}
            </div>
          )}
          <div className="">
            <label className="text-[20px] block mb-1">Reminder at end</label>
            <DropDown
              className="w-96"
              options={yesNoOption}
              value={stepThreeData.reminderAtEnd}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setStepThreeData({
                  ...stepThreeData,
                  reminderAtEnd: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="mb-8 grid grid-cols-2 w-full">
          <div className="">
            <label className="text-[20px] block mb-1">
              Not use can be deleted or archive
            </label>
            <DropDown
              className="w-96"
              options={yesNoOption}
              value={stepThreeData.canDeleteIfNotInUsed}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setStepThreeData({
                  ...stepThreeData,
                  canDeleteIfNotInUsed: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    );
  }
);

export default StepThree;
