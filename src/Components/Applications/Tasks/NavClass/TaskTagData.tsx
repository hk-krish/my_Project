import { NavItem } from "reactstrap";
import { NavClassType } from "../../../../Types/Applications";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setActiveTab } from "../../../../ReduxToolkit/Reducers/TaskSlice";
import { TaskTagDataList } from "../../../../Data/Applications/Task";
import { Href } from "../../../../Constants";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";

const TaskTagData:React.FC<NavClassType> = ({ activeToggle }) => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state) => state.task);
  const tabHandler = (tab: string) => {
    dispatch(setActiveTab(tab));
    activeToggle(tab);
  };

  return (
    <Fragment>
      {TaskTagDataList.map((item) => (
        <NavItem key={item.id}>
          <Link to={Href} className={activeTab === item.activeTab ? "show" : ""} onClick={() => tabHandler(item.activeTab)}>
            <span className="title"> {item.title}</span>
          </Link>
        </NavItem>
      ))}
    </Fragment>
  );
};
export default TaskTagData;