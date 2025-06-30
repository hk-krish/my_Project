import { useCallback, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CustomNavComponent from "./CustomNavComponent";
import CustomTabContent from "./CustomTabContent";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import { CustomWizardFormProps } from "../../../../../../Types/FormsType";

const CustomWizard: React.FC<CustomWizardFormProps> = ({ title, divClass, navColClass, tabColClass ,differentId}) => {
  const [steps, setSteps] = useState(1);
  const activeCallBack = useCallback((tab: number) => setSteps(tab), []);
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={title} />
        <CardBody>
          <div className={`horizontal-wizard-wrapper ${divClass ? divClass : ""}`}>
            <Row className="g-3">
              <div className={`main-horizontal-header ${navColClass}`}>
                <CustomNavComponent activeCallBack={activeCallBack} steps={steps} />
              </div>
              <div className={tabColClass}>
                <CustomTabContent activeCallBack={activeCallBack} steps={steps} differentId={differentId}/>
              </div>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CustomWizard;
