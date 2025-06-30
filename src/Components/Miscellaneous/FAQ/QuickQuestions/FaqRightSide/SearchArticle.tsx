import { HelpCircle, Search } from "react-feather";
import { Card, CardBody, CardHeader, Col, Input } from "reactstrap";
import { SearchArticlesTitle } from "../../../../../Constants";

const SearchArticle = () => {
  return (
    <Col lg="12">
      <Card className="card-mb-faq xs-mt-search">
        <CardHeader className="faq-header pb-0">
          <h4>{SearchArticlesTitle}</h4>
          <HelpCircle />
        </CardHeader>
        <CardBody className="faq-body">
          <div className="faq-form">
            <Input type="text" placeholder="Search.." />
            <Search className="search-icon" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SearchArticle;
