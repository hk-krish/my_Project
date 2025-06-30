import { Link, MoreHorizontal, Printer, Trash2 } from "react-feather";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import SweetAlert from "sweetalert2";
import { Href, Primary, Print } from "../../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { removeAssignTask } from "../../../../ReduxToolkit/Reducers/TaskSlice";
import { EmptyTaskClassProp } from "../../../../Types/Applications";
import SearchNotFoundClass from "../../../CoreComponents/SearchNotFoundClass";

const AssignedToMeClass:React.FC<EmptyTaskClassProp> = ({ title }) => {
  const { myTask } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const deleteTask = (taskId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: Primary,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(removeAssignTask(taskId));
        SweetAlert.fire({ title: "Deleted!", text: "Your file has been deleted.", icon: "success", confirmButtonColor: Primary });
      } else {
        SweetAlert.fire({ text: "Your imaginary file is safe!", confirmButtonColor: Primary });
      }
    });
  };

  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h4 className="mb-0">{title}</h4>
        <a href={Href}><Printer className="me-2" />{Print}</a>
      </CardHeader>
      <CardBody className="p-0">
        <div className="taskadd">
          <div className="table-responsive">
            <Table>
              <tbody>
                {myTask && myTask.length ? (
                  myTask.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <h6 className="task_title_0">{data.title}</h6>
                          <p className="project_name_0">{data.collection}</p>
                        </td>
                        <td><p className="task_desc_0">{data.description}</p></td>
                        <td>
                          <a className="me-2" href={Href}><Link /></a>
                          <a href={Href}><MoreHorizontal /></a>
                        </td>
                        <td>
                          <a href={Href} onClick={() => deleteTask(data.id)}><Trash2 /></a>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>
                      <SearchNotFoundClass word="Tasks" />
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
export default AssignedToMeClass;
