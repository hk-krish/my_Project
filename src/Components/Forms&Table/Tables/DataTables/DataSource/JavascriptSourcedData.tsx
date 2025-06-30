import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import { JavascriptSourcedDataTitle } from "../../../../../Constants";
import { AjaxSourcedColumns, JavaScriptTableSubTitle, JavascriptSourcedTableData } from "../../../../../Data/Forms&Table/Tables/DataTables/DataSource";
import { AjaxSourcedColumnsInterface } from "../../../../../Types/TablesType";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import FilterComponent from "../Common/FilterComponent";

const JavascriptSourcedData = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: AjaxSourcedColumnsInterface[] = JavascriptSourcedTableData.filter((item: AjaxSourcedColumnsInterface) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader tag headClass="pb-0 card-no-border" title={JavascriptSourcedDataTitle} span={JavaScriptTableSubTitle} tagClass="mb-3" />
        <CardBody>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <div className="table-responsive">
            <DataTable data={filteredItems} columns={AjaxSourcedColumns} pagination striped className="custom-scrollbar display w-100" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default JavascriptSourcedData;
