import { Nav, NavLink } from "reactstrap";
import { VerticalWizardNavProps } from "../../../../../../Types/FormsType";
import { ShippingFormNavData } from "../../../../../../Data/Forms&Table/Forms/FormLayout";

const ShippingFormNav: React.FC<VerticalWizardNavProps> = ({ activeCallBack, steps }) => {
  return (
    <Nav className="horizontal-options shipping-options" pills>
      {ShippingFormNavData.map((data) => (
        <NavLink key={data.id} className={`b-r-0 ${steps === data.id ? "active" : ""}`} onClick={() => activeCallBack(data.id)}>
          <div className="cart-options">
            <div className="stroke-icon-wizard">
              <i className={`fa fa-${data.icon}`} />
            </div>
            <div className="cart-options-content">
              <h4>{data.title}</h4>
            </div>
          </div>
        </NavLink>
      ))}
    </Nav>
  );
};
export default ShippingFormNav;
