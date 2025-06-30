import { useRef } from "react";
import { ChevronDown } from "react-feather";
import { useReactToPrint } from "react-to-print";
import { Button } from "reactstrap";
import { Send } from "../../../../../Constants";
import { dynamicImage, Image } from "../../../../../Utils";
import InboxOption from "./InboxOption";
import UserFooter from "./UserFooter";
import UserMailBody from "./UserMailBody";

const InterviewMailBody = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrintData = useReactToPrint({ contentRef });
  return (
    <div ref={contentRef}>
      <div className="mail-body-wrapper">
        <div className="user-mail-wrapper">
          <div className="user-title">
            <div>
              <div className="rounded-border">
                <Image className="img-fluid" src={dynamicImage(`user/12.png`)} alt="user" />
              </div>
              <div className="dropdown-subtitle">
                <p className="mb-0">Ronald Richards</p>
                <div className="onhover-dropdown"> 
                  <Button color="transparent" className="p-0 dropdown-button">To me <ChevronDown /></Button>
                  <div className="inbox-security onhover-show-div">
                    <p>From: <span>ronald &lt;pixelstrap3@gmail.com&gt;</span></p>
                    <p>to: <span>donut.horry@gmail.com</span></p> 
                    <p>reply-to:<span>&lt;ronald@gmail.com&gt;</span></p>
                    <p>date: <span>Jun 13, 2023, 7:10 AM</span></p>
                    <p>subject: <span>Important Account Security Update</span></p>
                    <p>security: <span>standard encryption (TLS)</span></p>
                  </div> 
                </div>
              </div>
            </div>
            <InboxOption handlePrintData={handlePrintData} />
          </div>
          <UserMailBody />
          <UserFooter />
          <div className="send-btn">
            <Button color="primary">{Send}
              <i className="fa fa-paper-plane" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewMailBody;
