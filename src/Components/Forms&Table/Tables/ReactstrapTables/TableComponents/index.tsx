import { Container, Row } from "reactstrap";
import { AlertTitle, BadgesTitle, CheckboxTitle, Inputs, ProgressbarTitle, RadioButtonsTitle, ReactstrapTitle, Select, SwitchTitle, TableComponentsTitle, TooltipTriggersTitle, UIComponentsTitle } from "../../../../../Constants";
import { AlertTableData, BadgesTableData, CheckboxTableData, InputTableData, ProgressTableData, RadioBoxTableData, SelectBoxTableData, SwitchTableData, ToolTipTriggersData, UiComponentTableData } from "../../../../../Data/Forms&Table/Tables/ReactstrapTables/TableComponents";
import CommonTableComponent from "./Common/CommonTableComponent";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const TableComponentsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={TableComponentsTitle} parent={ReactstrapTitle} />
      <Container fluid>
        <Row>
          <CommonTableComponent title={UIComponentsTitle} data={UiComponentTableData} />
          <CommonTableComponent title={AlertTitle} data={AlertTableData} />
          <CommonTableComponent title={ProgressbarTitle} data={ProgressTableData} tableClass="checkbox-td-width" />
          <CommonTableComponent title={CheckboxTitle} data={CheckboxTableData} tableClass="checkbox-td-width" />
          <CommonTableComponent title={RadioButtonsTitle} data={RadioBoxTableData} tableClass="radio-first-col-width" />
          <CommonTableComponent title={Select} data={SelectBoxTableData} tableClass="checkbox-td-width" />
          <CommonTableComponent title={Inputs} data={InputTableData} tableClass="checkbox-td-width" />
          <CommonTableComponent title={BadgesTitle} data={BadgesTableData} />
          <CommonTableComponent title={TooltipTriggersTitle} data={ToolTipTriggersData} />
          <CommonTableComponent title={SwitchTitle} data={SwitchTableData} />
        </Row>
      </Container>
    </Fragment>
  );
};
export default TableComponentsContainer;
