import { LogIn } from "react-feather";
import { Link } from "react-router-dom";
import { profileList } from "../../../Data/Layout/Header";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { logout } from "../../../ReduxToolkit/Reducers/Layout/AuthReducer";
import { dynamicImage, Image } from "../../../Utils";
import { routes } from "../../../Routers/routes";
import { LogOut } from "../../../Constants";
import SvgIcon from "../../../Components/CoreComponents/SvgIcon";

const Profile = () => {
  const dispatch = useAppDispatch();
  return (
    <li className="profile-nav onhover-dropdown p-0 m-0">
      <div className="d-flex profile-media align-items-center">
        <Image className="b-r-6 img-40" src={dynamicImage(`dashboard/profile.png`)} alt="profile" />
        <div className="flex-grow-1">
          <span>Helen Walter</span>
          <p className="mb-0">Admin<SvgIcon iconId="header-arrow-down"/></p>
        </div>
      </div>
      <ul className="profile-dropdown onhover-show-div">
        {profileList.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>{item.icon}<span>{item.text} </span></Link>
          </li>
        ))}
        <li>
          <Link onClick={() => dispatch(logout())} to={routes.Login}>
            <LogIn />
            <span>{LogOut}</span>
          </Link>
        </li>
      </ul>
    </li>
  );
};
export default Profile;
