import { Fragment } from "react";
import { Card, Col } from "reactstrap";
import { blogBoxGridData } from "../../../../Data/Miscellaneous/Blog";
import { dynamicImage, Image } from "../../../../Utils";

const BlogBoxGrid = () => {
  return (
    <Fragment>
      {blogBoxGridData.map((item,index) => (
        <Col md="6" xxl="3" className={`box-col-6 ${item.id === 2 || item.id === 3 ? "box-col-6" : ""}`} key={index}>
          <Card>
            <div className="blog-box blog-grid text-center">
              <Image className="img-fluid top-radius-blog" src={dynamicImage(`blog/blog-${item.image}`)} alt="" />
              <div className="blog-details-main">
                <ul className="blog-social">
                  <li>{"9 April 2024"}</li>
                  <li>{"by: Admin"}</li>
                  <li> {"0 Hits"}</li>
                </ul>
                <hr />
                <h6 className="blog-bottom-details">{"A huge part of it is the incomparable beauty you can encounter every day.People just anymore profound."}</h6>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default BlogBoxGrid;
