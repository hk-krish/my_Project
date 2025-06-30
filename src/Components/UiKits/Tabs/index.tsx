import { Container, Row } from "reactstrap";
import { Tabs, UIKits } from "../../../Constants";
import BorderTabs from "./BorderTabs";
import IconTabs from "./IconTabs";
import JustifyTab from "./JustifyTab";
import MaterialLeftStyleTab from "./MaterialLeftStyleTab";
import MaterialStyleTab from "./MaterialStyleTab";
import PillsTab from "./PillsTab";
import SimpleTab from "./SimpleTab";
import VerticalTab from "./VerticalTab";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const TabsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Tabs} parent={UIKits} />
      <Container fluid>
        <Row>
          <SimpleTab />
          <IconTabs />
          <VerticalTab />
          <PillsTab />
          <JustifyTab />
          <MaterialLeftStyleTab />
          <MaterialStyleTab />
          <BorderTabs />
        </Row>
      </Container>
    </Fragment>
  );
};
export default TabsContainer;
