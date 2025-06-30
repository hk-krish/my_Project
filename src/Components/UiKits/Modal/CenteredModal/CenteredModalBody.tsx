import { Button } from "reactstrap";
import { CenteredError, Close } from "../../../../Constants";
import { CenteredModalBodyProps } from "../../../../Types/UiKitsType";
import { dynamicImage, Image } from "../../../../Utils";
import CommonModal from "../Common/CommonModal";

const CenteredModalBody: React.FC<CenteredModalBodyProps> = ({ modal, toggle }) => {
  const data = {isOpen: modal,center: true,toggler: toggle};
  return (
    <CommonModal modalData={data}>
      <div className="modal-toggle-wrapper">
        <ul className="modal-img">
          <li className="text-center"><Image src={dynamicImage(`gif/danger.gif`)} alt="error" /></li>
        </ul>
        <h5 className="text-center pb-2">{CenteredError}</h5>
        <p className="text-center">{"Attackers on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations."}</p>
        <Button color="secondary" className="d-flex m-auto" onClick={toggle}>{Close}</Button>
      </div>
    </CommonModal>
  );
};
export default CenteredModalBody;
