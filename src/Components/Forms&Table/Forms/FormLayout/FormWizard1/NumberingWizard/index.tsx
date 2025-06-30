import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col } from "reactstrap";
import { Back, NumberingWizardTitle } from "../../../../../../Constants";
import BasicInfoForm from "./BasicInfoForm";
import CartInfoForm from "./CartInfoForm";
import FeedbackForm from "./FeedbackForm";
import FinishForm from "../../Common/FinishForm";
import StepperHorizontal from "./StepperHorizontal";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import { NumberingWizardSubTitle } from "../../../../../../Data/Forms&Table/Forms/FormLayout";

const NumberingWizard = () => {
  const [formData, setFormData] = useState({ email: "", firstName: "", password: "", confirmPassword: "", agreeTerms: false, placeHolderName: "", cardNumber: "", expiration: "", cvvNumber: "", uploadDocumentation: "", informationCheckBox: false, linkedInLink: "", gitHubLink: "", giveFeedBack: "", state: "", agreeConditions: false });
  const [step, setStep] = useState(1);
  const [showFinish, setShowFinish] = useState(false);
  const [finishClicked, setFinishClicked] = useState(false);

  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === "agreeTerms" || name === "informationCheckBox" || name === "agreeConditions" ? event.target.checked : name === "uploadDocumentation" ? event.target.files && event.target.files[0].name : event.target.value;
    setFormData((prevData) => ({...prevData,[name]: value}));
  };
  const handleBackButton = () => {
    setShowFinish(false);
    setStep((prev) => prev - 1);
    setFinishClicked(false);
  };
  const handleNextButton = () => {
    const { linkedInLink, gitHubLink, giveFeedBack, state, agreeConditions, email, firstName, password, confirmPassword, agreeTerms, placeHolderName, cardNumber, expiration, cvvNumber, uploadDocumentation, informationCheckBox } = formData;
    if (email !== "" && firstName !== "" && password !== "" && confirmPassword !== "" && agreeTerms !== false && step === 1) setStep(2);
    else if (placeHolderName !== "" && cardNumber !== "" && expiration !== "" && cvvNumber !== "" && informationCheckBox !== false && uploadDocumentation !== "" && step === 2) setStep(3);
    else if (linkedInLink !== "" && gitHubLink !== "" && giveFeedBack !== "" && state !== "" && agreeConditions !== false && step === 3) {
      setStep(4);
      setShowFinish(true);
    } else return toast.error("please fill out all the fields before moving on to the next step");
  };
  const handleFinishButton = () => {
    setFinishClicked(true);
    return toast.success("Successfully Completed");
  };
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={NumberingWizardTitle} span={NumberingWizardSubTitle} />
        <CardBody className="basic-wizard important-validation">
          <div className="stepper-horizontal custom-scrollbar" id="stepper1">
            <StepperHorizontal step={step} finishClicked={finishClicked} />
          </div>
          <div id="msform">
            {step === 1 && <BasicInfoForm updateFormData={updateFormData} formData={formData} />}
            {step === 2 && <CartInfoForm updateFormData={updateFormData} formData={formData} />}
            {step === 3 && <FeedbackForm updateFormData={updateFormData} formData={formData} />}
            {step === 4 && <FinishForm />}
          </div>
          <div className="wizard-footer d-flex gap-2 justify-content-end">
            {step > 1 && (<Button color="" className="alert-light-primary" onClick={handleBackButton}>{Back}</Button>)}
            <Button disabled={finishClicked} color="primary" onClick={showFinish ? handleFinishButton : handleNextButton}>{showFinish ? "Finish" : "Next"}</Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default NumberingWizard;
