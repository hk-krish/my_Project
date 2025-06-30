import { Col, Container, Row } from "reactstrap";
import { UserCards, Users } from "../../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import { SocialUser } from "../../../../Data/Applications/Users";
import UserCard from "../../../CoreComponents/UserCard";

const UsersCardsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={UserCards} parent={Users} />
      <Container fluid>
        <Row>
          {SocialUser.map((user) => (
            <Col sm="6" xxl="3" xl="4" className="box-col-4" key={user.id}>
              <UserCard user={user}/>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default UsersCardsContainer;
