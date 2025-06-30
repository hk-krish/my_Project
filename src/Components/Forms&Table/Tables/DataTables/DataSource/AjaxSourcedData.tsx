import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import DataTable from "react-data-table-component";
import { AjaxSourcedColumnsInterface } from "../../../../../Types/TablesType";
import { AjaxSourcedDataTitle } from "../../../../../Constants";
import FilterComponent from "../Common/FilterComponent";
import { AjaxSourcedColumns, AjaxSourcedTableData, AjaxTableSubTitle } from "../../../../../Data/Forms&Table/Tables/DataTables/DataSource";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const AjaxSourcedData = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: AjaxSourcedColumnsInterface[] = AjaxSourcedTableData.filter((item: AjaxSourcedColumnsInterface) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader tag headClass="pb-0 card-no-border" title={AjaxSourcedDataTitle} span={AjaxTableSubTitle} tagClass="mb-3" />
        <CardBody>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <div className="table-responsive">
            <DataTable className="custom-scrollbar" data={filteredItems} columns={AjaxSourcedColumns} pagination striped />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default AjaxSourcedData;
