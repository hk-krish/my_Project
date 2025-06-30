import { Table } from "reactstrap";

const InvoiceDateSection = () => {
  return (
    <tr>
      <td>
        <Table className="invoice-table" >
          <tbody>
            <tr>
              <td className="invoice-table-data" >
                <p >Date :</p>
                <span>10 Mar, 2024</span> 
              </td>
              <td className="invoice-table-data" >
                <p >Invoice No :</p>
                <span>#VL25000365</span>
              </td>
              <td className="invoice-table-data" >
                <p >Account No :</p>
                <span>0981234098765</span>
              </td>
              <td className="invoice-table-data" >
                <p >Due Amount :</p> 
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
