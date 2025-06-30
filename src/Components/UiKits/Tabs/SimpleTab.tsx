import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Href, SimpleTabTitle } from "../../../Constants";
import { SimpleNavData, SimpleTabData, SimpleTabSubTitle } from "../../../Data/UiKits/Tabs";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const SimpleTab = () => {
  const [basicTab, setBasicTab] = useState("2");
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={SimpleTabTitle} span={SimpleTabSubTitle} />
        <CardBody>
          <Nav tabs className="simple-wrapper">
            {SimpleNavData.map((item, index) => (
              <NavItem key={index}>
                <NavLink href={Href} className={`txt-primary ${basicTab === `${index + 1}` ? "active" : ""}`} onClick={() => setBasicTab(`${index + 1}`)}>
                  {item}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={basicTab}>
            {SimpleTabData &&
              SimpleTabData.map((item, index) => (
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
export default SimpleTab;
