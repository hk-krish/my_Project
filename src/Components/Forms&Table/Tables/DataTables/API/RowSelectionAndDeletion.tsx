import React, { SetStateAction, useCallback, useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import DataTable from "react-data-table-component";
import { DeleteRowData } from "../../../../../Types/TablesType";
import { DeleteRow, RowsSelectionAndDeletionTitle } from "../../../../../Constants";
import FilterComponent from "../Common/FilterComponent";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { DeleteDataTableColumns, DeleteTableRowData, RowsSelectionSubTitle } from "../../../../../Data/Forms&Table/Tables/DataTables/API";

const RowSelectionAndDeletion = () => {
  const [filterText, setFilterText] = useState("");
  const [data, setData] = useState(DeleteTableRowData);
  const [selectedRows, setSelectedRows] = useState<DeleteRowData[]>([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const handleRowSelected = useCallback((state: { selectedRows: SetStateAction<DeleteRowData[]> }) => {
    setSelectedRows(state.selectedRows);
  }, []);
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r: DeleteRowData) => r.name)}?`)) {
      setToggleCleared(!toggleCleared);
      setData(data.filter((item) => (selectedRows.filter((elem: DeleteRowData) => elem.id === item.id).length > 0 ? false : true)));
      setSelectedRows([]);
    }
  };
  const filteredItems: DeleteRowData[] = data.filter((item: DeleteRowData) => Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase())));
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader tag headClass="pb-0 card-no-border" title={RowsSelectionAndDeletionTitle} span={RowsSelectionSubTitle} />
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <Button color="secondary" className="mb-3" onClick={handleDelete}>
              {DeleteRow}
            </Button>
            <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
            <DataTable className="custom-scrollbar" columns={DeleteDataTableColumns} data={filteredItems} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleCleared} striped />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default RowSelectionAndDeletion;
