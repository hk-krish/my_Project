import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormFeedback, Input, Label, Row } from "reactstrap";
import { Cancel, EditMoreInformation, EmailAddress, Href, Name, Phone, Save } from "../../../../../../Constants";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { setEditData } from "../../../../../../ReduxToolkit/Reducers/ContactReducer";
import { UpdateContactFormProps, UserProps, UserUpdateType } from "../../../../../../Types/Applications";
import AdditionalInformationInputs from "./AdditionalInformationInputs";

export const UpdateContactForm: React.FC<UpdateContactFormProps> = ({ editData, userEditCallback }) => {

  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onUpdate = (updatedData: UserUpdateType) => {
    let withImageData = { ...updatedData, avatar: editData.avatar || `user/user.png`, id: editData.id };
    userEditCallback(false, withImageData);
    dispatch(setEditData(withImageData));
  };

  return (
    <div className="contact-editform ps-0">
      <Form onSubmit={handleSubmit(onUpdate)}>
        <Row className="g-2">
          <Col md="12" className="mt-0 mb-3">
            <Label>{Name}</Label>
            <Row>
              <Col sm="6">
                <input type="text" defaultValue={editData.name} className={`form-control ${errors.name ? "is-invalid" : ""}`} placeholder="First Name" {...register("name", { required: true })} />
                {errors.name && <FormFeedback>{"First name is required"}</FormFeedback>}
              </Col>
              <Col sm="6">
                <input type="text" defaultValue={editData.surname} className={`form-control ${errors.surname ? "is-invalid" : ""}`} placeholder="Last Name" {...register("surname", { required: true })} />
                {errors.surname && <FormFeedback>{"Last name is required"}</FormFeedback>}
              </Col>
            </Row>
          </Col>
          <Col md="12" className="mt-0 mb-3">
            <Label>{EmailAddress}</Label>
            <input type="email" defaultValue={editData.email} className={`form-control ${errors.email ? "is-invalid" : ""}`} {...register("email", { required: true })} />
            {errors.email && <FormFeedback>{"Please enter your email"}</FormFeedback>}
          </Col>
          <Col md="12" className="mt-0 mb-3">
            <Label>{Phone}</Label>
            <Row className="g-3">
              <Col sm="6">
                <input type="number" defaultValue={editData.mobile} className={`form-control ${errors.mobile ? "is-invalid" : ""}`} {...register("mobile", { required: true })} />
                {errors.mobile && <FormFeedback>{"Please enter Mobile number"}</FormFeedback>}
              </Col>
              <Col sm="6">
                <Input type="select">
                  <option>{"Mobile"}</option>
                  <option>{"Work"}</option>
                  <option>{"Others"}</option>
                </Input>
              </Col>
            </Row>
          </Col>
        </Row>
        {show ? (
          <AdditionalInformationInputs />
        ) : (
          <Link className="ps-0 edit-information" to={Href} onClick={() => setShow(true)}>{EditMoreInformation}</Link>
        )}
        <Button color="secondary" className="update-contact me-1">{Save}</Button>
        <Button color="primary" onClick={() => userEditCallback(false, editData as UserProps)}>{Cancel}</Button>
      </Form>
    </div>
  );
};
