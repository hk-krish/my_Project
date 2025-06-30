import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { ContactFilter } from "../../../../Constants";
import { ContactSidebarProps } from "../../../../Types/Applications";
import ProfileHeader from "./Common/ProfileHeader";
import ContactOptions from "./ContactOptions";

const Sidebar: React.FC<ContactSidebarProps> = ({ activeTab, setActiveTab, changeTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Col xl="3" className="box-col-6">
      <div className="md-sidebar">
        <Button color="primary" className="md-sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>{ContactFilter}</Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? "open" : ""}`}>
          <div className="mail-left-bar">
            <Card>
              <CardBody>
                <div className="message-sidebar left-bookmark">
                  <ProfileHeader />
                  <ContactOptions activeTab={activeTab} setActiveTab={setActiveTab} changeTab={changeTab} />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default Sidebar;