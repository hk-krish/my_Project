import { Card, CardBody, Col } from "reactstrap";
import { MultiFileUploadTitle } from "../../../Constants";
import { FileUploadData } from "../../../Data/BonusUi/Dropzone";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import CommonFileUpload from "../../CoreComponents/CommonFileUpload";

const MultiFileUpload = () => {
  return (
    <Col lg="6">
      <Card className="multifile-dropzone">
        <CommonCardHeader title={MultiFileUploadTitle} span={FileUploadData} />
        <CardBody className="dropzone-secondary">
          <CommonFileUpload multiple />
        </CardBody>
      </Card>
    </Col>
  );
};
export default MultiFileUpload;
