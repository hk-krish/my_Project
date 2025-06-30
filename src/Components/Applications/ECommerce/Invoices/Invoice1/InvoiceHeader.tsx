import { Table } from "reactstrap";
import { dynamicImage, Image } from "../../../../../Utils";

const InvoiceHeader = () => {
  return (
    <td className="p-0">
      <Table className="logo-wrappper">
        <tbody>
          <tr>
            <td>
              <Image className="img-fluid for-light " src={dynamicImage(`logo/logo.png`)} alt="looginpage" />
              <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo_dark.png`)} alt="looginpage"/>
              <span className="d-block">202-555-0258</span>
            </td>
            <td className="address-invoice"> 
              <span>1982 Harvest Lane New York, NY12210 United State</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceHeader;
