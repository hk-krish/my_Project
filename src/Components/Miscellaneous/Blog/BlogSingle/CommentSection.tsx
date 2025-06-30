import { Col, Row } from "reactstrap";
import { blogBoxShadowList } from "../../../../Data/Miscellaneous/Blog";
import { dynamicImage, Image } from "../../../../Utils";
import { CommentSectionProps } from "../../../../Types/MiscellaneousType";

const CommentSection:React.FC<CommentSectionProps> = ({ socialComment, colClass, item }) => {
  return (
    <div className="d-flex align-self-center">
      <Image className="align-self-center" src={dynamicImage(`blog/${item.src}`)} alt="Generic placeholder image" />
      <div className="flex-grow-1">
        <Row>
          <div className={colClass}>
            <h6 className="mt-0">
              {"Jolio Mark"}
              <span>{" ( Designer )"}</span>
            </h6>
          </div>
          {socialComment && (
            <Col md={8}>
              <ul className="flex-row comment-social float-start float-md-end">
                {blogBoxShadowList.slice(1, 3).map((list) => (
                  <li key={list.id}>
                    <i className={`fa-solid fa-${list.icon}`} />
                    {list.text}
                  </li>
                ))}
              </ul>
            </Col>
          )}
        </Row>
        <p>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
      </div>
    </div>
  );
};

export default CommentSection;
