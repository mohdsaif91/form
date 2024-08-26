export interface stepOneProps {
  dataID: string;
  workspacetitle: string;
  OrganizationDepartment: string;
  purpose: string;
  owner: string;
  secondaryOwner: string;
  controllerGroup: string;
  formError?: boolean;
}

export interface submitStepOneData {
  onClick: (data: stepOneProps) => void;
}
