import { Card, CardBody, Col, FormGroup, Input, Label } from "reactstrap";
import { DefaultFileText, DisabledFileText, FileInputTitle, LargeFileText, MultipleFileText, SmallFileText } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { FileInputSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonInput from "../../Common/CommonInput";

const FileInput = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FileInputTitle} span={FileInputSubTitle} />
        <CardBody>
          <CommonInput title={DefaultFileText} id="formFile" inputType="file" formGroup />
          <FormGroup>
            <Label htmlFor="formFileMultiple">{MultipleFileText}</Label>
            <Input id="formFileMultiple" type="file" multiple />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="formFileDisabled">{DisabledFileText}</Label>
            <Input id="formFileDisabled" type="file" disabled />
          </FormGroup>
          <CommonInput title={SmallFileText} id="formFileSm" inputType="file" inputClass="form-control-sm" formGroup />
          <CommonInput title={LargeFileText} id="formFileLg" inputType="file" inputClass="form-control-lg" formGroup />
        </CardBody>
      </Card>
    </Col>
  );
};
export default FileInput;
