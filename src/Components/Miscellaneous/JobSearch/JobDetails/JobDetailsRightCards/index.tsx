import { Col, Row } from "reactstrap";
import { SimilarJobs } from "../../../../../Constants";
import RightSidebarCards from "../../Common/RightSidebarCards";
import ProductDesignerCard from "./ProductDesignerCard";

const JobDetailsRightCards = () => {
  return (
    <Col xl="9" className="xl-60 box-col-12">
      <ProductDesignerCard />
      <div className="header-faq">
        <h4 className="mb-0 f-w-600">{SimilarJobs}</h4>
      </div>
      <Row>
        <RightSidebarCards startLimit={1} endLimit={5} colClass="col-xl-6 xl-100" pagination/>
        <RightSidebarCards startLimit={7} endLimit={8} colClass="col-xl-12" pagination/>
      </Row>
    </Col>
  );
};
export default JobDetailsRightCards;
