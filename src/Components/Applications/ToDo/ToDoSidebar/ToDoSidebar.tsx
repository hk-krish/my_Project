import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { ToDoFilter } from "../../../../Constants";
import ToDoNavBar from "./ToDoNavBar";
import ToDoUserProfile from "./ToDoUserProfile";

const ToDoSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Col xxl="3" xl="4" className="box-col-30">
      <div className="email-sidebar md-sidebar">
        <Button color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={() => setOpen(!open)}>
          {ToDoFilter}
        </Button>
        <div className={`mail-left-bar md-sidebar-aside ${open ? "open" : ""}`}>
          <Card className="overflow-hidden">
            <CardBody>
              <div className="message-sidebar left-bookmark custom-scrollbar">
                <ToDoUserProfile />
                <ToDoNavBar />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default ToDoSidebar;
