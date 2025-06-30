import { Col, Table } from "reactstrap";
import { CurrentCartTitle } from "../../../../../../Constants";
import { CurrentCartTableBodyData, CurrentCartTableFooterData } from "../../../../../../Data/Forms&Table/Forms/FormLayout";
import { dynamicImage, Image } from "../../../../../../Utils";

const CurrentCart = () => {
  return (
    <Col xl="4">
      <div className="shipping-info">
        <h3>{CurrentCartTitle}</h3>
        <div className="overflow-auto custom-scrollbar">
          <Table striped>
            <thead>
              <tr>
                <th scope="col">{"Product"}</th>
                <th scope="col">{"Product Detail"}</th>
                <th scope="col">{"Price"}</th>
              </tr>
            </thead>
            <tbody>
              {CurrentCartTableBodyData.map((data, index) => (
                <tr key={index}>
                  <td><Image src={dynamicImage(data.imagePath)} alt="t-shirt" /></td>
                  <td><div><h6>{data.productName}</h6><span>{data.productSum}</span></div></td>
                  <td><p>{data.price}</p></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              {CurrentCartTableFooterData.map((data, index) => (
                <tr key={index}>
                  <td>{data.footerTittle}</td>
                  <td colSpan={2}>{"$"}{data.price}</td>
                </tr>
              ))}
            </tfoot>
          </Table>
        </div>
      </div>
    </Col>
  );
};

export default CurrentCart;
