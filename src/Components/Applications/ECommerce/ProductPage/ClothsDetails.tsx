import { useState } from "react";
import { Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Href } from "../../../../Constants";
import { ClothsDetailsData, ClothsDetailsTabData } from "../../../../Data/Applications/ECommerce";

const ClothsDetails = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Col sm="12">
      <Nav tabs pills className="nav-primary mb-0">
        {ClothsDetailsData.map((data, index) => (
          <NavItem key={index}>
            <NavLink href={Href} className={activeTab === index + 1 ? "active" : ""} onClick={() => setActiveTab(index + 1)}>
              {data}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {ClothsDetailsTabData.map((desc, index) => (
          <TabPane tabId={index + 1} key={index}>
            {desc.map((text, idx) => (
              <p className={`mb-0 ${idx === 0 ? "m-t-20" : ""}`} dangerouslySetInnerHTML={{ __html: text }} key={idx} />
            ))}
          </TabPane>
        ))}
      </TabContent>
    </Col>
  );
};

export default ClothsDetails;
