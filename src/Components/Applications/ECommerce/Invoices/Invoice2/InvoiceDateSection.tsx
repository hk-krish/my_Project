import { Table } from "reactstrap";

export const InvoiceDateSection = () => {
  return (
    <td className="custom-date-section">
      <Table borderless >
        <tbody>
          <tr className="invoice-container">
            <td className="invoice-item ">{" "}
              <span >Invoice No.</span>
              <h4 >#VL25000365</h4>
            </td>
            <td className="invoice-item ">
              <span >Date :</span>
              <h4 >09/03/2024</h4>
            </td>
            <td className="invoice-item payment-status">
              <span >Payment Status :</span>
              <h4 >Paid</h4>
            </td>
            <td className="invoice-item total-amount">
              <span >Total Amount :</span>
              <h4 >$26,410.00</h4>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};
