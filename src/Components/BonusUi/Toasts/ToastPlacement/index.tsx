import React, { useState } from "react";
import { Card, CardBody, Col, Form, FormGroup, Input } from "reactstrap";
import ToastPlacementContent from "./ToastPlacementContent";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { ToastPlacementTitle } from "../../../../Constants";
import { ToastPlacementOptions, ToastPlacementSubTitle } from "../../../../Data/BonusUi/Toasts";

const ToastPlacement = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ToastPlacementTitle} span={ToastPlacementSubTitle} />
        <CardBody className="toast-rtl toast-dark toast-placement">
          <Form>
            <FormGroup>
              <Input className="mt-2" name="toastPlacement" type="select" value={selectedPosition} onChange={(event) => setSelectedPosition(event.target.value)}>
                {ToastPlacementOptions.map((options, index) => (
                  <option value={options.value} key={index}>
                    {options.label}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Form>
          <ToastPlacementContent selectedPosition={selectedPosition} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default ToastPlacement;
