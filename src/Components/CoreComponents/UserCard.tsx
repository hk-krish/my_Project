import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { Followers, Following, Posts } from "../../Constants";
import { dynamicImage, Image } from "../../Utils";
import { routes } from "../../Routers/routes";
import SocialMedia from "./SocialMedia";
import SvgIcon from "./SvgIcon";
import { User } from "../../Types/Applications";

const UserCard:React.FC<{user: User}> = ({user}) => {
  return (
    <Card className="social-profile">
        <CardBody>
          <div className="social-img-wrap">
            <div className="social-img">
              <Image className="img-fluid" src={dynamicImage(`${user?.avatar}`)} alt="user" />
            </div>
            <div className="edit-icon">
              <SvgIcon iconId="profile-check" />
            </div>
          </div>
          <div className="social-details">
            <h5 className="mb-1">
              <Link to={routes.Social}>{user?.name}</Link>
            </h5>
            <span className="f-light">{user?.email}</span>
            <SocialMedia />
            <ul className="social-follow">
              <li>
                <h5 className="mb-0">{user?.totalPost}</h5>
                <span className="f-light">{Posts}</span>
              </li>
              <li>
                <h5 className="mb-0">{user?.follower}</h5>
                <span className="f-light">{Followers}</span>
              </li>
              <li>
                <h5 className="mb-0">{user?.following}</h5>
                <span className="f-light">{Following}</span>
              </li>
            </ul>
          </div>
        </CardBody>
    </Card>
  );
};
export default UserCard;
