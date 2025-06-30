import { Button, Card, CardBody, Col, Form, Input } from "reactstrap";
import { Bio, MyProfiles, Save } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonUserFormGroup from "../Common/CommonUserFormGroup";
import { UserFormHead } from "./UserFormHead";

const MyProfile = () => {
  const BioText = "On the other hand, we denounce with righteous indignation";

  return (
    <Col xl="4">
      <Card>
        <CommonCardHeader title={MyProfiles} headClass="pb-0"/>
        <CardBody>
          <Form onSubmit={(event) => event.preventDefault()} className="user-edit-form">
            <UserFormHead />
            <div className="mb-3">
              <h6 className="form-label">{Bio}</h6>
              <Input type="textarea" rows={4} defaultValue={BioText} />
            </div>
            <CommonUserFormGroup type="email" title="Email-Address" placeholder="your-email@domain.com" />
            <CommonUserFormGroup type="password" title="Password" defaultValue="Password"/>
            <CommonUserFormGroup type="email" title="Website" placeholder="http://Uplor.com" />
            <div className="form-footer">
              <Button color="primary" className="d-block">{Save}</Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MyProfile;
