import { useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import { Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Add, Cancel, CategoryName, CreateNewCategoryHeading, Href, MdeEditorText } from "../../../../../../Constants";

const CreateNewCategory = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Col xs="12">
      <div className="category-button"> 
        <Button color="transparent" tag="a" className="button-primary bg-light-primary font-primary" href={Href} onClick={toggle}>
          <i className="me-2 fa fa-plus"> </i>
          {CreateNewCategoryHeading}
        </Button>
      </div> 
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>{CreateNewCategoryHeading}</ModalHeader>
        <ModalBody className="custom-input">
          <div className="create-category">
            <Label for="validationServer01">
              {CategoryName} <span className="text-danger"> *</span>
            </Label>
            <Input className="m-0" id="validationServer01" type="text" required />
            <div id="editor3" className="mt-2">
              <SimpleMdeReact id="editor_container" value={MdeEditorText} options={{ autofocus: true, spellChecker: false }} />
            </div>
            <p className="f-light">Improve product visibility by adding a compelling description.</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="light" className="font-dark" onClick={toggle}>
            {Cancel}
          </Button>
          <Button color="primary" onClick={toggle}>
            {Add}
          </Button>
        </ModalFooter>
      </Modal>
    </Col>
  );
};

export default CreateNewCategory;
