import React, { forwardRef, useImperativeHandle, useState } from "react";

import { stepTwoProps, submitStepTwoprops } from "./stepTwoProps";
import InputText from "../../Components/HTMLElement/InputText/InputText";
import Checkbox from "../../Components/HTMLElement/CheckBox/Checkbox";
import DropDown from "../../Components/HTMLElement/DropDown/DropDown";
import { initialStepTwoData, ownerOrProcessor } from "../../util/data";
import { handleClick } from "../../rootInterface";
import ValidationError from "../../Components/ValidationError/ValidationError";

export const StepTwo = forwardRef<handleClick, submitStepTwoprops>(
  ({ onClick }, ref) => {
    const [stepTwoData, setStepTwoData] =
      useState<stepTwoProps>(initialStepTwoData);
    const [formError, setFormError] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
      click: () => {
        if (
          stepTwoData.typeOfData.length === 0 ||
          stepTwoData.regulatoryEntityApplicable.length === 0
        ) {
          setFormError(true);
        } else {
          onClick(stepTwoData);
        }
      },
    }));

    const handleCheckBoxEntityApplicable = (
      checked: boolean,
      value: string
    ) => {
      const regulatoryEntityApplicable = stepTwoData.regulatoryEntityApplicable;
      if (checked) {
        regulatoryEntityApplicable.push(value);
      } else {
        const index = regulatoryEntityApplicable.indexOf(value);
        regulatoryEntityApplicable.splice(index, 1);
      }
      setStepTwoData({
        ...stepTwoData,
        regulatoryEntityApplicable: [...regulatoryEntityApplicable],
      });
    };
    const handleCheckBoxTypeOfData = (checked: boolean, value: string) => {
      const typeOfData = stepTwoData.typeOfData;
      if (checked) {
        typeOfData.push(value);
      } else {
        const index = typeOfData.indexOf(value);
        typeOfData.splice(index, 1);
      }
      setStepTwoData({
        ...stepTwoData,
        typeOfData: [...typeOfData],
      });
    };

    return (
      <div>
        <div className="mb-8 grid grid-cols-2 w-full">
          <div className="">
            <label className="text-[20px] block mb-1">Retention Period</label>
            <InputText
              className="w-96"
              value={stepTwoData.retentionPeriod}
              onChange={(e: any) =>
                setStepTwoData({
                  ...stepTwoData,
                  retentionPeriod: e.target.value,
                })
              }
            />
          </div>
          <div className="">
            <label className="text-[20px] block mb-1">Type Of Data *</label>
            <div className="flex flex-wrap mt-2">
              <Checkbox
                className="mr-5"
                checked={stepTwoData.typeOfData.includes("PHI")}
                label="PHI"
                onChange={(e) => {
                  handleCheckBoxTypeOfData(e.target.checked, "PHI");
                }}
              />
              <Checkbox
                className="mr-5"
                checked={stepTwoData.typeOfData.includes("PII")}
                label="PII"
                onChange={(e) => {
                  handleCheckBoxTypeOfData(e.target.checked, "PII");
                }}
              />
              <Checkbox
                className="mr-5"
                checked={stepTwoData.typeOfData.includes("GxP")}
                label="GxP"
                onChange={(e) => {
                  handleCheckBoxTypeOfData(e.target.checked, "GxP");
                }}
              />
              <Checkbox
                className="mr-5"
                checked={stepTwoData.typeOfData.includes("SOX")}
                label="SOX"
                onChange={(e) => {
                  handleCheckBoxTypeOfData(e.target.checked, "SOX");
                }}
              />
            </div>
            {formError && stepTwoData.typeOfData.length === 0 && (
              <ValidationError message="Type of Data is required" />
            )}
          </div>
        </div>
        <div className="mb-8 grid grid-cols-2 w-full">
          <div className="">
            <label className="text-[20px] block mb-1">
              Regulatory entity applicable*
            </label>
            <div className="flex flex-wrap mt-2">
              <Checkbox
                className="mr-5"
                checked={stepTwoData.regulatoryEntityApplicable.includes("FDA")}
                label="FDA"
                onChange={(e) => {
                  handleCheckBoxEntityApplicable(e.target.checked, "FDA");
                }}
              />
              <Checkbox
                className="mr-5"
                checked={stepTwoData.regulatoryEntityApplicable.includes("EMA")}
                label="EMA"
                onChange={(e) => {
                  handleCheckBoxEntityApplicable(e.target.checked, "EMA");
                }}
              />
              <Checkbox
                className="mr-5"
                checked={stepTwoData.regulatoryEntityApplicable.includes(
                  "ANVISA"
                )}
                label="ANVISA"
                onChange={(e) => {
                  handleCheckBoxEntityApplicable(e.target.checked, "ANVISA");
                }}
              />
              <Checkbox
                className="mr-5"
                checked={stepTwoData.regulatoryEntityApplicable.includes(
                  "CDCSCO"
                )}
                label="CDCSCO"
                onChange={(e) => {
                  handleCheckBoxEntityApplicable(e.target.checked, "CDCSCO");
                }}
              />
              <Checkbox
                className="mr-5"
                checked={stepTwoData.regulatoryEntityApplicable.includes(
                  "GDPR"
                )}
                label="GDPR"
                onChange={(e) => {
                  handleCheckBoxEntityApplicable(e.target.checked, "GDPR");
                }}
              />
            </div>
            {formError &&
              stepTwoData.regulatoryEntityApplicable.length === 0 && (
                <ValidationError message="Regulatory entity applicable is required" />
              )}
          </div>
          <div className="">
            <label className="text-[20px] block mb-1">
              Organisation and Department
            </label>
            <DropDown
              className="w-96"
              options={ownerOrProcessor}
              value={stepTwoData.doWeOwnDataorProcessing}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setStepTwoData({
                  ...stepTwoData,
                  doWeOwnDataorProcessing: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="mb-8 grid grid-cols-2 w-full">
          <div className="">
            <label className="text-[20px] block mb-1">
              Estimated people to use this workspace internal
            </label>
            <InputText
              className="w-96"
              type="number"
              value={stepTwoData.estimatedPeopleToUseThisWorkspaceInternal}
              onChange={(e: any) =>
                setStepTwoData({
                  ...stepTwoData,
                  estimatedPeopleToUseThisWorkspaceInternal: e.target.value,
                })
              }
            />
          </div>
          <div className="">
            <label className="text-[20px] block mb-1">
              Estimated people to use this workspace external
            </label>
            <InputText
              className="w-96"
              type="number"
              value={stepTwoData.estimatedPeopleToUseThisWorkspaceExternal}
              onChange={(e: any) =>
                setStepTwoData({
                  ...stepTwoData,
                  estimatedPeopleToUseThisWorkspaceExternal: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    );
  }
);
