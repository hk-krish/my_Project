import { Invoice5FourData, InvoiceFourData } from "../../../../../Data/Applications/ECommerce";

const InvoiceTableBody = () => {
  return (
    <tbody className="custom-table-body">
      {InvoiceFourData.map((data, i) => (
        <tr key={i}>
          <td className="index-cell" >
            <span >{i + 1}</span>
          </td>
          <td className="title-cell">
            <h4 >{data.title}</h4>
            <span >{data.detail}</span> 
          </td>
          <td className="price-cell" >
            <span >${data.price}.00</span>
          </td>
          <td className="quantity-cell" >
            <span >{data.quantity}</span>
          </td>
          <td className="total-cell" >
            <span >${data.total}.00</span>
          </td>
        </tr>
      ))}
      {Invoice5FourData.map((data, index) => (
        <tr key={index}>
          <td className="blank-cell"> </td><td className="blank-cell"> </td><td className="blank-cell"> </td>
          <td className="invoice-summary" >
            <span >{data.title}</span>
          </td>
          <td className="invoice-summary" >
            <span >{data.price}</span>
          </td>
        </tr>
      ))}
      <tr>
        <td className="blank-cell"> </td><td className="blank-cell"> </td><td className="blank-cell"></td>
        <td >
          <span >Total Due</span>
        </td>
        <td className="final-total-cell">
          <span >$6120.00</span>
        </td>
      </tr>
    </tbody>
  );
};
export default InvoiceTableBody;
