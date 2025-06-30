import React from "react";
import { Nav, NavLink } from "reactstrap";
import { BusinessNavData } from "../../../../../../Data/Forms&Table/Forms/FormLayout";
import { VerticalWizardNavProps } from "../../../../../../Types/FormsType";

const BusinessNavComponent: React.FC<VerticalWizardNavProps> = ({ steps, activeCallBack }) => {
  const handleTab = (id: number | undefined) => {
    if (id !== undefined) activeCallBack(id);
  };
  return (
    <Nav className="horizontal-options" pills>
      {BusinessNavData.map((data, index) => (
        <NavLink key={index} className={steps === index + 1 ? "active" : ""} onClick={() => handleTab(data.id)}>
          <div className="horizontal-wizard">
            <div className="stroke-icon-wizard">
              <span>{index + 1}</span>
            </div>
            <div className="horizontal-wizard-content business-wizard">
              <h6>{data.title}</h6>
            </div>
          </div>
        </NavLink>
      ))}
    </Nav>
  );
};
export default BusinessNavComponent;
