import { Container, Row } from "reactstrap";
import { EditProfileTitle, Users } from "../../../../Constants";
import AddProjectsAndUpload from "./Projects";
import EditProfileForm from "./EditProfiles";
import MyProfile from "./MyProfile";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const EditProfileContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={EditProfileTitle} parent={Users} />
      <Container fluid>
        <div className="edit-profile">
          <Row>
            <MyProfile />
            <EditProfileForm />
            <AddProjectsAndUpload />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default EditProfileContainer;
