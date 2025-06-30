import { useAppDispatch, useAppSelector } from "../../../../../../../ReduxToolkit/Hooks";
import { changeChat, createNewChatAsync } from "../../../../../../../ReduxToolkit/Reducers/ChatSlice";
import { AllMemberType } from "../../../../../../../Types/Applications";
import { dynamicImage, Image } from "../../../../../../../Utils";
import SearchNotFoundClass from "../../../../../../CoreComponents/SearchNotFoundClass";
import { Badge } from "reactstrap";

const UserProfile = () => {

  const { members, selectedUser, currentUser, chats } = useAppSelector((state) => state.chat);
  var activeChat = 0;
  if (selectedUser != null) activeChat = selectedUser.id;
  const dispatch = useAppDispatch();
  const changeChatClick = (selectUser: number) => {
    const currentUserId = currentUser?.id;
    const currentChat = chats.find((x: { users: number[] }) => currentUser?.id !== undefined && x.users.includes(currentUser?.id) && x.users.includes(selectUser));
    if (currentChat) dispatch(changeChat(selectUser));
    else dispatch(createNewChatAsync({ currentUserId, selectUser, chats }));
  };

  return (
    <>
      {members && members.length > 0 ? (
        <ul className="chats-user custom-scrollbar">
          {members
            .filter((x: AllMemberType) => x.id !== currentUser?.id)
            .map((item: AllMemberType, id: number) => (
              <li className={`common-space ${activeChat === item.id ? "active" : ""}`} key={id} onClick={() => changeChatClick(item.id)}>
                <div className="chat-time">
                  <div className="active-profile">
                    <Image className="img-fluid rounded-circle" src={dynamicImage(`${item.image}`)} alt="user" />
                    <div className={`status bg-${item.online}`} />
                  </div>
                  <div>
                    <span>{item.name}</span>
                    <p>{item.status}</p>
                  </div>
                </div>
                <div>
                  <p>{item.time} </p>
                  {item.badge && (<Badge color="success">{item.badge}</Badge>)}
                </div>
              </li>
            ))}
        </ul>
      ) : (<SearchNotFoundClass word="Contact" />)}
    </>
  );
};

export default UserProfile;