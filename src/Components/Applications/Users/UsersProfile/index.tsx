import { Container, Row } from "reactstrap";
import { UserProfile, Users } from "../../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import TextContent from "./TextContent";
import SinglePost from "./SinglePost";
import TwoGridPost from "./TwoGridPost";
import ListViewPost from "./ListViewPost";
import Profile from "./Profile";

const UsersProfileContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={UserProfile} parent={Users} />
      <Container fluid>
        <div className="user-profile only-users">
          <Row>
            <Profile />
            <SinglePost />
            <TwoGridPost />
            <TextContent />
            <ListViewPost />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default UsersProfileContainer;
