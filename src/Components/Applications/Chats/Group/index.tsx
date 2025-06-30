import { Fragment, useEffect } from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchChatApiData, fetchChatMemberApiData } from "../../../../ReduxToolkit/Reducers/ChatSlice";
import { Chats, GroupChat } from "../../../../Constants";
import RightGroupChatHeader from "./RightGroupChatHeader";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import Sidebar from "../Common/Sidebar";
import RightChatBody from "../Private/ChatWindow/ChatBody";

const GroupChatContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchChatMemberApiData());
    dispatch(fetchChatApiData());
  }, [dispatch]);

  return (
    <Fragment>
      <Breadcrumbs mainTitle={GroupChat} parent={Chats} />
      <Container fluid>
        <Row className="g-0">
          <Sidebar />
          <Col xxl="9" xl="8" md="7" className="box-col-7">
            <Card className="right-sidebar-chat">
              <RightGroupChatHeader />
              <RightChatBody />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default GroupChatContainer;
