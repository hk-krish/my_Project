import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import { StateSavingTableType } from "../../../../../Types/TablesType";
import { StateSavingTableTitle } from "../../../../../Constants";
import FilterComponent from "../Common/FilterComponent";
import { StateSavingSubTitle, StateSavingTableColumns, StateSavingTableData } from "../../../../../Data/Forms&Table/Tables/DataTables/BasicInit";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const StateSavingTable = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: StateSavingTableType[] = StateSavingTableData.filter((item: StateSavingTableType) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader headClass="pb-0 card-no-border" tag title={StateSavingTableTitle} span={StateSavingSubTitle} />
        <CardBody>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <div className="table-responsive">
            <DataTable className="custom-scrollbar" data={filteredItems} columns={StateSavingTableColumns} striped={true} pagination />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default StateSavingTable;
