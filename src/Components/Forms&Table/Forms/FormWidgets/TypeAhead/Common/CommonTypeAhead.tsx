import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import { CommonTypeAheadProps } from "../../../../../../Types/FormsType";

const CommonTypeAhead: React.FC<CommonTypeAheadProps> = ({ title, subTitle, options, placeholder, labelKey, className, id }) => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={title} span={subTitle} />
        <CardBody>
          <div>
            <Form className="theme-form">
              <div className={className}>
                <Typeahead id={id} options={options} labelKey={labelKey} placeholder={placeholder} />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CommonTypeAhead;
