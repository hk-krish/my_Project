import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SweetAlert from "sweetalert2";
import { Href, Primary } from "../../../../../../Constants";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { deletedUser, setTempId } from "../../../../../../ReduxToolkit/Reducers/ContactReducer";
import { UserActionsProps, UserCallbackUserType, UserProps } from "../../../../../../Types/Applications";

const UserActions: React.FC<UserActionsProps> = ({ selectedUser, userEditCallback }) => {

  const dispatch = useAppDispatch();
  const editUsers = (usersData: UserCallbackUserType) => {
    if (usersData.id !== undefined) {
      dispatch(setTempId(usersData.id));
      userEditCallback(true, usersData as UserProps);
    }
  };

  const onDeleteUser = (userId: number | undefined) => {
    if (userId !== undefined) {
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
          dispatch(deletedUser(userId));
          SweetAlert.fire({ title: "Deleted!", text: "Your file has been deleted.", icon: "success", confirmButtonColor: Primary });
        } else {
          SweetAlert.fire({ text: "Your imaginary file is safe!", confirmButtonColor: Primary });
        }
      });
    } else toast.error("User ID is undefined");
  };
  return (
    <>
      <li>
        <Link to={Href} onClick={() => editUsers(selectedUser)}>{"Edit"}</Link>
      </li>
      <li>
        <Link to={Href} onClick={() => onDeleteUser(selectedUser.id)}>{"Delete"}</Link>
      </li>
    </>
  );
};
export default UserActions;