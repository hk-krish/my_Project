import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { EditorsText, InlineEditors } from "../../../../Constants";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";

const InlineEditor = () => {
  const LoremText: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate urna, sed dignissim arcu. Aliquam at ligula imperdiet, faucibus ante a, interdum enim. Sed in mauris a lectus lobortis condimentum. Sed in nunc magna. Quisque massa urna, cursus vitae commodo eget, rhoncus nec erat. Sed sapien turpis, elementum sit amet elit vitae, elementum gravida eros. In ornare tempus nibh ut lobortis. Nam venenatis justo ex, vitae vulputate neque laoreet a.`;
  const [editing, setEditing] = useState(false);
  const showEditor = () => setEditing(!editing);

  return (
      <Col sm="12" className="p-0">
        <Card>
          <CommonCardHeader title={InlineEditors} headClass="pb-0"/>
           <CardBody>
          {editing ? (
            <Fragment>
              <CKEditor editor={ClassicEditor} data={LoremText} />
              <Button color="light" onClick={() => setEditing(false)}>{`Hide`}</Button>
            </Fragment>
          ) : (
            <div onClick={showEditor}>
              <h1 className="m-0">{EditorsText}</h1>
              <p>{LoremText}</p>
            </div>
          )}
        </CardBody>
        </Card>
      </Col>
  );
};

export default InlineEditor;
