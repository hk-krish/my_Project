import { Link } from "react-router-dom";
import { Card, CardBody, Col, Modal } from "reactstrap";
import { CustomModalBodyType } from "../../../../../Types/UiKitsType";
import { dynamicImage, Image } from "../../../../../Utils";
import SvgIcon from "../../../../CoreComponents/SvgIcon";
import BalanceIconWrap from "./BalanceIconWrap";
import { routes } from "../../../../../Routers/routes";

const CustomModal3Body:React.FC<CustomModalBodyType> = ({ modal, toggle }) => {
  return (
    <Modal fade centered isOpen={modal} toggle={toggle}>
      <Col xl="12">
        <Card className="balance-box mb-0 rounded-0">
          <CardBody>
            <div className="balance-profile">
              <div className="balance-img">
                <Image src={dynamicImage(`dashboard/profile.png`)} alt="user vector" />
                <Link to={routes.Users.Profile} className="edit-icon"><SvgIcon iconId="pencil" /></Link>
              </div>
              <span className="f-light d-block">{"Your Balance "}</span>
              <h5 className="mt-1 f-w-600">{"$768,987.90"}</h5>
              <BalanceIconWrap />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Modal>
  );
};
export default CustomModal3Body;
