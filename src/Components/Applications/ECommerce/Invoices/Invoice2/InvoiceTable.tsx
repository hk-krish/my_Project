import { Table } from "reactstrap";
import { InvoiceHeaderData, InvoiceTwoDataList } from "../../../../../Data/Applications/ECommerce";
import { dynamicImage, Image } from "../../../../../Utils";

export const InvoiceTable = () => {
  return (
    <td className="p-0">
      <Table className="invoice-table" >
        <thead>
          <tr >
            {InvoiceHeaderData.map((data, i) => (
              <th key={i}>
                <span>{data}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {InvoiceTwoDataList.map((data, i) => (
            <tr className="invoice-dark"  key={i}>
              <td  className="product-info">
                <span className="product-image">
                  <Image className="img-fluid" src={dynamicImage(data.image)} alt="laptop"  />
                </span> 
                <ul className="product-details">
                  <li>
                    <h4 >{data.title}</h4>
                    <span>{data.code}</span>
                  </li>
                </ul>
              </td>
              <td ><span>{data.quantity}</span></td>
              <td ><span>${data.price}</span></td>
              <td ><span>{data.unit}</span></td>
              <td ><span>{data.vat}</span></td>
              <td ><span>{`$`}{data.total}</span></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </td>
  );
};
