import { useState } from "react";
import { Users } from "react-feather";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import FormContent from "./FormContent";

const AddContact = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  return (
    <>
      <Button color="transparent" className="badge-light-primary btn-block btn-mail w-100" onClick={toggle}><Users className="me-2" />{"New Contacts"}</Button>
      <Modal modalClassName="modal-bookmark" isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}><h4>{"Add Contact"}</h4></ModalHeader>
        <ModalBody>
          <FormContent setModal={setModal} toggle={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddContact;