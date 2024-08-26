import { validationErrorProps } from "./validationErrorProps";

function ValidationError({ message }: Pick<validationErrorProps, "message">) {
  return <div className="text-errorRed mt-1">{message}</div>;
}

export default ValidationError;
