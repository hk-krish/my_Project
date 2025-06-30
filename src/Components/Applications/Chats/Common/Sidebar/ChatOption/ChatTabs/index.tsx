import { Href, RecentChats } from "../../../../../../../Constants";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

export const ChatTabs = () => {
  
  return (
    <>
      <div className="common-space">
        <p>{RecentChats}</p>
        <div className="header-top">
          <Link className="badge-light-primary f-w-500 btn" to={Href}>
            <i className="fa fa-plus" />
          </Link>
        </div>
      </div>
      <UserProfile />
    </>
  );
};
