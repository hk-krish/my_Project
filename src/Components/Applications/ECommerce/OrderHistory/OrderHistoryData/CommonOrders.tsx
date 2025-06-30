import { useState } from "react";
import { X } from "react-feather";
import { Rating } from "react-simple-star-rating";
import { Button, Card, CardBody, Col, Media, Row } from "reactstrap";
import { Href } from "../../../../../Constants";
import { OrderData } from "../../../../../Data/Applications/ECommerce";
import { OrderHistoryType } from "../../../../../Types/EcommerceType";
import { dynamicImage, Image } from "../../../../../Utils";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { Link } from "react-router-dom";

const CommonOrders: React.FC<OrderHistoryType> = ({ btn, color, title }) => {
  const [newOrder, setNewOrder] = useState(OrderData);
  const deleteHandler = (id: number) => {
    const newData = newOrder.filter((item) => item.id !== id);
    setNewOrder([...newData]);
  };

  return (
    <Card>
      <CommonCardHeader title={title} />
      <CardBody>
        <Row className="g-sm-4 g-3">
          {newOrder.map((item, index) => (
            <Col xxl="4" md="6" key={index}>
              <div className="prooduct-details-box">
                <Media className="d-flex">
                  <Image className="align-self-center img-fluid img-60" src={dynamicImage(`ecommerce/${item.image}`)} alt={item.name} />
                  <Media body className="ms-3 flex-grow-1">
                    <div className="product-name">
                      <h6><Link to={Href}>{item.name}</Link></h6>
                    </div>
                    <Rating initialValue={5} size={17} className="mt-1" />
                    <div className="price d-flex p-0 border-0">
                      <div className="text-muted me-2">Price &nbsp;</div> : 210$
                    </div>
                    <div className="avaiabilty">
                      <div className="text-success">In stock</div>
                    </div>
                    <Button tag="a" color={color} size="xs" href={Href}>{btn}</Button>
                    <X className="close" onClick={() => deleteHandler(item.id)} />
                  </Media>
                </Media>
              </div>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};
export default CommonOrders;
