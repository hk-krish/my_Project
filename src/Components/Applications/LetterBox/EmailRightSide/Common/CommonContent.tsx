import { TabPane } from "reactstrap";
import { CommonContentType } from "../../../../../Types/Applications";
import EmailContent from "./EmailContent";

const CommonContent:React.FC<CommonContentType> = ({tableId,contentData}) => {
  return (
    <TabPane tabId={tableId}>
      <div className="mail-body-wrapper">
        <ul>
          {contentData.map((data,i)=>(
            <li className="inbox-data" key={i}>
              <EmailContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default CommonContent;
