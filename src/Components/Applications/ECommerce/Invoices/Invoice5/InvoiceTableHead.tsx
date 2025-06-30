import { Table } from "reactstrap";
import InvoiceTableBody from "./InvoiceTableBody";

const InvoiceTableHead = () => {
  return (
    <Table borderless className="table-wrapper" >
      <thead>
        <tr >
          <th className="no-column" >
            <span >No.</span>
          </th>
          <th className="description-column" > 
            <span >Description</span>
          </th>
          <th className="unit-price-column" >
            <span >Unit Price</span>
          </th> 
          <th className="quantity-column" >
            <span >Quantity</span> 
          </th>
          <th className="subtotal-column" >
            <span >Subtotal</span>
          </th>
        </tr>
      </thead>
      <InvoiceTableBody />
    </Table>
  );
};

export default InvoiceTableHead;
