import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { dynamicImage, Image } from "../../../../../Utils";
import { ContactEdit } from "../../Common/ContactEdit";

const ChatHeader = () => {
  const {selectedUser} = useAppSelector((state)=> state.chat)
  
  return (
    <div className="right-sidebar-title">
      <div className="common-space">
        <div className="chat-time">
          <div className="active-profile">
            <Image className="img-fluid rounded-circle" src={dynamicImage(`${selectedUser?.image ? `${selectedUser?.image}` : "avtar/3.jpg"}`)} alt="user"/>
            <div className="status bg-success" />
          </div>
          <div>
            <span>{selectedUser?.name ? selectedUser?.name : "Cameron Williamson"}</span>
            <p>Online</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="contact-edit chat-alert bg-light-danger">
            <i className="icon-info-alt txt-danger" />
          </div>
          <ContactEdit dropClass="chat-alert bg-light-primary"/>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;