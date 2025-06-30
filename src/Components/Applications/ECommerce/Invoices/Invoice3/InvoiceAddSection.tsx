import { Table } from "reactstrap";
import { Fragment } from "react/jsx-runtime";

const InvoiceAddSection = () => {
  return (
    <Fragment>
      <tr>
        <td className="p-0  table-container">
          <Table >
            <tbody>
              <tr className="table-row" >
                <td className="p-0 table-cell">
                  <span className="title" >CLIENT DETAILS</span>
                  <h4 className="name" >Brooklyn Simmons</h4>
                  <span className="address" >2118 Thornridge Cir. Syracuse, Connecticut 35624, United State</span>
                  <span className="phone" >Phone : (239) 555-0108</span>
                </td>
                <td className="p-0 table-cell">
                  <span className="title" >SHIPPING ADDRESS</span>
                  <h4 className="name" >Brooklyn Simmons</h4>
                  <span className="address shipping" >2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
                  <span className="phone" >Phone : (219) 555-0114</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </td>
      </tr>
      <tr>
        <td className="p-0 table-divider">
          <span className="invoice-divider" style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 20 }}> </span>
        </td>
      </tr>
    </Fragment>
  );
};

export default InvoiceAddSection;
