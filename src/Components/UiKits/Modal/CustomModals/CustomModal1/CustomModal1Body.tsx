import { Link } from "react-router-dom";
import { Card, CardBody, Col, Modal } from "reactstrap";
import { BrooklynSimmons } from "../../../../../Constants";
import { DemoModalData } from "../../../../../Data/UiKits/Modal";
import { CustomModalBodyType } from "../../../../../Types/UiKitsType";
import { dynamicImage, Image } from "../../../../../Utils";
import SvgIcon from "../../../../CoreComponents/SvgIcon";
import { routes } from "../../../../../Routers/routes";

const CustomModal1Body:React.FC<CustomModalBodyType> = ({ modal, toggle }) => {
  return (
    <Modal fade centered isOpen={modal} toggle={toggle}>
      <Col xl="12">
        <Card className="social-profile mb-0 rounded-0">
          <CardBody>
            <div className="social-img-wrap">
              <div className="social-img">
                <Image src={dynamicImage(`dashboard-8/profile.png`)} alt="profile" />
              </div>
              <div className="edit-icon">
                <SvgIcon iconId="profile-check" />
              </div>
            </div>
            <div className="social-details">
              <h5 className="mb-1 f-w-600">
                <Link to={routes.Social}>{BrooklynSimmons}</Link>
              </h5>
              <span className="f-light">{"@brookly.simmons"}</span>
              <ul className="social-follow">
                {DemoModalData &&
                  DemoModalData.map((item, index) => (
                    <li key={index}>
                      <h5 className="mb-0">{item.class}</h5>
                      <span className="f-light">{item.text}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Modal>
  );
};
export default CustomModal1Body;
