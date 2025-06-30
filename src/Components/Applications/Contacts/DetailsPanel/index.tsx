import { useState } from "react";
import { Card, Col, TabContent, TabPane } from "reactstrap";
import { Business, FavoritesTitle, FollowUp, Holidays, Ideas, Important } from "../../../../Constants";
import { ContactDetailsPanelProp } from "../../../../Types/Applications";
import HistoryCard from "./HistoryCard";
import OrganizationTab from "./OrganizationTab";
import PersonalTab from "./PersonalTab";
import EmptyState from "./EmptyState";

const DetailsPanel: React.FC<ContactDetailsPanelProp> = ({ activeTab }) => {

  const [showHistory, setShowHistory] = useState(false);
  const historyToggle = () => setShowHistory(!showHistory);
  
  return (
    <Col xl="9" md="12" className="box-col-12">
      <div className="mail-right-bar bookmark-tabcontent contacts-tabs">
        <Card className="message-body radius-left">
          <div className="ps-0">
            <TabContent activeTab={activeTab}>
              <TabPane tabId={1}>
                <PersonalTab historyToggle={historyToggle} />
              </TabPane>
              <TabPane tabId={2}>
                <OrganizationTab />
              </TabPane>
              <TabPane tabId={3}>
                <EmptyState title={FollowUp} />
              </TabPane>
              <TabPane tabId={4}>
                <EmptyState title={FavoritesTitle} />
              </TabPane>
              <TabPane tabId={5}>
                <EmptyState title={Ideas} />
              </TabPane>
              <TabPane tabId={6}>
                <EmptyState title={Important} />
              </TabPane>
              <TabPane tabId={7}>
                <EmptyState title={Business} />
              </TabPane>
              <TabPane tabId={8}>
                <EmptyState title={Holidays} />
              </TabPane>
              {showHistory && <HistoryCard historyToggle={historyToggle} showHistory={showHistory} />}
            </TabContent>
          </div>
        </Card>
      </div>
    </Col>
  );
};

export default DetailsPanel;