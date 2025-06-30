import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Href, IconTabsTitle } from "../../../Constants";
import { IconTabsSubTitle, TabIconData, TabIconNavData } from "../../../Data/UiKits/Tabs";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
const IconTabs = () => {
  const [basicTab, setBasicTab] = useState("1");
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={IconTabsTitle} span={IconTabsSubTitle} />
        <CardBody>
          <Nav tabs className="simple-wrapper">
            {TabIconNavData.map((item, index) => (
              <NavItem key={index}>
                <NavLink href={Href} className={`txt-secondary ${basicTab === `${index + 1}` ? "active" : ""}`} onClick={() => setBasicTab(`${index + 1}`)}>
                  <i className={`icofont ${item.icon}`}/>
                  {item.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={basicTab}>
            {TabIconData &&
              TabIconData.map((item, index) => (
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
export default IconTabs;
