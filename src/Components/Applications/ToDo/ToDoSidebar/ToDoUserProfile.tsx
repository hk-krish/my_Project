import { dynamicImage, Image } from "../../../../Utils";

const ToDoUserProfile = () => {
  return (
    <div className="d-flex align-items-center flex-wrap">
      <div className="media-size-email">
        <Image className="me-3 rounded-circle" src={dynamicImage(`user/user.png`)} alt="avatar" />
      </div>
      <div className="flex-grow-1">
        <h3>{"Mark Jecno"}</h3>
        <p>{"Markjecno@gmail.com"}</p>
      </div>
    </div>
  );
};

export default ToDoUserProfile;
