import { Button, Card, CardBody, Col, Input, InputGroup } from "reactstrap";
import { Secondary, SegmentedButtonsTitle, Success } from "../../../../../Constants";
import { SegmentedButtonsData1, SegmentedButtonsData2, SegmentedButtonsSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import ButtonDropdownList from "./ButtonsWithDropdowns/ButtonDropdownList";

const SegmentedButtons = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={SegmentedButtonsTitle} span={SegmentedButtonsSubTitle} />
        <CardBody className="main-segment-btn card-wrapper input-group-wrapper">
          <InputGroup>
            <Button color="info" outline>{Success}</Button>
            <ButtonDropdownList color="info" split={true} span={true} divider={true} options={SegmentedButtonsData1} />
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" />
            <Button color="secondary" outline>{Secondary}</Button>
            <ButtonDropdownList color="secondary" split={true} span={true} divider={true} options={SegmentedButtonsData2} />
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SegmentedButtons;
