import { Col, Row } from "reactstrap";
import { SearchPixelStrap } from "../../../../Constants";
import { SearchTabData } from "../../../../Data/Applications/SearchResult";
import InformationCommon from "./common/InformationCommon";
import PagesSort from "./Pages";
import SearchBanner from "./SearchBanner";

const AllTabs = () => {
  return (
    <Row>
      <Col xxl="8" xl="6" className="box-col-12">
        <h5 className="f-w-700 mb-2">{SearchPixelStrap}</h5>
        {SearchTabData.map((item, i) => (
          <InformationCommon item={item} key={i} />
        ))}
      </Col>
      <SearchBanner />
      <PagesSort pageClass="end" />
    </Row>
  );
};
export default AllTabs;
