import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Apps, ToDoHeading } from "../../../Constants";
import ToDoBody from "./ToDoBody/ToDoBody";
import ToDoSidebar from "./ToDoSidebar/ToDoSidebar";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const ToDoContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ToDoHeading} parent={Apps} />
      <Container fluid className="message-wrap bookmark-wrap todo-wrap">
        <Row>
          <ToDoSidebar />
          <ToDoBody />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ToDoContainer;
