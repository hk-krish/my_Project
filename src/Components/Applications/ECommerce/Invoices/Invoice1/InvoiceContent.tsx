import { AmountDus, BilledTo, InvoiceDate, InvoiceNumber, UnitedStateTitleText } from "../../../../../Constants";
import { Table } from "reactstrap";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { getallCardTotal } from "../../../../../Utils/EcommerceService";

const InvoiceContent = () => {
  const { cart, tax } = useAppSelector((state) => state.cartData);

  return (
    <td className="p-0">
      <Table className="bill-content w-100" borderless>
        <tbody>
          <tr className="bill-row">
            <td className="column billed-to" >
              <span>{BilledTo}</span>
              <h6>{"Zono Matchett Vandelay Group LTD"}</h6>
            </td>
            <td className="column invoice-date">
              <span className="label">{InvoiceDate}</span>
              <h6>09/03/2024</h6>
            </td> 
            <td className="column invoice-number"> 
              <span className="label">{InvoiceNumber}</span>
              <h6>#VL25000365</h6>
            </td>
            <td className="column amount">
              <span className="label">{AmountDus}</span>
              <h2>$ {getallCardTotal(cart) + (getallCardTotal(cart) * tax) / 100}</h2>
            </td>  
          </tr>
          <tr>
            <td className="united-states-title">
              <h6 >{UnitedStateTitleText}</h6>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceContent;
