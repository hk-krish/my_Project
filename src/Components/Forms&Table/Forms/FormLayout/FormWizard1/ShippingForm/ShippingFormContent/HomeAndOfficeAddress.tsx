import React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { ShippingInformationProps } from "../../../../../../../Types/FormsType";
import { HomeAndOfficeAddressData } from "../../../../../../../Data/Forms&Table/Forms/FormLayout";

const HomeAndOfficeAddress: React.FC<ShippingInformationProps> = ({ radioBoxValues, updateFormData }) => {
  return (
    <Row className="g-3">
      {HomeAndOfficeAddressData.map((data, index) => (
        <Col xxl="4" sm="6" key={index}>
          <div className="card-wrapper border rounded-3 h-100 light-card">
            <div className="collect-address">
              <div className="d-flex gap-2 align-items-center">
                <FormGroup check className="radio radio-primary">
                  <Input id={data.value} type="radio" name="address" value={data.value} checked={radioBoxValues.address === data.value} onChange={updateFormData} />
                  <Label className="mb-0" htmlFor={data.value} check>{data.label}</Label>
                </FormGroup>
              </div>
              <div className="card-icon">
                <i className="fa fa-pencil" />
                <i className="fa fa-trash-o" />
              </div>
            </div>
            <div className="shipping-address">
              <h6>{data.name}</h6>
              <span>{"Address: "}{data.adress}</span>
              <span>{"Contact: "}{data.contact}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default HomeAndOfficeAddress;
