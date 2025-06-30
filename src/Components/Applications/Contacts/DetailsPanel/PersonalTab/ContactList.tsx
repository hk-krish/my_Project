import { Col, Nav, NavLink } from "reactstrap";
import { ContactListProps, UserCallbackUserType } from "../../../../../Types/Applications";
import { dynamicImage, Image } from "../../../../../Utils";
import EmptyData from "../EmptyState";

const ContactList: React.FC<ContactListProps> = ({ users, userCallback, selectedUser }) => {

  const contactDetails = (user: UserCallbackUserType) => userCallback({ id: user.id, name: user.name, surname: user.surname, email: user.email, avatar: user.avatar, age: user.age, mobile: user.mobile });

  return (
    <Col xl="4" md="5" className="xl-50">
      <Nav className="flex-column" pills>
        {users.length > 0 ? (
          users.map((user, index) => (
            <NavLink className={user.id === selectedUser.id ? "active" : ""} key={index} onClick={() => contactDetails(user)}>
              <div className="d-flex">
                <Image className="img-50 img-fluid m-r-20 rounded-circle update_img_0" src={dynamicImage(user.avatar)} alt="" />
                <div className="flex-grow-1">
                  <h6 className="f-w-600">
                    <span className="first_name_0 f-w-600">{user.name}</span>
                    <span className="last_name_0 f-w-600">{user.surname}</span>
                  </h6>
                  <p className="email_add_0">{user.email}</p>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <EmptyData />
        )}
      </Nav>
    </Col>
  );
};
export default ContactList;