import React from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { FilterComponentProps } from "../../../../Types/TablesType";

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilter, filterText }) => {
  return (
    <Row className="align-items-center justify-content-end">
      <Col xs="auto">
        <Label>{"Search"}:</Label>
      </Col>
      <Col xs="auto" className="d-flex flex-row">
        <Input type="text" value={filterText} onChange={onFilter} placeholder="Filter by name" />
      </Col>
    </Row>
  );
};
export default FilterComponent;
