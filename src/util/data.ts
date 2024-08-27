export const tabData = [
  { id: 0, text: "Workspace Owner" },
  { id: 1, text: "Workspace Compliance" },
  { id: 2, text: "Workspace Framework" },
];

export const departmentOptions = ["RDS", "RWS", "CIO", "RDS:PL", "DSSM", "RMM"];

export const ownerOrProcessor = ["Owner", "Processor"];

export const yesNoOption = ["Yes", "No"];

export const initialStepOneData = {
  dataID: "",
  workspacetitle: "",
  OrganizationDepartment: "RDS",
  purpose: "",
  owner: "",
  secondaryOwner: "", // (Button to add another secondary user if needed),
  controllerGroup: "",
};
export const initialStepTwoData = {
  retentionPeriod: 1,
  typeOfData: [],
  regulatoryEntityApplicable: [],
  estimatedPeopleToUseThisWorkspaceInternal: 0,
  estimatedPeopleToUseThisWorkspaceExternal: 0,
  doWeOwnDataorProcessing: "owner",
};
export const initialStepThreeData = {
  rmClassification: "",
  canAuditOrInscept: "Yes",
  sopGuidelineForWorkSpace: "",
  reminderAtEnd: "",
  canDeleteIfNotInUsed: "Yes",
};
