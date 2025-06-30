import { Table } from "reactstrap";
import { InvoiceThreeData } from "../../../../../Data/Applications/ECommerce";

const InvoiceTable = () => {
  return (
    <tr>
      <td className="p-0">
        <Table className="table-invoice-3" borderless >
          <thead>
            <tr >
              <th className="text-start" >
                <span >Description</span>
              </th>
              <th className="text-center" >
                <span >Qty</span>
              </th>
              <th className="text-center">
                <span >Price</span>
              </th>
              <th  className="text-center" >
                <span >Subtotal</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {InvoiceThreeData.map((data, i) => (
              <tr key={i}>
                <td className="d-flex align-items-center gap-2" >
                  <span className="indicator" />
                  <ul className="list-unstyled m-0" > 
                    <li>
                      <h4 className="fw-semibold m-0 text-theme" >{data.title}</h4>
                      <span className="opacity-75" >{data.detail}</span>
                    </li> 
                  </ul>
                </td> 
                <td className="text-center">
                  <span >{data.quantity}</span> 
                </td>
                <td className="text-center"> 
                  <span >${data.price}</span>
                </td> 
                <td className="text-center">
                  <span >${data.total}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </td>
    </tr>
  );
};

export default InvoiceTable;
