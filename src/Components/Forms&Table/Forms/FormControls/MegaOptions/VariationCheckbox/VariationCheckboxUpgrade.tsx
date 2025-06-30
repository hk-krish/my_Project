import { Col, Input } from "reactstrap";
import { UpgradeVariationCheckbox } from "../../../../../../Data/Forms&Table/Forms/FormControls";

const VariationCheckboxUpgrade = () => {
  return (
    <Col xl="8" md="7">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <section className="main-upgrade">
          <div>
            <i className="fa fa-rocket"></i>
            <h5 className="mb-2">{"It's time to "} <span className="txt-primary">{"upgrade"}</span></h5>
            <p className="text-muted mb-2">{"Select the theme that best suits your requirements, and you're ready to go!"}</p>
          </div>
          <div className="variation-box">
            {UpgradeVariationCheckbox.map((data) => (
              <div className="selection-box" key={data.id}>
                <Input id={`feature${data.id}`} type="checkbox" defaultChecked={data.check ? true : false} />
                <div className="custom--mega-checkbox">
                  <ul className="d-flex flex-column align-items-center">
                    <li>{data.text}</li>
                    <li className="txt-primary">{data.sales}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Col>
  );
};
export default VariationCheckboxUpgrade;
