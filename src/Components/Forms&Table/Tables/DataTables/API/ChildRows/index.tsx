import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import { StateSavingTableType } from "../../../../../../Types/TablesType";
import { ChildRowsTitle } from "../../../../../../Constants";
import FilterComponent from "../../Common/FilterComponent";
import CustomExpandableComponent from "./CustomExpandableComponent";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import { ChildrenRowsSubTitle } from "../../../../../../Data/Forms&Table/Tables/DataTables/API";
import { ChildRowsTableColumns, StateSavingTableData } from "../../../../../../Data/Forms&Table/Tables/DataTables/BasicInit";

const ChildRows = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: StateSavingTableType[] = StateSavingTableData.filter((item: StateSavingTableType) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader tag headClass="pb-0 card-no-border" title={ChildRowsTitle} span={ChildrenRowsSubTitle} />
        <CardBody>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <DataTable className="custom-scrollbar" data={filteredItems} columns={ChildRowsTableColumns} pagination expandableRows={true} expandableRowsComponent={CustomExpandableComponent} striped />
        </CardBody>
      </Card>
    </Col>
  );
};
export default ChildRows