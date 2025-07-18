import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import InboxEmailContent from "./InboxEmailContent";
import MailPagination from "./MailPagination";
import { TabPane } from "reactstrap";

const InboxContent = () => {
  const { inboxEmail, page } = useAppSelector((state) => state.letterBox);

  return (
    <TabPane tabId="1" >
      <div className="mail-body-wrapper">
        <ul>
          {inboxEmail.map((data, i) => (
            <li className={`inbox-data ${page ? i < 8 ? "hidden" : "" : i < 8 ? "" : "hidden" }`} key={i}>
              <InboxEmailContent data={data} ids={i} />
            </li>
          ))}
        </ul>
        <MailPagination />
      </div>
    </TabPane>
  );
};

export default InboxContent;
