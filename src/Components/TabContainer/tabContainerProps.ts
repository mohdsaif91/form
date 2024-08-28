import { formStep, validationStepErrorProps } from "../../rootInterface";

export interface tabContainerProps {
  activeStep: formStep;
  onTabChange: (stepNumebr: formStep) => void;
  validationStepError: validationStepErrorProps;
}

export interface tabItem {
  id: formStep;
  text: string;
}
