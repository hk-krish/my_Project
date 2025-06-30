import { Fragment } from "react/jsx-runtime";
import { Card, Col } from "reactstrap";
import { LearningGridData } from "../../../../Data/Miscellaneous/Learning";
import { dynamicImage, Image } from "../../../../Utils";

const BlogBoxGrid = () => {
  return (
    <Fragment>
      {LearningGridData.map((item) => (
        <Col xl="4" sm="6" className="xl-50 box-col-6" key={item.id}>
          <Card>
            <div className="blog-box blog-grid text-center product-box">
              <div className="product-img">
                <Image className="img-fluid top-radius-blog" src={dynamicImage(`faq/${item.src}`)} alt="" />
                <div className="product-hover">
                  <ul>
                    <li><i className="icon-link"></i></li>
                    <li><i className="icon-import"></i></li>
                  </ul>
                </div>
              </div>
              <div className="blog-details-main">
                <ul className="blog-social justify-content-center">
                  <li>{item.date}</li>
                  <li>{"by: Admin"}</li>
                  <li>{"0 Hits"}</li>
                </ul>
                <hr />
                <p className="blog-bottom-details">{item.content}</p>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default BlogBoxGrid;
