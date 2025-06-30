import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { KnowledgebaseTitle } from "../../../Constants";
import { LatestArticlesVideosknowledge } from "../../../Data/Miscellaneous/FAQ";
import FaqWidgets from "../FAQ/FaqWidgets";
import FeaturedTutorials from "../FAQ/FeaturedTutorials";
import LatestArticlesVideos from "../FAQ/LatestArticlesVideos";
import BrowseArticles from "./BrowseArticles";
import KnowledgeSearch from "./KnowledgeSearch";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const KnowledgebaseContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={KnowledgebaseTitle} parent={KnowledgebaseTitle} />
      <Container fluid className="knowledgebase">
        <Row>
          <KnowledgeSearch />
          <FaqWidgets />
          <BrowseArticles />
          <FeaturedTutorials />
          <LatestArticlesVideos rowClass="latest-articles" divClass="articles-icons" data={LatestArticlesVideosknowledge} />
        </Row>
      </Container>
    </Fragment>
  );
};
export default KnowledgebaseContainer;
