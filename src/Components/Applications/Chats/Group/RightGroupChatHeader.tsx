import { ContactEdit } from "../Common/ContactEdit";
import GroupImages from "./GroupImages";

const RightGroupChatHeader = () => {
  return (
    <div className="right-sidebar-title">
      <div className="common-space">
        <GroupImages />
        <div className="d-flex gap-2">
          <div className="contact-edit chat-alert bg-light-danger">
            <i className="icon-info-alt txt-danger" />
          </div>
          <ContactEdit dropClass="chat-alert" />
        </div>
      </div>
    </div>
  );
};

export default RightGroupChatHeader;
