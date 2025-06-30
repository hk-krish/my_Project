import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { Href } from "../../../../Constants";
import { contactOptions } from "../../../../Data/Applications/Contacts";
import { ContactSidebarProps } from "../../../../Types/Applications";
import AddContact from "./Modals/AddContact";
import Category from "./Modals/Category";

const ContactOptions: React.FC<ContactSidebarProps> = ({ activeTab, setActiveTab, changeTab }) => {

  const tabClick = (id: number) => {
    setActiveTab(id);
    changeTab(id);
  };

  return (
    <Nav className="main-menu contact-options custom-scrollbar">
      <NavItem>
        <AddContact />
      </NavItem>
      <NavItem>
        <span className="main-title">{"Views"}</span>
      </NavItem>
      <NavItem>
        <Link to={Href} className={activeTab === 1 ? "active" : ""} onClick={() => tabClick(1)}>
          <span className={`title${activeTab === 1 ? " f-w-600" : ""}`}>{"Personal"}</span>
        </Link>
      </NavItem>
      <NavItem>
        <Category />
      </NavItem>
      {contactOptions.map((item) => (
        <NavItem key={item.id}>
          <Link to={Href} className={activeTab === item.id ? "active" : ""} onClick={() => tabClick(item.id)}>
            <span className={`title${activeTab === item.id ? " f-w-600" : ""}`}>{item.title}</span>
          </Link>
        </NavItem>
      ))}
    </Nav>
  );
};
export default ContactOptions;