import { Button, Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";
import { CustomFileInputTitle, Submit, Upload, Verify } from "../../../../../Constants";
import { CustomFileInputSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const CustomFileInput = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CustomFileInputTitle} span={CustomFileInputSubTitle} />
        <CardBody className="main-custom-form input-group-wrapper">
          <InputGroup>
            <InputGroupText htmlFor="inputGroupFile01">{Upload}</InputGroupText>
            <Input id="inputGroupFile01" type="file" />
          </InputGroup>
          <InputGroup>
            <Input id="inputGroupFile02" type="file" />
            <InputGroupText htmlFor="inputGroupFile02">{Verify}</InputGroupText>
          </InputGroup>
          <InputGroup>
            <Button color="success" id="inputGroupFileAddon03" outline>
              <i className="icofont icofont-ui-copy"></i>
            </Button>
            <Input id="inputGroupFile03" type="file" />
          </InputGroup>
          <InputGroup>
            <Input id="inputGroupFile04" type="file" />
            <Button color="success" id="inputGroupFileAddon04" outline>{Submit}</Button>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomFileInput;
