import { Card, CardBody, Col } from "reactstrap";
import { SelectSizingTitle } from "../../../../../Constants";
import { SelectSizingData, SelectSizingSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonSelect from "../../Common/CommonSelect";

const SelectSizing = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={SelectSizingTitle} span={SelectSizingSubTitle} />
        <CardBody>
          <CommonSelect  data={SelectSizingData} inputClass="form-select-sm" labelClass="d-none"/>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SelectSizing;
