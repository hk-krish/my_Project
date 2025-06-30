import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { CustomListTitle } from "../../../Constants";
import { CustomListData, CustomListSubTitle } from "../../../Data/UiKits/Lists";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const CustomList = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={CustomListTitle} span={CustomListSubTitle} />
        <CardBody>
          <ListGroup className="main-lists-contents">
            {CustomListData &&
              CustomListData.map((item, index) => (
                <ListGroupItem action className={`${item.class}`} key={index}>
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="list-wrapper">
                      <Image className="list-img" src={dynamicImage(`user/${item.image}`)} alt="profile" />
                      <div className="list-content">
                        <h6 className={index === 0 ? "txt-light" : ""}>{item.head}</h6>
                        <p>{item.mail}</p>
                      </div>
                    </div>
                    <small>{item.span}</small>
                  </div>
                  <p className="mb-1">{item.subtext}</p>
                  <small className={index !== 0 ? "text-muted" : ""}>{item.follower}</small>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CustomList;
