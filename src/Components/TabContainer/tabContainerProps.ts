import { formStep } from "../../rootInterface";

export interface tabContainerProps {
  activeStep: formStep;
  onTabChange: (stepNumebr: formStep) => void;
}

export interface tabItem {
  id: formStep;
  text: string;
}
