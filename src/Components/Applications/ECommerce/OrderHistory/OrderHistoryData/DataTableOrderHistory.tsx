import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { OrdersHistory, SearchTableButton } from "../../../../../Constants";
import { OrderHistoryData, OrderHistoryDataColumn } from "../../../../../Data/Applications/ECommerce";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { StyleSheetManager } from "styled-components";

const DataTableOrderHistory = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems = OrderHistoryData.filter((item) => {
    return Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase()));
  });

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OrdersHistory} />
        <CardBody>
          <div className="order-history table-responsive custom-scrollbar">
            <StyleSheetManager shouldForwardProp={(prop) => prop !== "align" && prop !== "grow"}>
              <DataTable data={filteredItems} columns={OrderHistoryDataColumn} className="dataTables_wrapper no-footer custom-scrollbar" highlightOnHover noHeader pagination paginationServer subHeader subHeaderComponent={subHeaderComponentMemo} />
            </StyleSheetManager>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DataTableOrderHistory;
