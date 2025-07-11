import { CardBody, Col, Collapse, Input, Row } from "reactstrap";
import { FiltersData } from "../../../../Data/Applications/ECommerce";

const CollapseFilterData: React.FC<{ showList: boolean }> = ({ showList }) => {
  return (
    <Collapse isOpen={showList}>
      <div className="shadow-none">
        <CardBody className="list-product-body">
          <Row className="row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">
            {FiltersData.map((item, index) => (
              <Col key={index}>
                <Input type="select">
                  <option>{item.name}</option>
                  {item.options.map((data, optionIndex) => (
                    <option key={optionIndex} value={optionIndex + 1}>
                      {data}
                    </option>
                  ))}
                </Input>
              </Col>
            ))}
          </Row>
        </CardBody>
      </div>
    </Collapse>
  );
};

export default CollapseFilterData;
