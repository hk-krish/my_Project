import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { AllAbout, Href } from "../../../../Constants";
import { SearchTabData } from "../../../../Data/Applications/SearchResult";
import PagesSort from "./Pages";

const VideoTabs = () => {
  return (
    <Row>
      <Col xxl="6" className="box-col-12">
        <h5 className="f-w-700 mb-2">{AllAbout}</h5>
        {SearchTabData.slice(0, 3).map((item) => (
          <div className="d-flex info-block" key={item.id}>
            <iframe className="me-3" width="200" height="100" src={item.videoLink} title="videos"></iframe>
            <div className="flex-grow-1">
              <Link to={Href}>{item.url}</Link>
              <h5>{item.title}</h5>
              <div className="star-ratings">
                <ul className="search-info">
                  <li>{item.star}</li>
                  <li>{item.vote}</li>
                  <li>{item.news}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
        <PagesSort pageClass="start" />
      </Col>
      <Col xxl="6" className="box-col-12">
        <h5 className="f-w-700 mb-2">{AllAbout}</h5>
        {SearchTabData.slice(1, 4).map((item) => (
          <div className="d-flex info-block" key={item.id}>
            <iframe className="me-3" width="200" height="100" src={item.videoLink} title="videos"></iframe>
            <div className="flex-grow-1">
              <Link to={Href}>{item.url}</Link>
              <h5>{item.title}</h5>
              <div className="star-ratings">
                <ul className="search-info">
                  <li>{item.star}</li>
                  <li>{item.vote}</li>
                  <li>{item.news}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
};
export default VideoTabs;
