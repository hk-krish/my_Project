import { Card, Col } from "reactstrap";
import InformationCommon from "./common/InformationCommon";
import { dynamicImage, Image } from "../../../../Utils";
import { SearchDesc } from "../../../../Constants";
import { SearchInformation, SearchInformationTwo } from "../../../../Data/Applications/SearchResult";

const SearchBanner = () => {
  return (
    <Col xxl="4" xl="6" className="box-col-12 mt-4">
      <Card className="o-hidden">
        <div className="blog-box blog-shadow">
          <Image className="img-fluid" src={dynamicImage(`blog/blog.jpg`)} alt="blog"/>
          <div className="blog-details">
            <p>25 July 2024</p>
            <h4>{SearchDesc}</h4>
            <ul className="blog-social">
              <li><i className="icofont icofont-user"></i>Mark Jecno</li>
              <li><i className="icofont icofont-thumbs-up"></i>02 Hits</li>
            </ul>
          </div>
        </div>
      </Card>
      <InformationCommon item={SearchInformation}  />
      <InformationCommon item={SearchInformationTwo}  />
    </Col>
  );
};

export default SearchBanner;