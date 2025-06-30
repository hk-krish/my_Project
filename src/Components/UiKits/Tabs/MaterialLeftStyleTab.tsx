import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Href, MaterialLeftStyleTabTitle } from "../../../Constants";
import { LeftTabData, MaterialLeftSubTitle, LeftNavData } from "../../../Data/UiKits/Tabs";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const MaterialLeftStyleTab = () => {
  const [basicTab, setBasicTab] = useState("1");
  return (
    <Col xxl="6">
      <Card>
        <CommonCardHeader title={MaterialLeftStyleTabTitle} span={MaterialLeftSubTitle} />
        <CardBody>
          <div className="tabs-responsive-side">
            <div className="material-wrapper">
              <div className="d-flex">
                <Nav className="flex-column nav-secondary nav-left border-tab">
                  {LeftNavData.map((item, index) => (
                    <NavItem key={index}>
                      <NavLink href={Href} className={`nav-effect ${basicTab === `${index + 1}` ? "active" : ""}`} onClick={() => setBasicTab(`${index + 1}`)}>
                        {item}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </div>
              <div className="material-content">
                <TabContent activeTab={basicTab}>
                  {LeftTabData &&
                    LeftTabData.map((item, index) => (
                      <TabPane className={`fade ${basicTab === item.id ? "show" : ""}`} tabId={item.id} key={index}>
                        {item.text}
                      </TabPane>
                    ))}
                </TabContent>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MaterialLeftStyleTab;
