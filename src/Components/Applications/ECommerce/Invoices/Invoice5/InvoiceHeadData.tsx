
const InvoiceHeadData = () => {
  return (
    <tr className="invoice-wrapper" >
      <td className="p-0 invoice-details">
        <span className="invoice-title" >Invoice to :</span>
        <span className="client-name" >Brooklyn Simmons</span>
        <span className="client-info" >2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
        <span className="client-info" >Phone : (219) 555-0114</span>
        <span className="client-info" >Email : yourmail@themesforest.com</span>
        <span className="client-info" >Website: www.websites.com</span>
      </td>
      <td className="p-0 invoice-header">
        <h4 className="payment-method" >INVOICE</h4>
        <span className="bank-info" >Bank Transfer</span>
        <span className="bank-info" >Leslie Alexander</span>
        <span className="bank-details">Bank Account : 0981234098765</span>
        <span className="bank-details">Code : LEF098756</span>
      </td>
    </tr>
  );
};
export default InvoiceHeadData