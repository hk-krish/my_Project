import { Table } from "reactstrap";

export const InvoiceAddressSection = () => {
  return (
    <td className="p-0 table-container">
      <Table borderless >
        <tbody>
          <tr className="table-row">
            <td className="table-cell">
              <span  className="title">BILLING ADDRESS</span>
              <h4 className="name">Brooklyn Simmons</h4>
              <span className="address">2118 Thornridge Cir. Syracuse, Connecticut 35624, United State</span>
              <span className="phone">Phone : (239) 555-0108</span>
            </td>
            <td className="table-cell">
              <span  className="title">SHIPPING ADDRESS</span>
              <h4 className="name">Cameron Williamson</h4>
              <span className="address shipping">2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}</span>
              <span className="phone">Phone : (219) 555-0114</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};
