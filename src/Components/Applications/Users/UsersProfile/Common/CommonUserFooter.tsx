import CountUp from "react-countup";
import { Label, List, ListInlineItem } from "reactstrap";
import { Href } from "../../../../../Constants";
import { CommonUser } from "../../../../../Data/Applications/Users";
import { CommonUserFooterType } from "../../../../../Types/Applications";

const CommonUserFooter: React.FC<CommonUserFooterType> = ({ listClass }) => {
  return (
    <div className={`like-comment mt-3 ${listClass ? listClass : ""}`}>
      <List type="inline" className="justify-content-start mt-2">
        { CommonUser.map((item, index) => (
          <ListInlineItem className={item.listClass} key={index}>
            <Label className="m-0">
              <a href={Href}>
                <i className={`fa fa-${item.icon}`}></i>
              </a>
              {item.text}
            </Label>
            <CountUp end={item.count} className="ms-2" delay={1} />
          </ListInlineItem>
        ))}
      </List>
    </div>
  );
};

export default CommonUserFooter;
