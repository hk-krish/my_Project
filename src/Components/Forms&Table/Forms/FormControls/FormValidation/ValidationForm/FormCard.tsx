import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap";
import { ChooseFile, City, DescriptionLabel, FirstName, LooksGood, Password, State, SubmitForm, Zip } from "../../../../../../Constants";
import { Options } from "../../../../../../Data/Forms&Table/Forms/FormControls";
import { FormDataTypes } from "../../../../../../Types/FormsType";
import RadioPayMethod from "../../../Common/RadioPayMethod";
import CareerSelect from "./CareerSelect";

const FormCard = () => {
  const [validate, setValidate] = useState(false);
  const {register,handleSubmit,formState: { errors }} = useForm<FormDataTypes>();
  const onSubmit = () => setValidate(true);

  return (
    <Form className="needs-validation custom-input" onSubmit={handleSubmit(onSubmit)}>
      <Row className="g-3">
        <Col xs="12">
          <Label>{FirstName}</Label>
          <input type="text" className={`form-control ${errors.firstName ? "is-invalid" : ""} ${validate && !errors.firstName ? "is-valid" : ""}`} placeholder="Mark" {...register("firstName", { required: "Please enter your valid name" })} />
          {errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>}
          {validate && !errors.firstName && <FormFeedback valid>{LooksGood}</FormFeedback>}
        </Col>
        <Col xs="12">
          <Col sm="12"><Label className="col-form-label">{Password}</Label></Col>
          <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""} ${validate && !errors.password ? "is-valid" : ""}`} {...register("password", { required: "Please enter your valid password" })} autoComplete="off"/>
          {errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
        </Col>
        <Col xs="12" className="position-relative">
          <Label>{State}</Label>
          <select className={`form-select ${errors.state ? "is-invalid" : ""} ${validate && !errors.state ? "is-valid" : ""}`} {...register("state", { required: "Please provide a valid state" })}>
            {Options.map((item, index) => (<option value={item.value} key={index}>{item.label}</option>))}
          </select>
          {errors.state && <FormFeedback>{errors.state.message}</FormFeedback>}
          {validate && !errors.state && <FormFeedback valid>{LooksGood}</FormFeedback>}
        </Col>
        <Col md="6">
          <Label>{City}</Label>
          <input type="text" className={`form-control ${errors.city ? "is-invalid" : ""} ${validate && !errors.city ? "is-valid" : ""}`} {...register("city", { required: "Please provide a valid city" })} />
          {errors.city && <FormFeedback>{errors.city.message}</FormFeedback>}
          {validate && !errors.city && <FormFeedback valid>{LooksGood}</FormFeedback>}
        </Col>
        <Col md="6">
          <Label>{Zip}</Label>
          <input type="text" className={`form-control ${errors.zip ? "is-invalid" : ""} ${validate && !errors.zip ? "is-valid" : ""}`} {...register("zip", { required: "Please provide a valid zip" })} />
          {errors.zip && <FormFeedback>{errors.zip.message}</FormFeedback>}
          {validate && !errors.zip && <FormFeedback valid>{LooksGood}</FormFeedback>}
        </Col>
        <RadioPayMethod colClass="col-12" />
        <CareerSelect />
        <Col xs="12">
          <Label>{ChooseFile}</Label>
          <input type="file" className={`form-control ${errors.file ? "is-invalid" : ""} ${validate && !errors.file ? "is-valid" : ""}`} {...register("file", { required: "Invalid form file selected" })} />
          {errors.file && <FormFeedback>{errors.file.message}</FormFeedback>}
        </Col>
        <Col xs="12">
          <Label>{DescriptionLabel}</Label>
          <textarea className={`form-control ${errors.description ? "is-invalid" : ""} ${validate && !errors.description ? "is-valid" : ""}`} {...register("description", { required: "Please enter a message in the textarea." })} />
          {errors.description && <FormFeedback>{errors.description.message}</FormFeedback>}
        </Col>
        <Col xs="12">
          <FormGroup check>
            <Input type="checkbox" id="invalidCheck" />
            <Label htmlFor="invalidCheck" check>{"Agree to terms and conditions"}</Label>
          </FormGroup>
        </Col>
        <Col xs="12">
          <Button color="primary">{SubmitForm}</Button>
        </Col>
      </Row>
    </Form>
  );
};
export default FormCard;
