import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { PrintModalProps } from "../../../../Types/Applications";
import { Cancel, Print, PrintPreview } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";

const PrintModal: React.FC<PrintModalProps> = ({ printModal, selectedUser, toggleCallback }) => {

  const contentRef = useRef<HTMLDivElement>(null);
  const printModalToggle = () => toggleCallback(false);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <Modal className="modal-bookmark" isOpen={printModal} toggle={printModalToggle} centered>
      <ModalHeader toggle={printModalToggle}>{PrintPreview}</ModalHeader>
      <ModalBody className="list-persons">
        <div className="profile-mail pt-0" ref={contentRef}>
          <div className="d-flex">
            <Image className="img-100 img-fluid m-r-20 rounded-circle" src={dynamicImage(`${selectedUser.avatar}`)} alt="" />
            <div className="flex-grow-1 mt-0">
              <h3>
                <span>{selectedUser.name}</span>
                <span>{selectedUser.surname}</span>
              </h3>
              <p className="mb-0">{selectedUser.email}</p>
            </div>
          </div>
          <div className="mail-general">
            <h3>{"General"}</h3>
            <p>
              {"Email Address"} :
              <span className="font-primary" id="mailadd">
                {selectedUser.email}
              </span>
            </p>
          </div>
        </div>
        <Button color="secondary" className="me-1" onClick={() => handlePrint()}>
          {Print}
        </Button>
        <Button color="primary" onClick={printModalToggle}>
          {Cancel}
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default PrintModal;