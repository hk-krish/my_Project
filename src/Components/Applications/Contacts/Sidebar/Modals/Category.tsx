import { useState } from "react";
import { Button, Col, Form, Input, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Cancel, Save } from "../../../../../Constants";

const Category = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  return (
    <>
      <Button color="transparent" className="btn-category" onClick={toggle}>
        <span className="f-w-600 title">{"+ Add Category"}</span>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}><h4>{"Add Category"}</h4></ModalHeader>
        <ModalBody>
          <Form className="form-bookmark">
            <Row className="g-2">
              <Col md="12" className="mb-3">
                <Input type="text" required placeholder="Enter category name" />
              </Col>
            </Row>
            <Button color="secondary" className="me-2" onClick={toggle}>{Save}</Button>
            <Button color="primary" onClick={toggle}>{Cancel}</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Category;