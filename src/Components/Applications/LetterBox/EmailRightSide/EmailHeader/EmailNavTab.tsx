import { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { EmailNavTabs } from "../../../../../Data/Applications/LetterBox";
import SvgIcon from "../../../../CoreComponents/SvgIcon";
import { Href } from "../../../../../Constants";

const EmailNavTab = () => {
  const [navId,setNavId] = useState("pills-important-tab")

  return (
    <Nav className="email-tabs" id="email-content-tab">
      {EmailNavTabs.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={navId === data.id ? "active" : ""} id={data.id} href={Href} onClick={()=>setNavId(data.id)} >
            <SvgIcon className="stroke-icon" iconId={data.icon} />
            <span>{data.title} </span>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default EmailNavTab;
