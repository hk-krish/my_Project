import { Fragment, useEffect } from "react";
import { Container, Row } from "reactstrap";
import { Apps, Tasks } from "../../../Constants";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchTaskApiData, setActiveTab } from "../../../ReduxToolkit/Reducers/TaskSlice";
import NavClass from "./NavClass";
import TabClass from "./TabClass";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const TaskContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTaskApiData());
  }, [dispatch]);
  const activeToggle = (tab: string) => dispatch(setActiveTab(tab));

  return (
    <Fragment>
      <Breadcrumbs mainTitle={Tasks} parent={Apps} />
      <Container fluid>
        <div className="message-wrap bookmark-wrap">
          <Row>
            <NavClass activeToggle={activeToggle} />
            <TabClass />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default TaskContainer;
