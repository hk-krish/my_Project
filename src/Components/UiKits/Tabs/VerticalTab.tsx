import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import { Href, VerticalTabTitle } from "../../../Constants";
import { VerticalNavData, VerticalTabData, VerticalTabSubTitle } from "../../../Data/UiKits/Tabs";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const VerticalTab = () => {
  const [basicTab, setBasicTab] = useState("2");
  return (
    <Col sm="12" xxl="6">
      <Card className="height-equal">
        <CommonCardHeader title={VerticalTabTitle} span={VerticalTabSubTitle} />
        <CardBody>
          <Row>
            <Col md="4" xs="12">
              <Nav className="flex-column nav-success" pills>
                {VerticalNavData.map((item, index) => (
                  <NavItem key={index}>
                    <NavLink href={Href} className={`f-w-600 ${basicTab === `${index + 1}` ? "active" : ""}`} onClick={() => setBasicTab(`${index + 1}`)}>
                      {item}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Col>
            <Col md="8" xs="12">
              <TabContent activeTab={basicTab}>
                {VerticalTabData &&
                  VerticalTabData.map((item, index) => (
                    <TabPane className={`fade ${basicTab === item.id ? "show" : ""}`} tabId={item.id} key={index}>
                      {item.text}
                    </TabPane>
                  ))}
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default VerticalTab;
