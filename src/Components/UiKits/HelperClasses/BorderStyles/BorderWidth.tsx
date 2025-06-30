import { Col } from "reactstrap";
import { BorderWidthTitle } from "../../../../Constants";

const BorderWidth = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 alert-light-light dark-helper">
        <h3 className="mb-3">{BorderWidthTitle}</h3>
        {[...Array(10)].map((_, index) => (
          <div className="helper-common-box" key={index}>
            <div className={`helper-box border border-${index + 1}`} />
            <span>{`.border-${index + 1}`}</span>
          </div>
        ))}
      </div>
    </Col>
  );
};
export default BorderWidth;
