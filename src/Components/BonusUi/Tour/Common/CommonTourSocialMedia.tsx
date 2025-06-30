import { List, ListInlineItem } from "reactstrap";
import { CommonTourSocialMediaProp } from "../../../../Types/BonusUi";
import { SocialData } from "../../../../Data/BonusUi/Tour";
import { Link } from "react-router-dom";

const CommonTourSocialMedia:React.FC<CommonTourSocialMediaProp> = ({ time,className }) => {
  return (
    <div className={`social-media ${time ? "social-tour" : ""} ${className ? className : ""}`}>
      <List type="inline" className="align-items-center">
        {SocialData.map(({ href, icon }, index) => (
          <ListInlineItem key={index}>
            <Link to={href} target="_blank">
              <i className={`${icon}`}></i>
            </Link>
          </ListInlineItem>
        ))}
        {time && (
          <div className="float-sm-end">
            <small>{time}</small>
          </div>
        )}
      </List>
    </div>
  );
};

export default CommonTourSocialMedia;
