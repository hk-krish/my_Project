import { dynamicImage, Image } from "../../../../../Utils";

const ProfileHeader = () => {
  return (
    <div className="d-flex">
      <div className="d-flex-size-email">
        <Image className="rounded-circle me-3" src={dynamicImage(`user/user.png`)} alt="" />
      </div>
      <div className="flex-grow-1">
        <h4>{"MARK JENCO"}</h4>
        <p>{"Markjecno@gmail.com"}</p>
      </div>
    </div>
  );
};
export default ProfileHeader;
