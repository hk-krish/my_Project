import { Fragment, useCallback, useState } from "react";
import { Container } from "reactstrap";
import SocialAppTabContent from "./UserContext";
import UserProfile from "./UserProfile";
import { Apps, SocialApp } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const SocialAppContainer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const callback = useCallback((tab: number) => setActiveTab(tab), []);

  return (
    <Fragment>
      <Breadcrumbs mainTitle={SocialApp} parent={Apps} />
      <Container fluid>
        <div className="user-profile social-app-profile">
          <UserProfile callback={callback} />
          <SocialAppTabContent activeTab={activeTab} />
        </div>
      </Container>
    </Fragment>
  );
};

export default SocialAppContainer;
