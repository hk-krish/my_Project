import { Card, Col } from "reactstrap";
import { blogBoxShadowList } from "../../../../Data/Miscellaneous/Blog";
import { dynamicImage, Image } from "../../../../Utils";

const BlogBoxShadow = () => {
  return (
    <Col xl="6" className="set-col-12 box-col-12">
      <Card>
        <div className="blog-box blog-shadow">
          <Image className="img-fluid" src={dynamicImage(`blog/blog.jpg`)} alt="" />
          <div className="blog-details">
            <p>{"25 July 2024"}</p>
            <h4>{"Accusamus et iusto odio dignissimos ducimus qui blanditiis."}</h4>
            <ul className="blog-social">
              {blogBoxShadowList.map((item) => (
                <li key={item.id}>
                  <i className={`icofont icofont-${item.icon}`} />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default BlogBoxShadow;
