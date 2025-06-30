import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import { RowCreateCallbackTitle } from "../../../../../Constants";
import { RowCreateCallBackSubTitle, RowCreateCallBackTableColumns, RowCreateCallBackTableData } from "../../../../../Data/Forms&Table/Tables/DataTables/AdvanceInit";
import { RowCreateCallBackData } from "../../../../../Types/TablesType";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import FilterComponent from "../Common/FilterComponent";

const RowCreateCallback = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: RowCreateCallBackData[] = RowCreateCallBackTableData.filter((item: RowCreateCallBackData) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader headClass="pb-0 card-no-border" title={RowCreateCallbackTitle} span={RowCreateCallBackSubTitle} />
        <CardBody>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <div className="table-responsive theme-scrollbar">
            <DataTable data={filteredItems} columns={RowCreateCallBackTableColumns} striped={true} pagination className="display custom-scrollbar" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default RowCreateCallback;
