import { CheckCircle } from "react-feather";
import { Badge, Button, Nav, NavItem } from "reactstrap";
import { Completed, Href, InProcess, Pending, ToDoList } from "../../../../Constants";
import { SideBartList } from "../../../../Data/Applications/Todo";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { Link } from "react-router-dom";

const ToDoNavBar = () => {
  const { todoList } = useAppSelector((state) => state.todo);
  return (
    <Nav className="main-menu">
      <NavItem>
        <Button color="primary" block className="badge-light btn-mail w-100 text-white">
          <CheckCircle className="me-2" />
          {ToDoList}
        </Button>
      </NavItem>
      {SideBartList.map((item, i) => (
        <NavItem key={i}>
          <Link to={Href}>
            <span className={`iconbg badge-light-${item.color}`}> {item.icon}</span>
            <span className="title ms-2">{item.tittle}</span>
            <Badge color={item.tittle === "In Process" ? "primary" : item.color} pill className="text-white">
              {item.tittle === Completed && todoList.filter((data) => data.badge === "Done").length}
              {item.tittle === Pending && todoList.filter((data) => data.badge === "Pending").length}
              {item.tittle === InProcess && todoList.filter((data) => data.badge === "In Progress").length}
            </Badge>
          </Link>
        </NavItem>
      ))}
    </Nav>
  );
};

export default ToDoNavBar;
