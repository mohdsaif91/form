import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

import InputText from "../../Components/HTMLElement/InputText/InputText";
import DropDown from "../../Components/HTMLElement/DropDown/DropDown";
import { departmentOptions, initialStepOneData } from "../../util/data";
import SearchDropDown from "../../Components/HTMLElement/SearchDropDown/SearchDropDown";
import { stepOneProps, submitStepOneData } from "./stepOneProps";
import ValidationError from "../../Components/ValidationError/ValidationError";
import { handleClick } from "../../rootInterface";
import { optionItem } from "../../Components/HTMLElement/SearchDropDown/searchDropDownProps";
import { ActionMeta } from "react-select";

export const StepOne = forwardRef<
  Pick<handleClick, "click" | "validateClick">,
  Pick<submitStepOneData, "invalidForm" | "onClick" | "validateOnClick">
>(({ onClick, validateOnClick, invalidForm }, ref) => {
  const [stepOnedata, setStepOnedata] = useState<stepOneProps>({
    ...initialStepOneData,
  });
  const [userData, setUserData] = useState<[] | null>(null);
  const [formError, setFormError] = useState<boolean>(invalidForm || false);

  useEffect(() => {
    if (!userData) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => {
          setUserData(res);
        })
        .catch((err) => {});
    }
  }, [userData]);

  useImperativeHandle(ref, () => ({
    click: () => {
      if (
        stepOnedata.workspacetitle === "" ||
        stepOnedata.owner === "" ||
        stepOnedata.secondaryOwner === ""
      ) {
        setFormError(true);
      } else {
        setFormError(false);
        onClick(stepOnedata);
      }
    },
    validateClick: () => {
      if (
        stepOnedata.workspacetitle === "" ||
        stepOnedata.owner === "" ||
        stepOnedata.secondaryOwner === ""
      ) {
        setFormError(true);
        validateOnClick(true);
      } else {
        validateOnClick(false);
      }
    },
  }));

  const userOption = Array.isArray(userData)
    ? userData.map((m: any) => {
        return {
          label: m.name,
          value: m.name,
        };
      })
    : [];

  return (
    <div className="">
      <div className="mb-8 grid grid-cols-2">
        <div className="">
          <label className="text-[20px] block mb-1">WorkSpace Title*</label>
          <InputText
            className="w-96"
            value={stepOnedata.workspacetitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setStepOnedata({
                ...stepOnedata,
                workspacetitle: e.target.value,
              })
            }
          />
          {formError && stepOnedata.workspacetitle === "" && (
            <ValidationError message="Workspace title is required " />
          )}
        </div>
        <div className="">
          <label className="text-[20px] block mb-1">
            Organisation and Department
          </label>
          <DropDown
            className="w-96"
            options={departmentOptions}
            value={stepOnedata.organizationDepartment}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              console.log(e.target.value, " <>?");
              setStepOnedata({
                ...stepOnedata,
                organizationDepartment: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className="mb-8 grid grid-cols-2">
        <div className="">
          <label className="text-[20px] block mb-1">Purpose</label>
          <InputText
            className="w-96"
            value={stepOnedata.purpose}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setStepOnedata({ ...stepOnedata, purpose: e.target.value })
            }
          />
        </div>
        <div className="">
          <label className="text-[20px] block mb-1">Controll Group</label>
          <SearchDropDown
            className="w-96"
            options={userOption}
            onChange={(newValue: optionItem | null) =>
              setStepOnedata({
                ...stepOnedata,
                controllerGroup: newValue ? newValue?.value : "",
              })
            }
          />
        </div>
      </div>
      <div className="mb-8 grid grid-cols-2">
        <div className="">
          <label className="text-[20px] block mb-1">Owner*</label>
          <SearchDropDown
            className="w-96"
            options={userOption}
            onChange={(newValue: optionItem | null) =>
              setStepOnedata({
                ...stepOnedata,
                owner: newValue ? newValue?.value : "",
              })
            }
          />
          {formError && stepOnedata.owner === "" && (
            <ValidationError message="Owner of workspace is required" />
          )}
        </div>
        {stepOnedata.organizationDepartment !== "CIO" && (
          <div className="">
            <label className="text-[20px] block mb-1">Secondary Owner*</label>
            <SearchDropDown
              className="w-96"
              options={userOption}
              onChange={(newValue: optionItem | null) =>
                setStepOnedata({
                  ...stepOnedata,
                  secondaryOwner: newValue ? newValue?.value : "",
                })
              }
            />
            {formError && stepOnedata.secondaryOwner === "" && (
              <ValidationError message="Secondary owner of workspace is required" />
            )}
          </div>
        )}
      </div>
    </div>
  );
});
