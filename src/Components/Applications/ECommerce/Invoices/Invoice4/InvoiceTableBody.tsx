import { InvoiceFourData } from "../../../../../Data/Applications/ECommerce";

const InvoiceTableBody = () => {
  return (
    <tbody className="table-invoice">
      {InvoiceFourData.map((data, i) => (
        <tr key={i}>
          <td >
            <h4 >{data.title}</h4>
            <span >{data.detail}</span>
          </td>
          <td>
            <span>
              {`$`}
              {data.price}.00
            </span> 
          </td>
          <td>
            <span>{data.quantity}</span> 
          </td>
          <td>
            <span>
              {`$`}
              {data.total}.00
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default InvoiceTableBody;
