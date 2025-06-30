import { useState } from "react";
import { Card, CardBody, Col, ListGroup, ListGroupItem, Row, TabContent, TabPane } from "reactstrap";
import { JsBehaviorTitle } from "../../../Constants";
import { JsBehaviorListData, JsBehaviorNavData, JsBehaviorSubTitle } from "../../../Data/UiKits/Lists";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const JsBehavior = () => {
  const [activeList, setActiveList] = useState("1");
  return (
    <Col sm="12" xl="12">
      <Card>
        <CommonCardHeader title={JsBehaviorTitle} span={JsBehaviorSubTitle} />
        <CardBody className="behaviour-list">
          <Row>
            <Col sm="4">
              <ListGroup>
                {JsBehaviorNavData.map((item, index) => (
                  <ListGroupItem key={index} action className={activeList === `${index + 1}` ? "active bg-primary" : ""} onClick={() => setActiveList(`${index + 1}`)}>
                    {item}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col sm="8">
              <TabContent activeTab={activeList}>
                {JsBehaviorListData &&
                  JsBehaviorListData.map((item, index) => (
                    <TabPane className={`${item.class} ${activeList === item.id ? "show" : ""}`} tabId={item.id} key={index}>
                      {item.htmlText}
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
export default JsBehavior;
