import { Menu, MenuItem, Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";
import { MultipleSectionsHeadersTitle } from "../../../../../Constants";
import { MultipleSelectionSubTitle, MultipleWithHeadersData } from "../../../../../Data/Forms&Table/Forms/FormWidgets";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const MultipleSectionsWithHeaders = () => {
  const renderMenu = (results: any[], menuProps: any) => {
    const items = results.map((result, index) => {
      if (result.divider === true) <li key={index} role="separator" className="divider" />;

      if (result.header === true) <li key={index} className="dropdown-header">{result.name}</li>;

      return (
        <MenuItem key={index} option={result} position={index}>
          <strong>{result.name}</strong>
        </MenuItem>
      );
    });
    return <Menu {...menuProps}>{items}</Menu>;
  };
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={MultipleSectionsHeadersTitle} span={MultipleSelectionSubTitle} />
        <CardBody>
          <div id="multiple-datasets">
            <Form className="theme-form">
              <div>
                <Typeahead id="multi" options={MultipleWithHeadersData} placeholder="NBA and NHL teams" renderMenu={renderMenu} labelKey="name" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MultipleSectionsWithHeaders;
