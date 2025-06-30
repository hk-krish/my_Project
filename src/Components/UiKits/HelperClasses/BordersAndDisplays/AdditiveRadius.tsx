import { Col } from "reactstrap";
import { AdditiveRadiusTitle } from "../../../../Constants";
import { AdditiveRadiusData } from "../../../../Data/UiKits/HelperClasses";

const AdditiveRadius = () => {
  return (
    <Col xl="4" sm="12">
      <div className="border-wrapper h-100 border">
        <h3 className="mb-3">{AdditiveRadiusTitle}</h3>
        {AdditiveRadiusData &&
          AdditiveRadiusData.map((item, index) => (
            <div className="helper-common-box" key={index}>
              <div className={`helper-radius bg-light ${item}`} />
              <span>{`.${item}`}</span>
            </div>
          ))}
      </div>
    </Col>
  );
};
export default AdditiveRadius;
