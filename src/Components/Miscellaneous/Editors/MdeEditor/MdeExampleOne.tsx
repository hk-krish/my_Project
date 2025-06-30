import SimpleMdeReact from "react-simplemde-editor";
import { Card, CardBody, Col, Row } from "reactstrap";
import { MdeEditorExample } from "../../../../Constants";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";

const MdeExampleOne = () => {
  const MdeEditorText = `Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`;

  return (
    <Row>
      <Col sm="12">
        <Card>
          <CommonCardHeader title={MdeEditorExample} />
          <CardBody>
            <SimpleMdeReact id="editor_container" value={MdeEditorText} options={{ autofocus: true, spellChecker: false }} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default MdeExampleOne;
