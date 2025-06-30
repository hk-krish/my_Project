import { ErrorMessage, Field } from "formik";
import { Col, Label, Row } from "reactstrap";
import { ClientName, ClientNamePlaceholder, FixPrice, High, Hourly, Low, Medium, Priority, PriorityPlaceholder, ProjectProgress, ProjectProgressPlaceholder, ProjectTitle, ProjectTitlePlaceholder, ProjectType, Urgent } from "../../../../Constants";
import { Fragment } from "react/jsx-runtime";

const TitleAndClientSection = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <div className="mb-3">
            <Label>{ProjectTitle}</Label> 
            <Field name="title" type="text" className="form-control" placeholder={ProjectTitlePlaceholder} />
            <ErrorMessage name="title" component="span" className="text-danger" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mb-3">
            <Label>{ClientName}</Label>
            <Field name="client" className="form-control" type="text" placeholder={ClientNamePlaceholder} />
            <ErrorMessage name="client" component="span" className="text-danger" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="4">
          <div className="mb-3">
            <Label>{ProjectProgress}</Label>
            <Field name="progress" className="form-control" type="number" placeholder={ProjectProgressPlaceholder} />
            <ErrorMessage name="progress" component="span" className="text-danger" />
          </div>
        </Col>
        <Col sm="4">
          <div className="mb-3">
            <Label>{ProjectType}</Label>
            <Field name="type" as="select" className="form-select">
              <option value={Hourly}>{Hourly}</option>
              <option value={FixPrice}>{FixPrice}</option>
            </Field>
          </div>
        </Col>
        <Col sm="4">
          <div className="mb-3">
            <Label>{Priority}</Label>
            <Field name="priority" as="select" placeholder={PriorityPlaceholder} className="form-select">
              <option value={Low}>{Low}</option>
              <option value={Medium}>{Medium}</option>
              <option value={High}>{High}</option>
              <option value={Urgent}>{Urgent}</option>
            </Field>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default TitleAndClientSection;
