import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { Chats, PrivateChat } from "../../../../Constants";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchChatApiData, fetchChatMemberApiData } from "../../../../ReduxToolkit/Reducers/ChatSlice";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import Sidebar from "../Common/Sidebar";
import ChatWindow from "./ChatWindow";

const PrivateContainer = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchChatMemberApiData());
    dispatch(fetchChatApiData());
  }, [dispatch]);

  return (
    <>
      <Breadcrumbs mainTitle={PrivateChat} parent={Chats} />
      <Container fluid>
        <Row className="g-0">
          <Sidebar />
          <ChatWindow />
        </Row>
      </Container>
    </>
  );
};

export default PrivateContainer;