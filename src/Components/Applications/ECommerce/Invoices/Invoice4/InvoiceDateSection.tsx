import { Table } from "reactstrap";

const InvoiceDateSection = () => {
  return (
    <tr>
      <td className="p-0">
        <Table className="invoice-table-4">
          <tbody>
            <tr>
              <td >
                <p>Date :</p>
                <span>10 Mar, 2024</span>
              </td>
              <td >
                <p>Invoice No :</p>
                <span>#VL25000365</span>
              </td>
              <td >
                <p>Account No :</p>
                <span>0981234098765</span>
              </td>
              <td >
                <p>Due Amount :</p>
                <span>$7860.00 </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceDateSection;
