import { MoreVertical } from "react-feather";
import { ElanaHeading } from "../../../../../../Constants";
import { dynamicImage, Image } from "../../../../../../Utils";

const NewUsersSocial = () => {
  return (
    <div className="new-users-social">
      <div className="d-flex">
        <Image className="rounded-circle image-radius m-r-15" src={dynamicImage(`user/1.jpg`)} alt="user121" />
        <div className="flex-grow-1">
          <h3 className="mb-0 f-w-700">{ElanaHeading}</h3>
          <p>January, 12,2024</p>
        </div>
        <span className="pull-right mt-0">
          <MoreVertical />
        </span>
      </div>
    </div>
  );
};

export default NewUsersSocial;
