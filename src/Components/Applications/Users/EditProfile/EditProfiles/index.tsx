import { Button, Card, CardFooter, Col, Form } from "reactstrap";
import { EditProfileTitle, UpdateProfile } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { EditProfileFormBody } from "./EditProfileFormBody";

const EditProfileForm = () => {
  return (
    <Col xl="8">
      <Form onSubmit={(event) => event.preventDefault()}>
        <Card>
          <CommonCardHeader title={EditProfileTitle} />
          <EditProfileFormBody />
          <CardFooter className="text-end">
            <Button color="primary">{UpdateProfile}</Button>
          </CardFooter>
        </Card>
      </Form>
    </Col>
  );
};

export default EditProfileForm;
