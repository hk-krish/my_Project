import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { SupportDataType } from "../../../../Types/MiscellaneousType";
import FilterComponent from "./FilterComponent";
import { TicketTableColumns, TicketTableData } from "../../../../Data/Miscellaneous/SupportTicket";

const TicketTable = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: SupportDataType[] = TicketTableData.filter((item: SupportDataType) => {
    return Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase()));
  });
  return (
    <div className="table-responsive overflow-hidden">
      <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
      <DataTable className="custom-scrollbar" data={filteredItems} columns={TicketTableColumns} pagination striped />
    </div>
  );
};
export default TicketTable;
