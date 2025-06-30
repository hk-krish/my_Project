import { Card, Col, TabContent } from "reactstrap";
import { DraftEmailData, PrivateEmailData, SentEmailData, SupportEmailData, TrashEmailData, WorkEmailData } from "../../../../Data/Applications/LetterBox";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { LetterBoxNavContentType } from "../../../../Types/Applications";
import AddLabelModal from "./AddLabelModal";
import CommonContent from "./Common/CommonContent";
import ComposeEmailModal from "./ComposeEmailModal";
import EmailHeader from "./EmailHeader";
import InboxContent from "./InboxContent";
import InterviewMail from "./InterviewMail";
import StarredContent from "./StarredContent";

const EmailRightSide:React.FC<LetterBoxNavContentType> = ({ navId }) => {
  const { interviewEmail } = useAppSelector((state) => state.letterBox);

  return (
    <Col xxl="9" xl="8" className="box-col-12">
      <div className="mail-right-bar">
        <Card className={`message-body email-list ${interviewEmail ? "hide" : "show"}`}>
          <ComposeEmailModal />
          <EmailHeader />
          <TabContent activeTab={navId} id="email-pills-tabContent">
            <InboxContent />
            <CommonContent tableId={"2"} contentData={SentEmailData}/>
            <StarredContent /> 
            <CommonContent tableId={"4"} contentData={DraftEmailData}/>
            <CommonContent tableId={"5"} contentData={TrashEmailData}/>
            <CommonContent tableId={"6"} contentData={WorkEmailData}/>
            <CommonContent tableId={"7"} contentData={PrivateEmailData}/>
            <CommonContent tableId={"8"} contentData={SupportEmailData}/>
            <AddLabelModal /> 
          </TabContent>
        </Card>
        <InterviewMail />
      </div>
    </Col>
  );
};

export default EmailRightSide;
