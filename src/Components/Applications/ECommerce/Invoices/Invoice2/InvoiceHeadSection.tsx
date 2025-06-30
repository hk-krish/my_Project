import { Table } from "reactstrap";
import { dynamicImage, Image } from "../../../../../Utils";

export const InvoiceHeadSection = () => {
  return (
    <td className="table-container">
      <Table className="custom-table-container">
        <tbody>
          <tr>
            <td className="p-0">
            <div className="company-logo">
              <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="looginpage" />
              <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo_dark.png`)} alt="looginpage"/>
            </div>
              <address className="company-info">
                <span >1982 Harvest Lane New York, NY12210 United State </span>
              </address>
            </td>
            <td className="contact-info">
              <span> Email : zono@themesforest.com</span>
              <span> Website: www.zonothemes.com</span>
              <span> Contact No : (316) 555-0116</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};
