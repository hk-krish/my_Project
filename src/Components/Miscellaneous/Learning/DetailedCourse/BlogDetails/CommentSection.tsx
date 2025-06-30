import { Col, Row } from "reactstrap";
import { CommentSectionProps } from "../../../../../Types/MiscellaneousType";
import { dynamicImage, Image } from "../../../../../Utils";

const CommentSection: React.FC<CommentSectionProps> = ({ socialComment, colClass, item }) => {
  return (
    <div className="d-flex align-self-start">
      <Image className="align-self-start" src={dynamicImage(`blog/${item.src}`)} alt="Generic placeholder image" />
      <div className="flex-grow-1">
        <Row>
          <div className={colClass}>
            <h6 className="mt-0">
              {item.name}
              <span>{"(Designer)"}</span>
            </h6>
          </div>
          {socialComment && (
            <Col md="8" className="xl-100">
              <ul className="flex-row comment-social float-start float-md-end learning-comment">
                <li><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                <li><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
              </ul>
            </Col>
          )}
        </Row>
        <p>{item.paragraph}</p>
      </div>
    </div>
  );
};
export default CommentSection;
