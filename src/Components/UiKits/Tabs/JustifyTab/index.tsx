import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { AdminProfile, Href, JustifyTabTitle } from "../../../../Constants";
import { JustifyNavData, JustifyTabSubTitle } from "../../../../Data/UiKits/Tabs";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import JustifyTabContent from "./JustifyTabContent";

const JustifyTab = () => {
  const [basicTab, setBasicTab] = useState("2");
  return (
    <Col xxl="6">
      <Card>
        <CommonCardHeader title={JustifyTabTitle} span={JustifyTabSubTitle} />
        <CardBody>
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0 border-bottom">
            <p>
              <em className="txt-danger">{AdminProfile}</em>
            </p>
            <Nav className="border-0 nav-warning" color="primary" pills>
              {JustifyNavData.map((item, index) => (
                <NavItem key={index}>
                  <NavLink href={Href} className={basicTab === `${index + 1}` ? "active" : ""} onClick={() => setBasicTab(`${index + 1}`)}>
                    {item}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
          <CardBody className="px-0 pb-0">
            <JustifyTabContent tabId={basicTab} />
          </CardBody>
        </CardBody>
      </Card>
    </Col>
  );
};
export default JustifyTab;
