import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import { StockResultColumnType } from "../../../../../Types/TablesType";
import FilterComponent from "../Common/FilterComponent";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { StockResultTitle } from "../../../../../Constants";
import { StockResultSubTitle, StockResultTableColumns, StockResultTableData } from "../../../../../Data/Forms&Table/Tables/DataTables/AdvanceInit";

const StockResult = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: StockResultColumnType[] = StockResultTableData.filter((item: StockResultColumnType) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader headClass="pb-0 card-no-border" title={StockResultTitle} span={StockResultSubTitle} />
        <CardBody>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <div className="table-responsive theme-scrollbar">
            <DataTable data={filteredItems} columns={StockResultTableColumns} striped={true} className="display nowrap custom-scrollbar" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default StockResult;
