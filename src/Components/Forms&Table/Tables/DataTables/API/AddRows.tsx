import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Card, CardBody, Col } from "reactstrap";
import { AddRowsTableProp } from "../../../../../Types/TablesType";
import { AddNewRow, AddRowsTitle } from "../../../../../Constants";
import FilterComponent from "../Common/FilterComponent";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { AddRowsSubTitle, AddRowsTableColumns, AddRowsTableData } from "../../../../../Data/Forms&Table/Tables/DataTables/API";

const AddRows = () => {
  const [filterText, setFilterText] = useState("");
  const [tableData, setTableData] = useState(AddRowsTableData);
  const getRandomFloat = (min: number, max: number) => {
    const genrateRandom = Math.random() * (max - min) + min;
    return parseFloat(genrateRandom.toFixed(2));
  };
  const addNewRow = () => {
    const minimumValue = 10;
    const maximumValue = 100;
    const tempData = {
      column1: tableData[tableData.length - 1].column1 + 10,
      column2: getRandomFloat(minimumValue, maximumValue),
      column3: getRandomFloat(minimumValue, maximumValue),
      column4: getRandomFloat(minimumValue, maximumValue),
      column5: getRandomFloat(minimumValue, maximumValue),
    };
    setTableData([...tableData, tempData]);
  };
  const filteredItems: AddRowsTableProp[] = tableData.filter((item: AddRowsTableProp) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader tag headClass="pb-0 card-no-border" title={AddRowsTitle} span={AddRowsSubTitle} />
        <CardBody>
          <Button color="primary" className="mb-3" onClick={addNewRow}>{AddNewRow}</Button>
          <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
          <DataTable className="custom-scrollbar" data={filteredItems} columns={AddRowsTableColumns} pagination highlightOnHover striped />
        </CardBody>
      </Card>
    </Col>
  );
};
export default AddRows;
