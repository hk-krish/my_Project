import { Label, Table } from "reactstrap";
import InvoiceFooter from "./InvoiceFooter";
import { InvoiceSixData, InvoiceSixTableData } from "../../../../../Data/Applications/ECommerce";
import { Total } from "../../../../../Constants";

const InvoiceSixTable = () => {
  return (
    <div>
      <div className="table-responsive invoice-table" id="table">
        <Table bordered striped>
          <tbody>
            <tr>
              {InvoiceSixTableData.map((data, i) => (
                <td className="item" key={i}><h6 className="p-2 mb-0">{data}</h6></td>
              ))}
            </tr>
            {InvoiceSixData.map((data, i) => (
              <tr key={i}>
                <td>
                  <Label>{data.title}</Label>
                  <p className="m-0">{data.detail}</p>
                </td>
                <td><p className="itemtext">{data.hours}</p></td>
                <td><p className="itemtext">${data.price}</p></td>
                <td><p className="itemtext">${data.total}.00</p></td>
              </tr>
            ))}
            <tr>
              <td><p className="itemtext" /></td>
              <td><p className="m-0">HST</p></td>
              <td><p className="m-0">13%</p></td>
              <td><p className="m-0">$419.25</p></td>
            </tr>
            <tr>
              <td /><td />
              <td className="Rate"><h6 className="mb-0 p-2">{Total}</h6></td>
              <td className="payment"><h6 className="mb-0 p-2">$3,644.25</h6></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <InvoiceFooter />
    </div>
  );
};

export default InvoiceSixTable;
