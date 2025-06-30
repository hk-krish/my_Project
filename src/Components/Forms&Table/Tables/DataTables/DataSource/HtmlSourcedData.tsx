import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import { HtmlTableTitle } from "../../../../../Constants";
import { HtmlColumnsInterface } from "../../../../../Types/TablesType";
import FilterComponent from "../Common/FilterComponent";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { HtmlColumns, HtmlColumnsTableData, HtmlTableSubTitle } from "../../../../../Data/Forms&Table/Tables/DataTables/DataSource";

const HtmlSourcedData = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: HtmlColumnsInterface[] = HtmlColumnsTableData.filter((item: HtmlColumnsInterface) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader tag headClass="pb-0 card-no-border" title={HtmlTableTitle} span={HtmlTableSubTitle} tagClass="mb-3" />
        <CardBody>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <div className="table-responsive">
            <DataTable className="custom-scrollbar" data={filteredItems} columns={HtmlColumns} striped={true} pagination />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HtmlSourcedData;
