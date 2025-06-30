import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { ComposeEmail, EmailFilter, Href } from "../../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setComposeEmail } from "../../../../ReduxToolkit/Reducers/LetterBoxSlice";
import { LetterBoxNavType } from "../../../../Types/Applications";
import EmailNavMenu from "./EmailNavMenu";

const EmailSidebar: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const [open, setOpen] = useState(false);
  const { composeEmail } = useAppSelector((state) => state.letterBox);
  const dispatch = useAppDispatch();

  return (
    <Col xxl="3" xl="4" className="box-col-12">
      <div className="md-sidebar">
        <Button color="primary" className="md-sidebar-toggle" href={Href} onClick={() => setOpen(!open)}>{EmailFilter}</Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${open ? "open" : ""}`}>
          <div className="mail-left-bar">
            <Card>
              <CardBody>
                <div className="message-sidebar">
                  <Button color="primary" className="emailbox" onClick={() => dispatch(setComposeEmail(!composeEmail))}>
                    <i className="fa fa-plus" />{ComposeEmail}
                  </Button>
                  <EmailNavMenu navId={navId} setNavId={setNavId} />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default EmailSidebar;
