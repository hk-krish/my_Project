import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { AlignmentsTitle, BasicDropdownTitle, DividerDropdownTitle, Dropdown, DropdownSizingTitle, HelperCardTitle, JustifyContentTitle, RoundedDropdownTitle, UIKits } from "../../../Constants";
import { AlignmentData, AlignmentsSubTitle, BasicDropdownData, BasicDropdownSubTitle, DividerCommonData, DividerDropdownSubTitle, DropdownSizingData, DropdownSizingSubTitle, HelperCardData, HelperCardSubTitle, JustifyContentSubTitle, JustifyData, RoundedDropdownData, RoundedDropdownSubTitle } from "../../../Data/UiKits/Dropdown";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import BasicDropdown from "./Common/BasicDropdown";
import DarkDropdown from "./DarkDropdown";
import DropdownWithInput from "./DropdownWithInput";
import HeadingDropdown from "./HeadingDropdown";
import SplitDropdown from "./SplitDropdown";
import UniqueDropdown from "./UniqueDropdown";

const DropdownContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Dropdown} parent={UIKits} />
      <Container fluid className="dropdown-page">
        <Row>
          <BasicDropdown title={BasicDropdownTitle} span={BasicDropdownSubTitle} data={BasicDropdownData} colClass="col-xl-6" bodyClass="basic-custom-dropdown" />
          <BasicDropdown title={RoundedDropdownTitle} span={RoundedDropdownSubTitle} data={RoundedDropdownData} colClass="col-xl-6" toggleClass="rounded-pill"  bodyClass="basic-custom-dropdown"/>
          <SplitDropdown />
          <HeadingDropdown />
          <DropdownWithInput />
          <DarkDropdown />
          <UniqueDropdown />
          <BasicDropdown title={JustifyContentTitle} span={JustifyContentSubTitle} data={JustifyData} colClass="col-lg-6" bodyClass="dropdown-basic m-0" />
          <BasicDropdown title={AlignmentsTitle} span={AlignmentsSubTitle} data={AlignmentData} colClass="col-lg-6" />
          <BasicDropdown title={HelperCardTitle} span={HelperCardSubTitle} data={HelperCardData} colClass="col-xl-6" />
          <BasicDropdown title={DividerDropdownTitle} span={DividerDropdownSubTitle} data={DividerCommonData} colClass="col-md-6" toggleClass="rounded-pill" />
          <BasicDropdown title={DropdownSizingTitle} span={DropdownSizingSubTitle} data={DropdownSizingData} colClass="col-md-6" />
        </Row>
      </Container>
    </Fragment>
  );
};
export default DropdownContainer;
