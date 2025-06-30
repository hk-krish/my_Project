import { Table } from "reactstrap";

export const InvoiceTexSection = () => {
  return (
    <td className="p-0">
      <Table className="custom-invoice-tex" responsive borderless >
        <tfoot>
          <tr>
            <td >
              <span >Subtotal</span>
              <span >:</span>
            </td>
            <td >
              <span>$26,400.00</span>
            </td>
          </tr>
          <tr>
            <td >
              <span >VAT (0%)</span>
              <span >:</span>
            </td>
            <td >
              <span>$0.00</span>
            </td>
          </tr>
          <tr>
            <td >
              <span >Shipping Rate</span>
              <span >:</span>
            </td>
            <td >
              <span>$10.00</span>
            </td>
          </tr>
          <tr>
            <td >
              <span >Total Amount</span>
              <span>:</span>
            </td>
            <td >
              <span>$26,410.00</span>
            </td>
          </tr>
        </tfoot>
      </Table>
    </td>
  );
};
