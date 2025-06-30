import { Card, Col, Row } from "reactstrap";
import { blogBoxListData } from "../../../../Data/Miscellaneous/Blog";
import { dynamicImage, Image } from "../../../../Utils";

const BlogBoxList = () => {
  return (
    <Col xl="6" className="set-col-12 box-col-12">
      {blogBoxListData.map((data) => (
        <Card key={data.id}>
          <Row className="blog-box blog-list">
            <Col sm="5">
              <Image className="img-fluid sm-100-w" src={dynamicImage(`blog/blog-${data.src}`)} alt="" />
            </Col>
            <Col sm="7">
              <div className="blog-details">
                <div className="blog-date">
                  <span>{data.date}</span> {"January 2024"}
                </div>
                <h4>{"Perspiciatis unde omnis iste natus"}</h4>
                <div className="blog-bottom-content">
                  <ul className="blog-social">
                    <li>{"by: Admin"}</li>
                    <li>{data.hits}</li>
                  </ul>
                  <hr />
                  <p className="mt-0">{"inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit."}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </Col>
  );
};

export default BlogBoxList;
