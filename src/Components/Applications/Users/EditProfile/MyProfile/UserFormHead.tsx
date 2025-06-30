import { Media, Row } from "reactstrap";
import { dynamicImage, Image } from "../../../../../Utils";
import { DesignerText } from "../../../../../Constants";

export const UserFormHead = () => {
  return (
    <Row className="mb-2">
      <div className="profile-title">
        <Media className="d-flex">
          <Image className="img-70 rounded-circle" alt="" src={dynamicImage(`user/7.jpg`)} />
          <Media body className="flex-grow-1">
            <h3 className="mb-1 f-w-600">MARK JECNO</h3>
            <p>{DesignerText}</p>
          </Media>
        </Media>
      </div>
    </Row>
  );
};