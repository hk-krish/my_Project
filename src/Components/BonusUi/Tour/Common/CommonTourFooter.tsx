import { Label, List, ListInlineItem } from "reactstrap";
import { CommonFooterData } from "../../../../Data/BonusUi/Tour";
import { Link } from "react-router-dom";
import { Href } from "../../../../Constants";

const CommonTourFooter = () => {
  return (
    <div className="like-comment mt-4">
      <List type="inline">
        {CommonFooterData.map(({ className, icon, text }, index) => (
          <ListInlineItem className={className} key={index}>
            <Label className="m-0" check><Link to={Href}><i className={`fa fa-${icon}`}></i></Link>{text}</Label>
          </ListInlineItem>
        ))}
      </List>
    </div>
  );
};

export default CommonTourFooter;