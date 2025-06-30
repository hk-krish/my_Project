import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { BasicTables, ReactstrapTitle } from "../../../../../Constants";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";
import BasicTableWithBorder from "./BasicTableWithBorder";
import BreckpointSpecific from "./BreckpointSpecific";
import CaptionTable from "./CaptionTable";
import CustomColorHoverStripped from "./CustomColorHoverStripped";
import DashedBorder from "./DashedBorder";
import HoverableRows from "./HoverableRows";
import InverseTable from "./InverseTable";
import InverseTablePrimary from "./InverseTablePrimary";
import ResponsiveLightBackground from "./ResponsiveLightBackground";
import SizingTables from "./SizingTables";
import StripedRowInverseTable from "./StripedRowInverseTable";
import TableHeadOptions from "./TableHeadOptions";

const BasicTableContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={BasicTables} parent={ReactstrapTitle} />
      <Container className="basic_table" fluid>
        <Row>
          <BasicTableWithBorder />
          <InverseTable />
          <HoverableRows />
          <InverseTablePrimary />
          <CaptionTable />
          <TableHeadOptions />
          <StripedRowInverseTable />
          <BreckpointSpecific />
          <ResponsiveLightBackground />
          <SizingTables />
          <CustomColorHoverStripped />
          <DashedBorder />
        </Row>
      </Container>
    </Fragment>
  );
};

export default BasicTableContainer;
