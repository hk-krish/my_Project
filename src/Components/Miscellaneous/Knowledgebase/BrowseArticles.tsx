import { Archive, ArrowRight, FileText } from "react-feather";
import { Badge, Card, CardBody, Col, Row } from "reactstrap";
import { BrowseArticlesHeader, BrowseArticlesTitle, Href } from "../../../Constants";
import { KnowledgeBaseData } from "../../../Data/Miscellaneous/Knowledgebase";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const BrowseArticles = () => {
  return (
    <Col sm="12">
      <div className="header-faq">
        <h4>{BrowseArticlesTitle}</h4>
      </div>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={BrowseArticlesHeader} />
            <CardBody>
              <Row className="browse g-sm-4 g-3">
                {KnowledgeBaseData.map((data) => (
                  <Col xl="4" className={data.id === 9 ? "xl-100" : "xl-50 col-md-6"} key={data.id}>
                    <div className={`browse-articles ${data.id > 3 ? "browse-bottom" : ""}`}>
                      <h4>
                        <span>
                          <Archive />
                        </span>
                        {data.title}
                      </h4>
                      <ul>
                        {data.knowledgeList &&
                          data.knowledgeList.map((data, index) => (
                            <li key={index}>
                              <a href={Href} className={!data.fileTextIcon ? "f-w-600 font-primary" : ""}>
                                {data.fileTextIcon ? (
                                  <span>
                                    <FileText />
                                  </span>
                                ) : (
                                  <span>
                                    <ArrowRight />
                                  </span>
                                )}
                                <span>{data.text}</span>
                                {data.badge ? (
                                  <Badge color="primary" className="pull-right">
                                    {data.badge}
                                  </Badge>
                                ) : (
                                  ""
                                )}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};
export default BrowseArticles;
