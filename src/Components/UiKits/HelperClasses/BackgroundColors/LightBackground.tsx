import { Col } from "reactstrap";
import { LightBackgroundsTitle } from "../../../../Constants";
import { BorderColorData } from "../../../../Data/UiKits/HelperClasses";

const LightBackground = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 border">
        <h3 className="mb-3">{LightBackgroundsTitle}</h3>
        {BorderColorData &&
          BorderColorData.map((item, index) => (
            <div className="helper-common-box" key={index}>
              <div className={`helper-box alert-light-${item.color}`} />
              <span>{`.alert-light-${item.color}`}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};
export default LightBackground;
