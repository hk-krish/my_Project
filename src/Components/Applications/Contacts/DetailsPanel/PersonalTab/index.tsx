import { useCallback, useEffect, useState } from "react";
import { Card, CardBody, Col, Row, TabContent, TabPane } from "reactstrap";
import { Contacts, Personal } from "../../../../../Constants";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { PersonalTabProp, UserCallbackUserType, UserUpdateType } from "../../../../../Types/Applications";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import ContactDetails from "./ContactDetails";
import NewContactList from "./ContactList";
import { UpdateContactForm } from "./UpdateContactForm";

const PersonalTab: React.FC<PersonalTabProp> = ({ historyToggle }) => {

  const { users } = useAppSelector((state) => state.contact);
  const [selectedUser, setSelectedUser] = useState<undefined | UserCallbackUserType | UserUpdateType>();
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({});

  const userCallback = useCallback((user: UserCallbackUserType) => setSelectedUser(user), []);
  const userEditCallback = useCallback((edit: boolean, usersData: UserUpdateType) => {
    setEditData(usersData);
    setSelectedUser(usersData);
    setEditing(edit);
  }, []);

  useEffect(() => setSelectedUser(users[0]), [users]);

  return (
    <Card className="mb-0">
      <CommonCardHeader headClass="d-flex" title={Personal} span={[{ text: `${users.length} ${Contacts}` }]} />
      <CardBody className="p-0">
        <Row className="list-persons">
          <NewContactList users={users} userCallback={userCallback} selectedUser={selectedUser ? selectedUser : users[0]} />
          <Col xl="8" md="7" className="xl-50">
            {editing ? (
              <UpdateContactForm editData={editData} userEditCallback={userEditCallback} />
            ) : (
              <TabContent activeTab={0}>
                <TabPane className="tab-content-child" tabId={0}>
                  <ContactDetails historyToggle={historyToggle} selectedUser={selectedUser ? selectedUser : users[0]} userEditCallback={userEditCallback} />
                </TabPane>
              </TabContent>
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
export default PersonalTab;