import { Card } from "reactstrap";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import InterviewMailBody from "./InterviewMailBody";
import InterviewMailHeader from "./InterviewMailHeader";

const InterviewMail = () => {
  const { interviewEmail } = useAppSelector((state) => state.letterBox);
  return (
    <Card className={`message-body email-read ${interviewEmail ? "show" : "hide"}`}>
      <InterviewMailHeader />
      <InterviewMailBody/> 
    </Card> 
  );
};

export default InterviewMail;
