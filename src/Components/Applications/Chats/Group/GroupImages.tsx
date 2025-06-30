import { GroupChatHeader } from "../../../../Data/Applications/Chat";
import { dynamicImage, Image } from "../../../../Utils";

const GroupImages = () => {
  return (
    <div className="chat-time group-chat">
      <ul>
        {GroupChatHeader.map((data, index) => (
          <li key={index}>
            <Image className="img-fluid rounded-circle" src={dynamicImage(`${data}`)} alt="user" />
          </li>
        ))}
        <li>
          <div className="custom-name profile-count light-background">
            <p className="f-w-500">9+</p>
          </div>
        </li>
      </ul>
      <div>
        <span>Meeting Department</span>
        <p>35 Members</p> 
      </div>
    </div>
  );
};

export default GroupImages;
