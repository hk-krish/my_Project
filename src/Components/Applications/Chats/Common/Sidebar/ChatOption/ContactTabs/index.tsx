import { Mic } from "react-feather";
import { Input } from "reactstrap";
import SvgIcon from "../../../../../../CoreComponents/SvgIcon";
import { Href, NameAndPhoneNumber } from "../../../../../../../Constants";
import { Link } from "react-router-dom";
import { ContactList } from "./ContactList";

export const ContactTabs = () => {

  return (
    <>
      <div className="common-space">
        <p>{`Contacts`}</p>
        <div className="header-top">
          <Link className="btn badge-light-primary f-w-500" to={Href}>
            <i className="fa fa-plus" />
          </Link>
        </div>
      </div>
      <div className="search-contacts">
        <Input type="text" placeholder={NameAndPhoneNumber} />
        <SvgIcon iconId="stroke-search" />
        <Mic className="mic-search" />
      </div>
      <ContactList/>
    </>
  );
};
