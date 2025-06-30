import { Link } from "react-router-dom";
import { AlreadyLeaving, Register, YesLogout } from "../../../../Constants";
import { CenteredModalBodyProps } from "../../../../Types/UiKitsType";
import { dynamicImage, Image } from "../../../../Utils";
import CommonModal from "../Common/CommonModal";
import { Button } from "reactstrap";
import { routes } from "../../../../Routers/routes";

const OtherModal:React.FC<CenteredModalBodyProps> = ({ modal, toggle }) => {
  const ModalData = {isOpen: modal,center: true,toggler: toggle};
  return (
    <CommonModal modalData={ModalData}>
      <div className="modal-toggle-wrapper">
        <ul className="modal-img">
          <li><Image src={dynamicImage(`gif/logout.gif`)} alt="logout" /></li>
        </ul>
        <h4 className="pt-3 text-center">{AlreadyLeaving}</h4>
        <p className="text-center">{"Are you sure want to logout this dashboard?"}</p>
        <span className="d-block text-center mb-4">
          {"Not a member?"}
          <Link className="ms-1" to={routes.Auth.Register.Simple}>{Register}</Link>
        </span>
        <Button color="dark" className="d-flex m-auto" onClick={toggle}>{YesLogout}</Button>
      </div>
    </CommonModal>
  );
};
export default OtherModal;
