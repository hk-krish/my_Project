import { Badge, Nav, NavItem, NavLink } from "reactstrap";
import { AddLabelHeading, Inbox } from "../../../../Constants";
import { LetterBoxSidebar } from "../../../../Data/Applications/LetterBox";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setModal } from "../../../../ReduxToolkit/Reducers/LetterBoxSlice";
import { LetterBoxNavType } from "../../../../Types/Applications";
import SvgIcon from "../../../CoreComponents/SvgIcon";

const EmailNavMenu: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const { inboxEmail, modal } = useAppSelector((state) => state.letterBox);
  let starBadges = inboxEmail.filter((data) => data.star === true && 1);
  const dispatch = useAppDispatch();
  
  return (
    <Nav pills tabs className="main-menu email-category border-0">
      {LetterBoxSidebar.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={`border-0 ${navId === data.id ? "active" : ""}`} onClick={() => setNavId(data.id)}>
            <SvgIcon className={`stroke-icon ${data.color ? `stroke-${data.color}` : ""}`} iconId={data.icon} />
            <div>
              {data.title}
              {data.badge && <Badge color="light-primary">{data.title === Inbox ? inboxEmail.length : starBadges.length}</Badge>}
            </div>
          </NavLink>
        </NavItem>
      ))}
      <NavItem>
        <NavLink onClick={() => dispatch(setModal(!modal))} className="border-0">
          <i className="fa fa-plus" />
          {AddLabelHeading}
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default EmailNavMenu;
