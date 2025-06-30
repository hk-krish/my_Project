import { Card, CardBody, Col } from "reactstrap";
import { SingleFileuploadTitle } from "../../../Constants";
import { FileUploadData } from "../../../Data/BonusUi/Dropzone";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import CommonFileUpload from "../../CoreComponents/CommonFileUpload";

const SingleFileupload = () => {
  return (
    <Col lg="6">
      <Card className="single-dropzone">
        <CommonCardHeader title={SingleFileuploadTitle} span={FileUploadData} />
        <CardBody>
          <CommonFileUpload />
        </CardBody>
      </Card>
    </Col>
  );
};
export default SingleFileupload;
