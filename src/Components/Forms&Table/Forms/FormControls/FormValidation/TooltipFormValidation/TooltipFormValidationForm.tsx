import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Form, FormFeedback, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { City, FirstName, LastName, LooksGood, State, SubmitForm, UserName, Zip } from "../../../../../../Constants";
import { Options } from "../../../../../../Data/Forms&Table/Forms/FormControls";
import { FormDataTypes } from "../../../../../../Types/FormsType";

const TooltipFormValidationForm = () => {
  const [validate, setValidate] = useState(false);
  const {register,handleSubmit,formState: { errors }} = useForm<FormDataTypes>();
  const onSubmit = () => setValidate(true);

  return (
    <Form className="needs-validation custom-input" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Row className="g-3">
        <Col md="4" className="position-relative">
          <Label>{FirstName}</Label>
          <input type="text" className={`form-control ${errors.firstName ? "is-invalid" : ""} ${validate && !errors.firstName ? "is-valid" : ""}`} placeholder="Mark" {...register("firstName", { required: "Please enter your valid name" })} />
          <FormFeedback tooltip valid>{LooksGood}</FormFeedback>
        </Col>
        <Col md="4" className="position-relative">
          <Label>{LastName}</Label>
          <input type="text" className={`form-control ${errors.lastName ? "is-invalid" : ""} ${validate && !errors.lastName ? "is-valid" : ""}`} placeholder="Otto" {...register("lastName", { required: "Please enter your valid name" })} />
          <FormFeedback tooltip valid>{LooksGood}</FormFeedback>
        </Col>
        <Col md="4" className="position-relative">
          <Label>{UserName}</Label>
          <InputGroup className="has-validation">
            <InputGroupText>{"@"}</InputGroupText>
            <input type="text" className={`form-control ${errors.username ? "is-invalid" : ""} ${validate && !errors.username ? "is-valid" : ""}`} placeholder="Otto" {...register("username", { required: "Please choose a unique and valid username." })} />
            {errors.username && <FormFeedback tooltip>{errors.username.message}</FormFeedback>}
          </InputGroup>
        </Col>
        <Col md="6" className="position-relative">
          <Label htmlFor="validationTooltip03">{City}</Label>
          <input type="text" className={`form-control ${errors.city ? "is-invalid" : ""} ${validate && !errors.city ? "is-valid" : ""}`} {...register("city", { required: "Please provide a valid city" })} />
          {errors.city && <FormFeedback tooltip>{errors.city.message}</FormFeedback>}
        </Col>
        <Col md="3" className="position-relative">
          <Label>{State}</Label>
          <select className={`form-select ${errors.state ? "is-invalid" : ""} ${validate && !errors.state ? "is-valid" : ""}`} {...register("state", { required: "Please provide a valid state" })}>
            {Options.map((item, index) => (<option value={item.value} key={index}>{item.label}</option>))}
          </select>
          {errors.state && <FormFeedback tooltip>{errors.state.message}</FormFeedback>}
        </Col>
        <Col md="3" className="position-relative">
          <Label>{Zip}</Label>
          <input type="text" className={`form-control ${errors.zip ? "is-invalid" : ""} ${validate && !errors.zip ? "is-valid" : ""}`} {...register("zip", { required: "Please provide a valid zip" })} />
          {errors.zip && <FormFeedback tooltip>{errors.zip.message}</FormFeedback>}
        </Col>
        <Col xs="12">
          <Button color="primary">{SubmitForm}</Button>
        </Col>
      </Row>
    </Form>
  );
};
export default TooltipFormValidationForm;
