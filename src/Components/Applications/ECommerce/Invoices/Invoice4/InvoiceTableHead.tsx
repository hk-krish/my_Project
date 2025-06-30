import { Table } from "reactstrap";
import InvoiceTableBody from "./InvoiceTableBody";

const InvoiceTableHead = () => {
  return (
    <tr className="custom-table-head">
      <td className="p-0 ">
        <Table className="table-container" borderless>
          <thead className="table-header">
            <tr >
              <th >
                <span >Description</span>
              </th>
              <th >
                <span >Unite Price</span>
              </th>
              <th >
                <span >Quantity</span> 
              </th>
              <th >
                <span >Subtotal</span>
              </th>
            </tr>
          </thead>
          <InvoiceTableBody />
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceTableHead;
