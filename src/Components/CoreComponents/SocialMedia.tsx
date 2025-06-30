import { Link } from "react-router-dom";
import { UserSocialData } from "../../Data/Applications/Users";

const SocialMedia = () => {
  return (
    <ul className="card-social">
      {UserSocialData.map((data, index) => (
        <li key={index}>
          <Link to={data.link} target="_blank">
            <i className={`${data.icon} me-0`}></i>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;