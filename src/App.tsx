import { useRef, useState } from "react";

import TabContainer from "./Components/TabContainer/TabsContainer";
import { StepOne } from "./Pages/StepOne/StepOne";
import { StepTwo } from "./Pages/StepTwo/StepTwo";
import StepThree from "./Pages/StepThree/StepThree";
import { formStep, handleClick } from "./rootInterface";
import { stepOneProps } from "./Pages/StepOne/stepOneProps";
import { stepTwoProps } from "./Pages/StepTwo/stepTwoProps";
import { stepThreeProps } from "./Pages/StepThree/stepThreeProps";
import {
  initialStepOneData,
  initialStepThreeData,
  initialStepTwoData,
} from "./util/data";

import "./App.css";

function App() {
  const [step, setStep] = useState<formStep>(0);
  const [formData, setFormData] = useState<
    stepOneProps & stepTwoProps & stepThreeProps
  >({ ...initialStepOneData, ...initialStepTwoData, ...initialStepThreeData });

  const stepOneRef = useRef<handleClick | null>(null);
  const stepTwoRef = useRef<handleClick | null>(null);
  const stepThreeRef = useRef<handleClick | null>(null);

  const renderSteps = (): JSX.Element => {
    let component: JSX.Element | null = null;
    switch (step) {
      case 0:
        component = (
          <StepOne
            onClick={(data) => {
              setFormData({ ...formData, ...data });
              setStep((state) => state + 1);
            }}
            ref={stepOneRef}
          />
        );
        break;
      case 1:
        component = (
          <StepTwo
            onClick={(data) => {
              setFormData({ ...formData, ...data });
              setStep((state) => state + 1);
            }}
            ref={stepTwoRef}
          />
        );
        break;
      default:
        component = (
          <StepThree
            onClick={(data) => {
              console.log("called <>?");
              setFormData({ ...formData, ...data });
            }}
            ref={stepThreeRef}
          />
        );
        break;
    }
    return component;
  };

  const handleClick = () => {
    if (step === 0) {
      stepOneRef.current?.click();
    } else if (step === 1) {
      stepTwoRef.current?.click();
    } else {
      stepThreeRef.current?.click();
    }
  };

  console.log(formData, " <>?");

  return (
    <div className="mx-20 my-10 px-20 ">
      <div className="flex flex-col">
        <TabContainer
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
