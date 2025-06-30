import { Table } from "reactstrap";

const InvoiceTaxSection = () => {
  return (
    <tr>
      <td className="p-0 custom-payment-details">
        <Table borderless >
          <tbody>
            <tr className="payment-details" >
              <td className="payment-info" >
                <span className="payment-description" >Payment Teams : </span>
                <span >This denotes a payment credit for a full month's supply.</span>
              </td>
              <td className="p-0">
                <ul className="amount-details" > 
                  <li> 
                    <span >Subtotal </span>
                    <span >:</span>  
                    <span >$6100.00</span>
                  </li>
                  <li>
                    <span >Tax</span>
                    <span > :</span>
                    <span >$50.00</span> 
                  </li>
                  <li >
                    <span >Discount </span>
                    <span > :</span>
                    <span >$30.00</span>
                  </li>
                  <li className="total" > 
                    <span >Total Due</span>
                    <span >$6120.00</span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceTaxSection;
