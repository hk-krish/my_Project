import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { ActiveDisablePageTitle, BonusUi, DefaultPaginationTitle, IconPaginationTitle, PaginationSizeTitle, PaginationTitle, RoundedPaginationTitle } from "../../../Constants";
import { ActiveDisableSubTitle, DefaultPageData, DefaultPageSubTitle, IconListData, IconPageSubTitle, PageSizeSubTitle, PaginationAlignData, PaginationSizeData, RoundedListData, RoundedPageSubTitle } from "../../../Data/BonusUi/Pagination";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import CommonPagination from "./Common/CommonPagination";

const PaginationContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={PaginationTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <CommonPagination title={DefaultPaginationTitle} span={DefaultPageSubTitle} data={DefaultPageData} pageColor="primary" />
          <CommonPagination title={ActiveDisablePageTitle} span={ActiveDisableSubTitle} data={DefaultPageData} pageColor="success" active disabled />
          <CommonPagination title={IconPaginationTitle} span={IconPageSubTitle} data={IconListData} pageColor="secondary" />
          <CommonPagination title={RoundedPaginationTitle} span={RoundedPageSubTitle} data={RoundedListData} pageColor="dark" classLink="rounded-circle" listClass="gap-2" />
          <CommonPagination title={RoundedPaginationTitle} span={RoundedPageSubTitle} multiData={PaginationAlignData} colClass="col-xl-6"/>
          <CommonPagination title={PaginationSizeTitle} span={PageSizeSubTitle} multiData={PaginationSizeData} colClass="col-xl-6"/>
        </Row>
      </Container>
    </Fragment>
  );
};
export default PaginationContainer;
