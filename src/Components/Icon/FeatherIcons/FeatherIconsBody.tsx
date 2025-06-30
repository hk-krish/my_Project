import { Col, Row } from "reactstrap";
import { FeatherIconsData } from "../../../Data/Icons/FeatherIcons";
import { GetIconTagType } from "../../../Types/Component";

const FeatherIconsBody: React.FC<GetIconTagType> = ({ getIconTag }) => {
  const featherIcons = require("feather-icons");
  return (
    <Row className="icon-lists feather-icons">
      {FeatherIconsData.map((icon, i) => (
        <Col xs="12" sm="6" xl="4" key={i} onClick={() => getIconTag(icon)}>
          <div className="d-flex">
            <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[icon].toSvg(icon) }} />
            <div className="flex-grow-1 align-self-center">
              <h6 className="mt-0">{icon}</h6>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};
export default FeatherIconsBody;
