import { Card, Col } from "reactstrap";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";

const ChatWindow = () => {
  return (
    <Col xxl="9" xl="8" md="7" className="box-col-7">
      <Card className="right-sidebar-chat">
        <ChatHeader />
        <ChatBody />
      </Card>
    </Col>
  );
};

export default ChatWindow;