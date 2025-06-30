import React, { Fragment } from "react";
import { Col, Input, InputGroup, Label, Row } from "reactstrap";
import { Github, Href, SocialLinks, Submit, Twitter } from "../../../../../../Constants";
import { StudentValidationFormProp } from "../../../../../../Types/FormsType";

const SocialLinksForm: React.FC<StudentValidationFormProp> = ({ formData, updateFormData }) => {
  return (
    <Fragment>
      <h5 className="mb-2">{SocialLinks}</h5>
      <Row className="g-3">
        <Col sm="6">
          <Label>{Twitter}</Label>
          <Input name="twitterUrl" onChange={updateFormData} value={formData.twitterUrl} type="url" placeholder="https://twitter.com" />
        </Col>
        <Col sm="6">
          <Label>{Github}</Label>
          <Input name="gitHubUrl" onChange={updateFormData} value={formData.gitHubUrl} type="url" placeholder="https:/github.com" />
        </Col>
        <Col xs="12">
          <InputGroup>
            <Input name="studentFile" onChange={updateFormData} type="file" />
            <a className="btn btn-outline-secondary" href={Href}>{Submit}</a>
          </InputGroup>
        </Col>
        <Col xs="12">
          <Input type="select" onChange={updateFormData} name="positions">
            <option value={""}>{"Positions"}</option>
            <option value={"1"}>{"Web Designer"}</option>
            <option value={"2"}>{"Software Engineer"}</option>
            <option value={"3"}>{"UI/UX Designer "}</option>
            <option value={"4"}>{"Web Developer"}</option>
          </Input>
        </Col>
        <Col xs="12">
          <Label>{"Why do you want to take this position?"}</Label>
          <Input type="textarea" name="positionQuestion" onChange={updateFormData} id="questionsTextarea" rows={2} />
        </Col>
      </Row>
    </Fragment>
  );
};
export default SocialLinksForm;
