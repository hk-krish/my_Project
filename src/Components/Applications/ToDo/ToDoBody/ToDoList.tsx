import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { removeItems, updateTodo } from "../../../../ReduxToolkit/Reducers/ToDoSlice";
import { ToDoProp } from "../../../../Types/Applications";
import { Badge } from "reactstrap";

const ToDoList = () => {
  const { todoList } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  const handleMarkedTodo = (item: ToDoProp) => {
    if (item.status === "completed") {
      dispatch(updateTodo({ id: item.id, status: "pending", badgeClass: "light-danger" }));
      toast.error(item.title + " as Incomplete");
    } else if (item.status === "pending") {
      dispatch(updateTodo({ id: item.id, status: "completed", badgeClass: "light-success" }));
      toast.success(item.title + " as Complete");
    }
  };
  return (
    <div className="todo-list-body">
      <ul id="todo-list">
        {todoList.map((item, i) => (
          <li className={`task ${item.status === "completed" ? "completed" : ""}`} key={i}>
            <div className="task-container">
              <div onClick={() => handleMarkedTodo(item)}>
                <h4 className="task-label">{item.title}</h4>
              </div>
              <div className="d-flex align-items-center gap-3">
                <Badge color="" className={`badge-${item.badge !== "Done" ? item.badgeClass : "light-success"}`} onClick={() => handleMarkedTodo(item)}>
                  {item.badge}
                </Badge>
                <h5 className="assign-name m-0">{item.timeLimit}</h5>
                <span className="task-action-btn">
                  <span className="action-box large delete-btn" title="Delete Task">
                    <i className="icon">
                      <i className="icon-trash" onClick={() => dispatch(removeItems(item))} />
                    </i>
                  </span>
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
