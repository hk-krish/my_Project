import { Fragment, useState } from "react";
import { Button, Modal, ModalHeader } from "reactstrap";
import { OpenModalTheme, ThemeSignUp } from "../../../../../Constants";
import ThemeModalForm from "./ThemeModalForm";

const ThemeModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <Button color="primary" onClick={toggle}>{OpenModalTheme}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <ModalHeader className="justify-content-center border-0">{ThemeSignUp}</ModalHeader>
          <ThemeModalForm />
        </div>
      </Modal>
    </Fragment>
  );
};
export default ThemeModal;