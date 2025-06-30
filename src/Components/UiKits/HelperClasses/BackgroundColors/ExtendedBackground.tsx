import { Col } from "reactstrap";
import { ExtendedBackgroundTitle, LightBackground, LightCard } from "../../../../Constants";

const ExtendedBackground = () => {
  return (
    <Col xl="4" sm="12">
      <div className="border-wrapper h-100 border">
        <h3 className="mb-3">{ExtendedBackgroundTitle}</h3>
        <div className="helper-common-box">
          <div className="helper-box light-card" />
          <span>{LightCard}</span>
        </div>
        <div className="helper-common-box">
          <div className="helper-box light-background border" />
          <span>{LightBackground}</span>
        </div>
      </div>
    </Col>
  );
};
export default ExtendedBackground;
