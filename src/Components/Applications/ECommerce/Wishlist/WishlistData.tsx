import { Rating } from "react-simple-star-rating";
import { Button, Col, Media, Row } from "reactstrap";
import { Href } from "../../../../Constants";
import { WhishListProduct } from "../../../../Data/Applications/ECommerce";
import { dynamicImage, Image } from "../../../../Utils";
import { Link } from "react-router-dom";

export const WishlistData = () => {
  return (
    <Row className="g-sm-4 g-3">
      {WhishListProduct.map((item, index) => (
        <Col xxl="4" md="6" key={index}>
          <div className="prooduct-details-box">
            <Media className="d-flex">
              <Image className="align-self-center img-fluid img-60" src={dynamicImage(`ecommerce/${item.image}`)} alt="#" />
              <Media body className="ms-3 flex-grow-1">
                <div className="product-name">
                  <h6><Link to={Href}>{item.name}</Link></h6>
                </div>
                <Rating initialValue={5} size={17} />
                <div className="price d-flex border-0 p-0">
                  <div className="text-muted me-2">Price</div> : 210$</div>
                <div className="avaiabilty">
                  <div className="text-success">In stock</div>
                </div>
                <div>
                <Button tag="a" href={Href} color="primary" size="xs">{`MoveToCarts`}</Button>
                </div>
              </Media>
            </Media>
          </div>
        </Col>
       ))} 
    </Row>
  );
};
