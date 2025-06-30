import { Col } from "reactstrap";
import { dynamicImage, Image } from "../../Utils";

const SearchNotFoundClass:React.FC<{ word: string }> = ({ word }) => {
  return (
    <Col sm="12">
      <div>
        <div className="search-not-found text-center p-5">
          <Image className="img-100 mb-4" src={dynamicImage(`other-images/sad.gif`)} alt="" />
          <p>{`Sorry, Not Found Any ${word}`}</p>
        </div>
      </div>
    </Col>
  );
};

export default SearchNotFoundClass;
