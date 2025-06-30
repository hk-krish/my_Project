import { useState } from "react";
import { FilePond } from "react-filepond";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { DefaultDropzoneTitle } from "../../../Constants";
import { DefaultFileUpload } from "../../../Data/BonusUi/Dropzone";

const DefaultDropzone = () => {
  const [files, setFiles] = useState([]);
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={DefaultDropzoneTitle} span={DefaultFileUpload} />
        <CardBody>
          <FilePond files={files} onupdatefiles={() => setFiles} allowMultiple={true} maxFiles={1} labelIdle={'Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>'} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default DefaultDropzone;
