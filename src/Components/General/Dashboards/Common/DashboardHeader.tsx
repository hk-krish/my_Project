import { CardHeader } from "reactstrap";
import { DashboardHeaderType } from "../../../../Types/CommonComponents";
import { DashboardDropdown } from "./DashboardDropdown";

const DashboardHeader: React.FC<DashboardHeaderType> = ({ title, tagClass, dropDownFalse, children, dropdownTitle, dropdownClass, days, dropdownToggleClass, headerClass, dropdownIcon }) => {
  return (
    <CardHeader className={headerClass ? headerClass : "pb-0"}>
      <div className="header-top">
        <h4 className={tagClass ? tagClass : ""}>{title}</h4>
        {!dropDownFalse && <DashboardDropdown dropdownTitle={dropdownTitle} dropdownClass={dropdownClass} days={days} dropdownToggleClass={dropdownToggleClass} dropdownIcon={dropdownIcon} />}
        {children}
      </div>
    </CardHeader>
  );
};

export default DashboardHeader;
