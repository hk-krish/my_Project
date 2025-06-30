import { Fragment } from "react/jsx-runtime";
import { Card, Col, Row } from "reactstrap";
import { LearningListData } from "../../../../Data/Miscellaneous/Learning";
import { dynamicImage, Image } from "../../../../Utils";

const BlogBoxList = () => {
  return (
    <Fragment>
      {LearningListData.map((data) => (
        <Col xl="12" key={data.id}>
          <Card>
            <Row className="blog-box blog-list">
              <Col sm="5">
                <Image className="img-fluid sm-100-w" src={dynamicImage(`faq/${data.image}`)} alt="" />
              </Col>
              <Col sm="7">
                <div className="blog-details">
                  <div className="blog-date">
                    <span>{data.date}</span> {data.month}
                  </div>
                  <h3>{data.title}</h3>
                  <div className="blog-bottom-content">
                    <ul className="blog-social simple-list flex-row">
                      <li>{data.by}</li>
                      <li>{data.hits}</li>
                    </ul>
                    <hr />
                    <p className="mt-0">{data.paragraph}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default BlogBoxList;
