import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { BorderTabsTitle, Href } from "../../../Constants";
import { BorderData, BorderNavData, BorderTabsSubTitle } from "../../../Data/UiKits/Tabs";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const BorderTabs = () => {
  const [basicTab, setBasicTab] = useState("2");

  return (
    <Col xxl="6">
      <Card>
        <CommonCardHeader title={BorderTabsTitle} span={BorderTabsSubTitle} />
        <CardBody>
          <Nav tabs className="border-tab nav-info mb-0">
            {BorderNavData.map((item, index) => (
              <NavItem key={index}>
                <NavLink href={Href} className={`nav-border txt-info nav-info ${basicTab === `${index + 1}` ? "active" : ""}`} onClick={() => setBasicTab(`${index + 1}`)}>
                  <i className={`icofont ${item.icon}`} />
                  {item.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={basicTab}>
            {BorderData &&
              BorderData.map((item, index) => (
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
export default BorderTabs;
