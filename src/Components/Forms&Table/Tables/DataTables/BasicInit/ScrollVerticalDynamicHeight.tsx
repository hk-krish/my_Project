import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import { ScrollVerticalDynamicHeightTitle } from "../../../../../Constants";
import { DynamicHeightSubTitle, ScrollVerticalDynamicHeightColumns, ScrollVerticalDynamicHeightData } from "../../../../../Data/Forms&Table/Tables/DataTables/BasicInit";
import { ScrollVerticalType } from "../../../../../Types/TablesType";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import FilterComponent from "../Common/FilterComponent";

const ScrollVerticalDynamicHeight = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: ScrollVerticalType[] = ScrollVerticalDynamicHeightData.filter((item: ScrollVerticalType) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader headClass="pb-0 card-no-border" tag title={ScrollVerticalDynamicHeightTitle} span={DynamicHeightSubTitle} />
        <CardBody>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <div className="table-responsive user-datatable">
            <DataTable data={filteredItems} columns={ScrollVerticalDynamicHeightColumns} striped={true} fixedHeader fixedHeaderScrollHeight="40vh" className="display dataTable custom-scrollbar" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ScrollVerticalDynamicHeight;
