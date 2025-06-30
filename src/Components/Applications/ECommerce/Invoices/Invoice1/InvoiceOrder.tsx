import { Table } from "reactstrap";
import { Description, LineTotal, Qty, Rate } from "../../../../../Constants";
import InvoiceOrderBody from "./InvoiceOrderBody";

const InvoiceOrder = () => {
  return (
    <td>
      <Table className="order-details">
        <thead>
          <tr >
            <th >
              <span>{Description}</span>
            </th>
            <th> 
              <span>{Rate}</span>
            </th>
            <th>
              <span>{Qty}</span>
            </th>
            <th>
              <span>{LineTotal}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <InvoiceOrderBody />
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceOrder;
