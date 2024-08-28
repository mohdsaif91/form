export type formStep = number;

export interface handleClick {
  click: () => void;
  validateClick: () => void;
}

interface errorItem {
  flag: boolean;
}

export type validationStepErrorProps = errorItem[];
