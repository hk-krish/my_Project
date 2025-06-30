import { Button, Col, Form, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { Address, AddressType, Close, ContactNumber, Information, Name, Save } from "../../../../../../../Constants";
import { NewAddressModalProps } from "../../../../../../../Types/FormsType";

const NewAddressModal: React.FC<NewAddressModalProps> = ({ toggle, showModal }) => {
  return (
    <Modal isOpen={showModal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{Information}</ModalHeader>
      <ModalBody>
        <Form className="needs-validation" noValidate>
          <Row className="g-3">
            <Col xs="12">
              <Label>{Name}</Label>
              <Input type="text" placeholder="Enter your name" required />
            </Col>
            <Col xs="12">
              <Label>{Address}</Label>
              <Input type="textarea" rows={3} placeholder="Enter your address..." />
            </Col>
            <Col xs="12">
              <Label className="w-100">
                {AddressType}
                <Input type="select" required>
                  <option value="Home">{"Home"}</option>
                  <option value="Office">{"Office"}</option>
                </Input>
              </Label>
            </Col>
            <Col xs="12">
              <Label>{ContactNumber}</Label>
              <Input type="number" placeholder={"123456789"} />
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="transparent" onClick={toggle} className="m-0">{Close}</Button>
        <Button color="primary" onClick={toggle} className="m-0">{Save}</Button>
      </ModalFooter>
    </Modal>
  );
};

export default NewAddressModal;
