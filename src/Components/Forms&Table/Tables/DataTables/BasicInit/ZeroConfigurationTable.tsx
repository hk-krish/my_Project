import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";
import { ZeroConfigurationTitle } from "../../../../../Constants";
import { ZeroConfigurationSubTitle, ZeroConfigurationTableColumns, ZeroConfigurationTableData } from "../../../../../Data/Forms&Table/Tables/DataTables/BasicInit";
import { ZeroConfigurationTableType } from "../../../../../Types/TablesType";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import FilterComponent from "../Common/FilterComponent";

const ZeroConfigurationTable = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: ZeroConfigurationTableType[] = ZeroConfigurationTableData.filter((item: ZeroConfigurationTableType) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card className="custom-configuration">
        <CommonCardHeader headClass="card-no-border" tag title={ZeroConfigurationTitle} span={ZeroConfigurationSubTitle} />
        <CardBody>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <div className="table-responsive">
            <DataTable className="custom-scrollbar" data={filteredItems} columns={ZeroConfigurationTableColumns} pagination highlightOnHover striped />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ZeroConfigurationTable;
