export interface stepThreeProps {
  rmClassification: string;
  canAuditOrInscept: string;
  sopGuidelineForWorkSpace: string;
  reminderAtEnd: string;
  canDeleteIfNotInUsed: string;
  formError?: boolean;
}

export interface submitStepThreeprops {
  onClick: (data: stepThreeProps) => void;
  validateOnClick: (data: boolean) => void;
  invalidForm: boolean;
}
