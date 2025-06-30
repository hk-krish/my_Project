import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Href, PillsTabTitle } from "../../../Constants";
import { PillNavData, PillsTabSubTitle, PillTabData } from "../../../Data/UiKits/Tabs";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const PillsTab = () => {
  const [basicTab, setBasicTab] = useState("3");

  return (
    <Col sm="12" xxl="6">
      <Card className="height-equal">
        <CommonCardHeader title={PillsTabTitle} span={PillsTabSubTitle} />
        <CardBody>
          <Nav tabs className="nav-primary border-0" pills>
            {PillNavData.map((item, index) => (
              <NavItem key={index}>
                <NavLink href={Href} className={basicTab === `${index + 1}` ? "active" : ""} onClick={() => setBasicTab(`${index + 1}`)}>
                  {item}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={basicTab}>
            {PillTabData &&
              PillTabData.map((item, index) => (
                <TabPane className={`fade ${basicTab === item.id ? "show" : ""}`} tabId={item.id} key={index}>
                  {item.text}
                </TabPane>
              ))}
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};
export default PillsTab;
