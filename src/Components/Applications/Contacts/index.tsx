import { useCallback, useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { Apps, Contacts } from "../../../Constants";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchContacts } from "../../../ReduxToolkit/Reducers/ContactReducer";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import Sidebar from "./Sidebar";
import DetailsPanel from "./DetailsPanel";

const ContactsContainer = () => {

  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState(1);
  const changeTab = useCallback((tab: number) => setActiveTab(tab), []);
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <>
      <Breadcrumbs mainTitle={Contacts} parent={Apps} />
      <Container fluid>
        <div className="message-wrap bookmark-wrap">
          <Row>
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} changeTab={changeTab} />
            <DetailsPanel activeTab={activeTab} />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ContactsContainer;