import { Input } from "reactstrap";
import { VariationBoxData } from "../../../../../../../Data/Forms&Table/Forms/FormLayout";

const VariationBox = () => {
  return (
    <div className="variation-box">
      {VariationBoxData.map((data, index) => (
        <div className="selection-box" key={index}>
          <Input type="checkbox" />
          <div className="custom--mega-checkbox">
            <ul className="d-flex flex-column align-items-center">
              <li>{data.title}</li>
              <li className="txt-primary">{data.details}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
export default VariationBox;
