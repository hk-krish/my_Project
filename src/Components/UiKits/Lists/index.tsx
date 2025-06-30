import { Container, Row } from "reactstrap";
import ActiveList from "./ActiveList";
import ContextualClass from "./ContextualClass";
import CustomList from "./CustomList";
import DefaultList from "./DefaultList";
import { ListTitle, UIKits } from "../../../Constants";
import DisableList from "./DisableList";
import FlushList from "./FlushList";
import HorizontalList from "./HorizontalList";
import JsBehavior from "./JsBehavior";
import ListWithCheckbox from "./ListWithCheckbox";
import ListWithNumber from "./ListWithNumber";
import ListWithRadio from "./ListWithRadio";
import NumberedBadgeList from "./NumberedBadgeList";
import ScrollableList from "./ScrollableList";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const ListsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ListTitle} parent={UIKits} />
      <Container fluid className="list-page">
        <Row>
          <DefaultList />
          <ActiveList />
          <FlushList />
          <ContextualClass />
          <HorizontalList />
          <CustomList />
          <ListWithCheckbox />
          <ListWithRadio />
          <ListWithNumber />
          <JsBehavior />
          <NumberedBadgeList />
          <DisableList />
          <ScrollableList />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ListsContainer;
