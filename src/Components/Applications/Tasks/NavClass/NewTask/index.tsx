import { Fragment } from "react";
import { CheckCircle } from "react-feather";
import { Button, Modal, ModalBody } from "reactstrap";
import { AddTask, NewTask } from "../../../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setAddModal } from "../../../../../ReduxToolkit/Reducers/TaskSlice";
import  NewTaskModalForm  from "./NewTaskModalForm";

const NewTaskClass = () => {
  const { addModal } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const addToggle = () => dispatch(setAddModal());

  return (
    <Fragment>
      <Button color="transparent" className="badge-light-primary btn-block btn-mail w-100" onClick={addToggle}><CheckCircle className="me-2" />{NewTask}</Button>
      <Modal size="lg" isOpen={addModal} toggle={addToggle}>
        <div className="modal-header">
          <h4 className="modal-title">{AddTask}</h4>
          <Button close color="transparent" onClick={addToggle} />
        </div>
        <ModalBody>
          <NewTaskModalForm />
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default NewTaskClass;
