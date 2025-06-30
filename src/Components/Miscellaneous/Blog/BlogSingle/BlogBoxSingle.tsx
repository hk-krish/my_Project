import { blogBoxShadowList, blogSingleData, singleBlogContent } from "../../../../Data/Miscellaneous/Blog";
import { dynamicImage, Image } from "../../../../Utils";
import CommentSection from "./CommentSection";

const BlogBoxSingle = () => {
  return (
    <div className="blog-single">
      <div className="blog-box blog-details">
        <Image className="img-fluid w-100" src={dynamicImage(`blog/blog-single.jpg`)} alt="blog-main" />
        <div className="blog-details">
          <ul className="blog-social">
            <li>{"25 July 2024"}</li>
            {blogBoxShadowList.map((item) => (
              <li key={item.id}>
                <i className={`icofont icofont-${item.icon}`} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <h4 className="mt-3 f-w-600">{"The Harpeth rises in the westernmost part of Rutherford County, just to the east of the community of College Grove in eastern Williamson County. Internet."}</h4>
          <div className="single-blog-content-top">
            {singleBlogContent.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <section className="comment-box">
        <h4>{"Comment"}</h4>
        <hr />
        <ul>
          {blogSingleData.map((item) => (
            <li key={item.id}>
              {item.id !== 2 ? (
                <CommentSection item={item} colClass="col-md-4" socialComment={true} />
              ) : (
                <ul>
                  <li>
                    <CommentSection item={item} colClass="col-xl-12" />
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default BlogBoxSingle;
