import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { FAQTitle } from "../../../Constants";
import { LatestArticlesVideosFaq } from "../../../Data/Miscellaneous/FAQ";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import FaqWidgets from "./FaqWidgets";
import FeaturedTutorials from "./FeaturedTutorials";
import LatestArticlesVideos from "./LatestArticlesVideos";
import QuickQuestions from "./QuickQuestions";

const FaqContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={FAQTitle} parent={FAQTitle} />
      <Container fluid>
        <div className="faq-wrap">
          <Row>
            <FaqWidgets />
            <QuickQuestions />
            <FeaturedTutorials />
            <LatestArticlesVideos rowClass="latest-articles" data={LatestArticlesVideosFaq} />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default FaqContainer;
