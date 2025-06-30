import { Button, Col, Form, Input, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Cancel, CreateTag, Save, TagColor, TagName } from "../../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setTagModal } from "../../../../ReduxToolkit/Reducers/BookmarkTabSlice";

const Tag = () => {
  const { tagModal } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const tagToggle = () => dispatch(setTagModal());

  return (
    <Modal className="modal-bookmark" size="lg" isOpen={tagModal} toggle={tagToggle}>
      <ModalHeader toggle={tagToggle}><h4>{CreateTag}</h4></ModalHeader>
      <ModalBody>
        <Form className="form-bookmark needs-validation">
          <Row className="g-2">
            <Col md="12" className="mb-3 mt-0">
              <Label>{TagName}</Label>
              <Input type="text" />
            </Col>
            <Col md="12" className="mb-3 mt-0">
              <Label>{TagColor}</Label>
              <input type="color" className="d-block form-color" defaultValue="#2b5f60" />
            </Col>
          </Row>
          <Button color="secondary" className="me-1" onClick={tagToggle}>
            {Save}
          </Button>
          <Button color="primary" onClick={tagToggle}>
            {Cancel}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default Tag;