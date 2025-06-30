import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Col, Form, Label, Modal, ModalBody, Row } from "reactstrap";
import { Cancel, CreateTags, Primary, Save, TagColor, TagName } from "../../../../Constants";
import { CreateTagProp } from "../../../../Types/Applications";

const CreateTag:React.FC<CreateTagProp> = ({ tagCallback, tagModal,setTagModal }) => {
  const [validation,setValidation] = useState(false)
  const {register,handleSubmit,formState: { errors }} = useForm();
  const tagToggle = () => tagCallback(false);
  const AddTag = () => {
    toast.success("Your Form Submitted")
    setTagModal(false)
  };

  return (
    <Modal fade className="modal-bookmark" isOpen={tagModal} toggle={tagToggle} size="lg">
      <div className="modal-header">
        <h4 className="modal-title">{CreateTags}</h4>
        <Button close color="transparent" onClick={tagToggle}></Button>
      </div>
      <ModalBody>
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddTag)}>
          <Row>
            <Col md="12" className="mb-3 mt-0">
              <Label>{TagName}</Label>
              <input className={`form-control ${validation && `${errors.name ? "is-invalid" : "is-valid"}`}`} type="text" {...register("name", { required: true })} />
            </Col>
            <Col md="12" className="mt-0">
              <Label>{TagColor}</Label>
              <input className={`form-color d-block  ${validation && `${errors.color ? "is-invalid" : "is-valid"}`}`} type="color" {...register("color", { required: true })} defaultValue={Primary} />
            </Col>
          </Row>
          <Button color="secondary" className="me-1" type="submit" onClick={()=>setValidation(true)}>{Save}</Button>
          <Button color="primary" onClick={tagToggle}>{Cancel}</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default CreateTag;
