export interface stepOneProps {
  dataID: string;
  workspacetitle: string;
  organizationDepartment: string;
  purpose: string;
  owner: string;
  secondaryOwner: string;
  controllerGroup: string;
  formError?: boolean;
}

export interface submitStepOneData {
  onClick: (data: stepOneProps) => void;
  validateOnClick: (flag: boolean) => void;
  invalidForm: boolean;
}
