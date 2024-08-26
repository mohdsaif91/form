export interface stepTwoProps {
  retentionPeriod: number;
  typeOfData: string[];
  regulatoryEntityApplicable: string[];
  estimatedPeopleToUseThisWorkspaceInternal: number;
  estimatedPeopleToUseThisWorkspaceExternal: number;
  doWeOwnDataorProcessing: string;
  formError?: boolean;
}

export interface submitStepTwoprops {
  onClick: (data: stepTwoProps) => void;
}
