import { Card, CardBody, Col } from "reactstrap";
import { Comment } from "../../../../../Constants";
import { CommentBoxData, SingleBlogContentTop } from "../../../../../Data/Miscellaneous/Learning";
import { dynamicImage, Image } from "../../../../../Utils";
import CommentSection from "./CommentSection";

const BlogDetails = () => {
  return (
    <Col xl="9" className="xl-60 order-xl-0 order-1 box-col-12">
      <Card>
        <CardBody>
          <div className="blog-single">
            <div className="blog-box blog-details">
              <Image className="img-fluid w-100" src={dynamicImage(`faq/learning-1.png`)} alt="blog-main" />
              <div className="blog-details pb-0">
                <ul className="blog-social">
                  <li>{"25 July 2024"}</li>
                  <li><i className="icofont icofont-user"></i>{"Mark "}<span>{"Jecno"}</span></li>
                  <li><i className="icofont icofont-thumbs-up"></i>{"02 "}<span>{"Hits"}</span></li>
                  <li><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                </ul>
                <h4 className="pt-2">{"Knowledge can be defined as awareness of facts or as practical skills. there is wide agreement among philosophers that it is a form of true belief.Internet."}</h4>
                <div className="single-blog-content-top">
                  {SingleBlogContentTop.map((item, index) => (<p key={index}>{item}</p>))}
                </div>
              </div>
            </div>
            <section className="comment-box">
              <h4>{Comment}</h4>
              <hr />
              <ul>
                {CommentBoxData.map((item) => (
                  <li key={item.id}>
                    {item.id !== 2 ? (
                      <CommentSection item={item} colClass="col-md-4 xl-100" socialComment={true} />
                    ) : (
                      <ul>
                        <li><CommentSection item={item} colClass="col-xl-12" /></li>
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BlogDetails;
