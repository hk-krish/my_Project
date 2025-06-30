import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Input, Row } from "reactstrap";
import { EnterDetails, Finish, Next, Previous, SignUpAccount } from "../../../../../Constants";
import AddressForm from "./AddressForm";
import MassageForm from "./MassageForm";
import PersonalForm from "./PersonalForm";
import RegisterWizardList from "./RegisterWizardList";
import VerifyForm from "./VerifyForm";

const RegisterWizard = () => {
  const [level, setLevel] = useState(1);
  const [formValue, setFormValue] = useState({ firstName: "", lastName: "", contactNumber: "", email: "", password: "", confirmPassword: "", birthDate: "", country: "", age: "", havePassport: "", state: "", city: "" });
  const [showFinish, setShowFinish] = useState(false);
  const handleBackButton = () => {
    setShowFinish(false);
    if (level === 2) setLevel(level - 1);
    if (level === 3) setLevel(level - 1);
    if (level === 4) setLevel(level - 1);
  };
  const updateUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleNextButton = () => {
    const { firstName, lastName, contactNumber, email, password, confirmPassword, birthDate, age, havePassport, country, state, city } = formValue;
    if (firstName !== "" && lastName !== "" && contactNumber !== "" && level === 1) setLevel(level + 1);
    else if (email !== "" && password !== "" && confirmPassword !== "" && level === 2) setLevel(level + 1);
    else if (age !== "" && birthDate !== "" && havePassport !== "" && level === 3) setLevel(level + 1);
    else if (country !== "" && state !== "" && city !== "" && level === 4) setShowFinish(true);
    else return toast.error("please fill all fields before jumping to next button");
  };
  const handleFinish = () => toast.success("Congratulation ! All step Done.");

  return (
    <Container fluid>
      <Row>
        <Col xs="12" className="p-0">
          <div>
            <div className="theme-form">
              <div className="wizard-4" id="wizard">
                <RegisterWizardList level={level} />
                <div className="step-container login-card">
                  <div>
                    <div className="wizard-title">
                      <h3 className="mb-1">{SignUpAccount}</h3>
                      <h5 className="text-muted mb-4">{EnterDetails}</h5>
                    </div>
                    <div className="login-main">
                      <Form className="theme-form">
                        <Input type="hidden" name="_token" value="iJquRbgH4Np4OcWzjk8Bd03CaexHzse7gz2vHrml" />
                        <div className="registration-content">
                          {level === 1 && <PersonalForm formValue={formValue} updateUserData={updateUserData} />}
                          {level === 2 && <AddressForm formValue={formValue} updateUserData={updateUserData} />}
                          {level === 3 && <MassageForm formValue={formValue} updateUserData={updateUserData} />}
                          {level === 4 && <VerifyForm formValue={formValue} updateUserData={updateUserData} />}
                        </div>
                        <div className="wizard-navigation mt-3">
                          <div>
                            {level > 1 && (
                              <Button color="primary" outline size="lg" className="me-2" onClick={handleBackButton}>
                                {Previous}
                              </Button>
                            )}
                            <Button color="primary" size="lg" className="text-center" onClick={showFinish ? handleFinish : handleNextButton}>
                              {showFinish ? Finish : Next}
                            </Button>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default RegisterWizard;
