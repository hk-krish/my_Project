import { Button, Card, CardBody, Col, InputGroup, InputGroupText } from "reactstrap";
import { CareerSelectTitle, CustomFormsTitle, FavoriteChocolatesTitle, FavoriteColorsTitle, FavoriteItemsTitle, Options, Submit } from "../../../../../../Constants";
import { CareerSelectList, CustomFormsSubTitle, FavoriteChocolatesData, FavoriteColorsData, FavoriteItemsData } from "../../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import CustomFormSelect from "./CustomFormSelect";

const CustomForms = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={CustomFormsTitle} span={CustomFormsSubTitle} />
        <CardBody className="common-flex main-custom-form">
          <InputGroup>
            <InputGroupText htmlFor="inputGroupSelect01">{Options}</InputGroupText>
            <CustomFormSelect inputId="inputGroupSelect01" title={CareerSelectTitle} options={CareerSelectList} />
          </InputGroup>
          <InputGroup>
            <CustomFormSelect inputId="inputGroupSelect02" title={FavoriteColorsTitle} options={FavoriteColorsData} />
            <InputGroupText htmlFor="inputGroupSelect02">{Options}</InputGroupText>
          </InputGroup>
          <InputGroup>
            <Button color="secondary" outline><i className="icofont icofont-credit-card"></i></Button>
            <CustomFormSelect inputId="inputGroupSelect03" title={FavoriteChocolatesTitle} options={FavoriteChocolatesData} />
          </InputGroup>
          <InputGroup>
            <CustomFormSelect inputId="inputGroupSelect04" title={FavoriteItemsTitle} options={FavoriteItemsData} />
            <Button color="secondary" outline>{Submit}</Button>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CustomForms;
