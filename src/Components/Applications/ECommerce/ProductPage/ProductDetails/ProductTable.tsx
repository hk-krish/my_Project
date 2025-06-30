import { Table } from "reactstrap";
import { ABC, Availability, Brand, Cotton, Fabric, InStock, PixelStrap, Seller } from "../../../../../Constants";
import { Fragment } from "react/jsx-runtime";

export const ProductTable = () => {
  return (
    <Fragment>
      <div>
        <Table className="product-page-width">
          <tbody>
            <tr>
              <td><b>{Brand} &nbsp;&nbsp;&nbsp;:</b></td>
              <td>{PixelStrap}</td>
            </tr>
            <tr>
              <td><b>{Availability} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
              <td className="txt-success">{InStock}</td>
            </tr>
            <tr>
              <td><b>{Seller} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
              <td>{ABC}</td>
            </tr>
            <tr>
              <td><b>{Fabric} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
              <td>{Cotton}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <hr />
    </Fragment>
  );
};
