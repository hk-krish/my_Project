import { CheckCircle, Info, PlusSquare, Target } from "react-feather";
import { Link } from "react-router-dom";
import { Card, Col, Nav, NavItem, NavLink, Row } from "reactstrap";
import { All, CreateNewProject, Doing, Done, Href } from "../../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setActiveTab } from "../../../../ReduxToolkit/Reducers/ProjectSlice";
import { routes } from "../../../../Routers/routes";

const ProjectListHead = () => {
  const { activeTab } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();

  return (
    <Card>
      <Row>
        <Col md="6">
          <Nav tabs className="border-tab" id="top-tab">
            <NavItem><NavLink href={Href} className={activeTab === "1" ? "active" : ""} onClick={() => dispatch(setActiveTab("1"))}><Target />{All}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={activeTab === "2" ? "active" : ""} onClick={() => dispatch(setActiveTab("2"))}><Info />{Doing}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={activeTab === "3" ? "active" : ""} onClick={() => dispatch(setActiveTab("3"))}><CheckCircle />{Done}</NavLink></NavItem>
          </Nav>
        </Col>
        <Col md="6">
          <Link className="btn btn-primary d-flex align-items-center" to={routes.Project.Create}><PlusSquare />{CreateNewProject}</Link>
        </Col>
      </Row>
    </Card>
  );
};
export default ProjectListHead;
