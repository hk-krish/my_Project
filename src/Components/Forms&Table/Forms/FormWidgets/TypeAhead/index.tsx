import { Container, Row } from "reactstrap";
import { BasicTypeAheadTitle, BloodhoundTitle, CustomTemplatesTitle, FormWidgetsTitle, PrefetchTitle, RTLSupportTitle, RemoteTypeAheadTitle, ScrollableDropdownMenuTitle, TypeAheadTitle } from "../../../../../Constants";
import { BasicTypeAheadSubTitle, BloodHoundSubTitle, CountryList, CustomTemplateSubTitle, MovieList, OscarWinnersMovieList, PrefetchSubTitle, RTlSupportSubTitle, RemoteTypeAheadSubTitle, ScrollableDropdownSubTitle, StatesOfUSA } from "../../../../../Data/Forms&Table/Forms/FormWidgets";
import CommonTypeAhead from "./Common/CommonTypeAhead";
import MultipleSectionsWithHeaders from "./MultipleSectionsWithHeaders";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const TypeAheadContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={TypeAheadTitle} parent={FormWidgetsTitle} />
      <Container fluid>
        <div className="typeahead typeahead-wrapper">
          <Row>
            <CommonTypeAhead id="basic" title={BasicTypeAheadTitle} subTitle={BasicTypeAheadSubTitle} options={StatesOfUSA} placeholder="States of USA" />
            <CommonTypeAhead id="prefetch" title={PrefetchTitle} subTitle={PrefetchSubTitle} options={CountryList} placeholder="Countries" />
            <CommonTypeAhead id="blood" title={BloodhoundTitle} subTitle={BloodHoundSubTitle} options={StatesOfUSA} placeholder="States of USA" />
            <CommonTypeAhead id="remote" title={RemoteTypeAheadTitle} subTitle={RemoteTypeAheadSubTitle} options={MovieList} placeholder="Choose Option" />
            <CommonTypeAhead id="custom" title={CustomTemplatesTitle} subTitle={CustomTemplateSubTitle} options={OscarWinnersMovieList} placeholder="Oscar winners" />
            <MultipleSectionsWithHeaders />
            <CommonTypeAhead id="scroll" title={ScrollableDropdownMenuTitle} subTitle={ScrollableDropdownSubTitle} options={CountryList} placeholder="Countries" />
            <CommonTypeAhead id="rtl" title={RTLSupportTitle} subTitle={RTlSupportSubTitle} options={CountryList} placeholder="Countries" />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default TypeAheadContainer;
