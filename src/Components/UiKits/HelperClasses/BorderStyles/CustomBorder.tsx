import { Col } from "reactstrap";
import { CustomBorderTitle } from "../../../../Constants";

const CustomBorder = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 alert-light-light dark-helper">
        <h3 className="mb-3">{CustomBorderTitle}</h3>
        <div className="helper-common-box">
          <div className="helper-box b-r-0 bg-light border"></div>
          <span>{".b-r-0"}</span>
        </div>
        {[...Array(10)].map((_, index) => (
          <div className="helper-common-box" key={index}>
            <div className={`helper-box bg-light border b-r-${index + 1}`} />
            <span>{`.b-r-${index + 1}`}</span>
          </div>
        ))}
      </div>
    </Col>
  );
};
export default CustomBorder;
