import { useState } from "react";
import { Button, Card, CardBody, Col, Collapse, Row } from "reactstrap";
import { MultipleCollapseTitle, ToggleBoth, ToggleFirst, ToggleSecond } from "../../../Constants";
import { MultipleCollapseSubTitle } from "../../../Data/UiKits/Accordion";
import { CollapseStateProp } from "../../../Types/UiKitsType";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const MultipleCollapse = () => {
  const [collapseId, setCollapseId] = useState<CollapseStateProp>({ collapse1: false, collapse2: false });
  const toggleCollapse = (collapseIdKey: keyof CollapseStateProp) => setCollapseId((prevState) => ({ ...prevState, [collapseIdKey]: !prevState[collapseIdKey] }));
  const handleToggleBothClick = () => setCollapseId((prevState) => ({ collapse1: !prevState.collapse1, collapse2: !prevState.collapse2 }));

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={MultipleCollapseTitle} span={MultipleCollapseSubTitle} />
        <CardBody>
          <div className="common-flex">
            <Button color="primary" className="me-2" onClick={() => toggleCollapse("collapse1")}>{ToggleFirst}</Button>
            <Button color="warning" className="me-2" onClick={() => toggleCollapse("collapse2")}>{ToggleSecond}</Button>
            <Button color="success" onClick={handleToggleBothClick}>{ToggleBoth}</Button>
          </div>
          <Row>
            <Col xl="6">
              <Collapse isOpen={collapseId.collapse1} className={`multi-collapse dark-accordion`}>
                <Card className="mt-3 mb-0">
                  <CardBody className="collapse-wrapper accordion-light-primary">{"The collapse JavaScript plugin is used to show and hide content.Buttons or anchors are used as triggers that are mapped to specific elements you toggle.Collapsing an element will animate the height from it's current value to 0. Given how CSS handles animations, you cannot use padding on a collapse element.Instead, use the class as an independent wrapping element."}</CardBody>
                </Card>
              </Collapse>
            </Col>
            <Col xl="6">
              <Collapse isOpen={collapseId.collapse2} className={`multi-collapse dark-accordion`}>
                <Card className="mt-3 mb-0">
                  <CardBody className="collapse-wrapper accordion-light-warning">{"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.These classes control the overall appearance,  well as the showing and hiding via CSS transitions.You can modify any of this with custom CSS or overriding our default variables."}</CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MultipleCollapse;
