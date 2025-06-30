import { Fragment } from "react/jsx-runtime";
import { StepperHorizontalData } from "../../../../../../Data/Forms&Table/Forms/FormLayout";
import { StepperHorizontalProp } from "../../../../../../Types/FormsType";

const StepperHorizontal: React.FC<StepperHorizontalProp> = ({ step, finishClicked }) => {
  return (
    <Fragment>
      {StepperHorizontalData.map((data, index) => (
        <div key={index} className={`stepper-one step ${step > index + 1 || finishClicked === true ? "done active " : ""}`}>
          <div className="step-circle">
            <span>{index + 1}</span>
          </div>
          <div className="step-title">{data}</div>
          <div className="step-bar-left" />
          <div className="step-bar-right" />
        </div>
      ))}
    </Fragment>
  );
};
export default StepperHorizontal;
