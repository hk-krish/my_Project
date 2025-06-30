import { Card, CardBody, Col } from "reactstrap";
import ToDoHeader from "./ToDoHeader";
import ToDoList from "./ToDoList";

const ToDoBody = () => {
  return (
    <Col xxl="9" xl="8" className="box-col-12">
      <Card>
        <ToDoHeader />
        <CardBody>
          <div className="todo">
            <div className="todo-list-wrapper custom-scrollbar">
              <div className="todo-list-container">
                <ToDoList />
              </div>
            </div>
            <div className="notification-popup hide">
              <p>
                <span className="task" />
                <span className="notification-text" />
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToDoBody;
