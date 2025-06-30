import { Col, Row, TabContent, TabPane } from "reactstrap";
import { SocialAppTabContentProp } from "../../../../Types/Applications";
import TimelineTab from "./TimelineTab";
import AboutTab from "./AboutTab";
import PhotosTab from "./PhotosTab";
import { SocialUser } from "../../../../Data/Applications/Users";
import UserCard from "../../../CoreComponents/UserCard";

const SocialAppTabContent: React.FC<SocialAppTabContentProp> = ({ activeTab }) => {
  return (
    <TabContent activeTab={activeTab} className="tab-content">
      <TabPane tabId={1}>
        <TimelineTab />
      </TabPane>
      <TabPane tabId={2}>
        <AboutTab />
      </TabPane>
      <TabPane tabId={3}>
        <Row>
          {SocialUser.map((user) => (
            <Col sm="6" xxl="3" xl="4" className="box-col-4" key={user.id}>
              <UserCard user={user}/>
            </Col>
          ))}
        </Row>
      </TabPane>
      <TabPane tabId={4}>
        <Row>
          <PhotosTab />
        </Row>
      </TabPane>
    </TabContent>
  );
};

export default SocialAppTabContent;
