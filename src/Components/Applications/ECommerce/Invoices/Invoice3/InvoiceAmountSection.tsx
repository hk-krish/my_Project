import { Table } from "reactstrap";

const InvoiceAmountSection = () => {
  return (
    <tr>
      <td className="p-0 payment-summary">
        <Table borderless width={100}>
          <tbody>
            <tr className="bank-transfer-row" >
              <td className="p-0">
                <span >BANK TRANSFER</span>
                <h4  >Leslie Alexander</h4>
                <span  className="details d-block" >Bank Account : 0981234098765</span>
                <span className="details" >Code : LEF098756</span> 
              </td>
              <td className="p-0 amount-info">
                <span >TOTAL AMOUNT</span>
                <h4 >$175.00</h4> 
                <span className="details" >All Taxes included </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceAmountSection;
