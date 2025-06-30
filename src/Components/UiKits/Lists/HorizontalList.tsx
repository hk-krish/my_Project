import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { HorizontalListTitle } from "../../../Constants";
import { HorizontalColor, HorizontalListData, HorizontalListSubTitle } from "../../../Data/UiKits/Lists";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const HorizontalList = () => {
  return (
    <Col xxl="6" xs="12" className="box-col-12">
      <Card className="height-equal">
        <CommonCardHeader title={HorizontalListTitle} span={HorizontalListSubTitle} />
        <CardBody>
          <div className="horizontal-list-wrapper dark-list">
            {HorizontalListData &&
              HorizontalListData.map((item, index) => (
                <ListGroup className={`fw-bold list-content ${item.class}`} key={index}>
                  {item.data &&
                    item.data.map((data, i) => (
                      <ListGroupItem className={`${i === 0 && HorizontalColor[index]}`} key={i}>
                        {data}
                      </ListGroupItem>
                    ))}
                </ListGroup>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HorizontalList;
