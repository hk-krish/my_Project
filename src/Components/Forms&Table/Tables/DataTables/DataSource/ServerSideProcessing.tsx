import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import { ServerSideProcessingTitle } from "../../../../../Constants";
import { ServerSideData, ServerSideProcessingColumns, ServerSideProcessingSubTitle } from "../../../../../Data/Forms&Table/Tables/DataTables/DataSource";
import { ServerSideProcessingInterface } from "../../../../../Types/TablesType";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import FilterComponent from "../Common/FilterComponent";

const ServerSideProcessing = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: ServerSideProcessingInterface[] = ServerSideData.filter((item: ServerSideProcessingInterface) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader tag headClass="pb-0 card-no-border" title={ServerSideProcessingTitle} span={ServerSideProcessingSubTitle} tagClass="mb-3" />
        <CardBody>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <div className="table-responsive">
            <DataTable className="custom-scrollbar" data={filteredItems} columns={ServerSideProcessingColumns} pagination striped />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ServerSideProcessing;
