import React from "react";
import { Nav, NavLink } from "reactstrap";
import { VerticalWizardNavProps } from "../../../../../../Types/FormsType";
import { VerticalWizardNavData } from "../../../../../../Data/Forms&Table/Forms/FormLayout";

const VerticalWizardNav: React.FC<VerticalWizardNavProps> = ({ steps, activeCallBack }) => {
  return (
    <Nav className="flex-column header-vertical-wizard" id="wizard-tab">
      {VerticalWizardNavData.map((data) => (
        <NavLink key={data.id} className={steps === data.id ? "active" : ""} onClick={() => activeCallBack(data.id)}>
          <div className="vertical-wizard">
            <div className="stroke-icon-wizard">
              <i className={`fa fa-${data.icon}`}></i>
            </div>
            <div className="vertical-wizard-content">
              <h6>{data.title}</h6>
              <p>{data.subTitle}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </Nav>
  );
};
export default VerticalWizardNav;
