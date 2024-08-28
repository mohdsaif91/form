import { useRef, useState } from "react";

import TabContainer from "./Components/TabContainer/TabsContainer";
import { StepOne } from "./Pages/StepOne/StepOne";
import { StepTwo } from "./Pages/StepTwo/StepTwo";
import StepThree from "./Pages/StepThree/StepThree";
import {
  formStep,
  handleClick,
  validationStepErrorProps,
} from "./rootInterface";
import { stepOneProps } from "./Pages/StepOne/stepOneProps";
import { stepTwoProps } from "./Pages/StepTwo/stepTwoProps";
import { stepThreeProps } from "./Pages/StepThree/stepThreeProps";
import {
  initialStepOneData,
  initialStepThreeData,
  initialStepTwoData,
  validationStepErrorState,
} from "./util/data";

import "./App.css";

function App() {
  const [step, setStep] = useState<formStep>(0);
  const [formData, setFormData] = useState<
    stepOneProps & stepTwoProps & stepThreeProps
  >({ ...initialStepOneData, ...initialStepTwoData, ...initialStepThreeData });
  const [validationStepError, setValidationStepError] =
    useState<validationStepErrorProps>(validationStepErrorState);

  const stepOneRef = useRef<handleClick | null>(null);
  const stepTwoRef = useRef<handleClick | null>(null);
  const stepThreeRef = useRef<handleClick | null>(null);

  const handleStepOneClick = (data: stepOneProps) => {
    const {
      workspacetitle,
      organizationDepartment,
      owner,
      controllerGroup,
      secondaryOwner,
      purpose,
    } = data;
    const workspacetitleInput = document.querySelector(
      '[title="Workspace Title"]'
    ) as HTMLInputElement;
    workspacetitleInput.value = workspacetitle;
    const organizationDepartmentInput = document.querySelector(
      '[title="Department"]'
    ) as HTMLInputElement;
    organizationDepartmentInput.value = organizationDepartment;

    const ownerInput = document.querySelector(
      '[title="Owner"]'
    ) as HTMLInputElement;
    ownerInput.value = owner;

    const controllerGroupInput = document.querySelector(
      '[title="Control Group"]'
    ) as HTMLInputElement;
    controllerGroupInput.value = controllerGroup;

    const secondaryOwnerInput = document.querySelector(
      '[title="Secondary Owner"]'
    ) as HTMLInputElement;
    secondaryOwnerInput.value = secondaryOwner;

    const purposeInput = document.querySelector(
      '[title="Purpose"]'
    ) as HTMLInputElement;
    purposeInput.value = purpose;

    setFormData({ ...formData, ...data });
    setStep((state) => state + 1);
  };
  const handleStepTwoClick = (data: stepTwoProps) => {
    const {
      doWeOwnDataorProcessing,
      estimatedPeopleToUseThisWorkspaceExternal,
      estimatedPeopleToUseThisWorkspaceInternal,
      regulatoryEntityApplicable,
      retentionPeriod,
      typeOfData,
    } = data;
    const doWeOwnDataorProcessingInput = document.querySelector(
      '[title="Audit WS"]'
    ) as HTMLInputElement;
    doWeOwnDataorProcessingInput.value = doWeOwnDataorProcessing;

    const retentionPeriodInput = document.querySelector(
      '[title="Retention Period"]'
    ) as HTMLInputElement;
    retentionPeriodInput.value = retentionPeriod.toString();

    const estimatedPeopleToUseThisWorkspaceInternalInput =
      document.querySelector('[title="User Internal"]') as HTMLInputElement;
    estimatedPeopleToUseThisWorkspaceInternalInput.value =
      estimatedPeopleToUseThisWorkspaceInternal.toString();

    const estimatedPeopleToUseThisWorkspaceExternalInput =
      document.querySelector('[title="User External"]') as HTMLInputElement;
    estimatedPeopleToUseThisWorkspaceExternalInput.value =
      estimatedPeopleToUseThisWorkspaceExternal.toString();

    const regulatoryEntityApplicableInput = document.querySelector(
      '[title="Regulatory Entity"]'
    ) as HTMLInputElement;
    regulatoryEntityApplicableInput.value =
      regulatoryEntityApplicable.toString();

    const typeOfDataInput = document.querySelector(
      '[title="Data Type"]'
    ) as HTMLInputElement;
    typeOfDataInput.value = typeOfData.toString();

    setFormData({ ...formData, ...data });
    setStep((state) => state + 1);
  };
  const handleStepThreeClick = (data: stepThreeProps) => {
    const {
      canAuditOrInscept,
      canDeleteIfNotInUsed,
      reminderAtEnd,
      rmClassification,
      sopGuidelineForWorkSpace,
    } = data;
    console.log("called <>?");
    setFormData({ ...formData, ...data });

    const rmClassificationInput = document.querySelector(
      '[title="RM Classification"]'
    ) as HTMLInputElement;
    rmClassificationInput.value = rmClassification;

    const sopGuidelineForWorkSpaceInput = document.querySelector(
      '[title="SOP Guideline"]'
    ) as HTMLInputElement;
    sopGuidelineForWorkSpaceInput.value = sopGuidelineForWorkSpace;

    const canAuditOrInsceptInput = document.querySelector(
      '[title="Audit WS"]'
    ) as HTMLInputElement;
    canAuditOrInsceptInput.value = canAuditOrInscept;

    const reminderAtEndInput = document.querySelector(
      '[title="Reminder"]'
    ) as HTMLInputElement;
    reminderAtEndInput.value = reminderAtEnd;

    const canDeleteIfNotInUsedInput = document.querySelector(
      '[title="Workspace Use"]'
    ) as HTMLInputElement;
    canDeleteIfNotInUsedInput.value = canDeleteIfNotInUsed;

    console.log(
      validationStepError.filter((m) => m.flag === true).length === 0,
      " <>?"
    );

    if (validationStepError.filter((m) => m.flag === true).length === 0) {
      const finaBtn = document.querySelector(
        "#finalSubmitBtn"
      ) as HTMLButtonElement;
      finaBtn.click();
    }
  };

  const renderSteps = (): JSX.Element => {
    let component: JSX.Element | null = null;
    switch (step) {
      case 0:
        component = (
          <StepOne
            invalidForm={validationStepError[0].flag}
            validateOnClick={(flag: boolean) => {
              validationStepError[0].flag = flag;
              setValidationStepError([...validationStepError]);
            }}
            onClick={(data) => handleStepOneClick(data)}
            ref={stepOneRef}
          />
        );
        break;
      case 1:
        component = (
          <StepTwo
            invalidForm={validationStepError[1].flag}
            validateOnClick={(flag: boolean) => {
              validationStepError[1].flag = flag;
              setValidationStepError([...validationStepError]);
            }}
            onClick={(data) => handleStepTwoClick(data)}
            ref={stepTwoRef}
          />
        );
        break;
      default:
        component = (
          <StepThree
            invalidForm={validationStepError[2].flag}
            validateOnClick={(flag: boolean) => {
              validationStepError[2].flag = flag;
              setValidationStepError([...validationStepError]);
            }}
            onClick={(data) => handleStepThreeClick(data)}
            ref={stepThreeRef}
          />
        );
        break;
    }
    return component;
  };

  console.log(validationStepError, " <>? ARR");

  const handleClick = () => {
    if (step === 0) {
      stepOneRef.current?.validateClick();
      stepOneRef.current?.click();
    } else if (step === 1) {
      stepOneRef.current?.validateClick();
      stepTwoRef.current?.validateClick();
      stepTwoRef.current?.click();
    } else {
      stepOneRef.current?.validateClick();
      stepTwoRef.current?.validateClick();
      stepThreeRef.current?.validateClick();
      stepThreeRef.current?.click();
    }
  };

  console.log(formData, " <>?");

  return (
    <div className="mx-20 my-10 px-20">
      <div className="flex flex-col">
        <TabContainer
          validationStepError={validationStepError}
          activeStep={step}
          onTabChange={(stepNumber) => setStep(stepNumber)}
        />
        <div className="mt-8">{renderSteps()}</div>
      </div>
      <div className="mt-10 flex justify-end border-t-[1px] border-black w-full">
        <button
          className="rounded-md mt-10 text-[20px] mr-4 bg-blueColor px-6 py-3 font-[700]
         text-[white] hover:border-[1px]  hover:text-[black] hover:bg-[white] hover:border-black"
          onClick={() => handleClick()}
        >
          {step === 2 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default App;
