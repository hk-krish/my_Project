import { Col, Row } from "reactstrap";
import { AbbreviationIconType } from "../../../Types/Component";
import { FlagIconData } from "../../../Data/Icons/FlagIcons";

const FlagIconBody: React.FC<AbbreviationIconType> = ({ getIconTag }) => {
  return (
    <Row className="icon-lists flag-icons">
      {FlagIconData.map((icon, i) => (
        <Col xs="12" sm="6" xl="4" key={i} onClick={() => getIconTag(icon)}>
          <div className="d-flex">
            <i className={`flag-icon flag-icon-${icon.abbreviation}`}></i>
            <div className="flex-grow-1 align-self-center">
              <h5>{icon.abbreviation}</h5>
              <h6 className="mt-0">{icon.name}</h6>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};
export default FlagIconBody;
