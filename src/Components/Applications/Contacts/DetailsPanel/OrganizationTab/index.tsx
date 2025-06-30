import { useState } from "react";
import { Card, CardBody, Col, Row, TabContent, TabPane } from "reactstrap";
import { OrganizationTitle } from "../../../../../Constants";
import { organizationList } from "../../../../../Data/Applications/Contacts";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import OrganizationList from "./List";
import OrganizationTabs from "./Tabs";

const OrganizationTab = () => {
  const [orgActiveTab, setOrgActiveTab] = useState(1);

  return (
    <Card className="mb-0">
      <CommonCardHeader headClass="d-flex" title={OrganizationTitle} span={[{ text: "5 Contacts" }]} />
      <CardBody className="p-0">
        <Row className="list-persons">
          <OrganizationList orgActiveTab={orgActiveTab} setOrgActiveTab={setOrgActiveTab} />
          <Col xl="8" md="7" className="xl-50">
            <TabContent activeTab={orgActiveTab}>
              {organizationList.map((user) => (
                <TabPane tabId={user.id} key={user.id}>
                  <OrganizationTabs user={user} />
                </TabPane>
              ))}
            </TabContent>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
export default OrganizationTab;
