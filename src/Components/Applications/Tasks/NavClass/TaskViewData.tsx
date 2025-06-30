import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { NavItem } from "reactstrap";
import { Href } from "../../../../Constants";
import { TaskData } from "../../../../Data/Applications/Task";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setActiveTab } from "../../../../ReduxToolkit/Reducers/TaskSlice";
import { NavClassType } from "../../../../Types/Applications";

const TaskViewData: React.FC<NavClassType> = ({ activeToggle }) => {
  const { activeTab } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const tabHandler = (tab: string) => {
    dispatch(setActiveTab(tab));
    activeToggle(tab);
  };

  return (
    <Fragment>
      {TaskData.map((item) => (
        <NavItem key={item.id}>
          <Link to={Href} className={activeTab === item.activeTab ? "active" : ""} onClick={() => tabHandler(item.activeTab)}>
            <span className="title">{item.title}</span>
          </Link>
        </NavItem>
      ))}
    </Fragment>
  );
};
export default TaskViewData;
