import { Link } from "react-router-dom";
import { Href } from "../../../../../Constants";
import { InformationCommonPropsType } from "../../../../../Types/Applications";
import { Rating } from "react-simple-star-rating";

const InformationCommon: React.FC<InformationCommonPropsType> = ({ item }) => {
  return (
    <div className="info-block">
      <Link to={Href}>{item.url}</Link>
      <h5>{item.title}</h5>
      <p>{item.detail}</p>
      <div className="star-ratings">
        <ul className="search-info">
          {item.showStar ? <li className="rating"><Rating initialValue={3} size={17} className="mt-1" /></li> : ""}
          <li>{item.star}</li>
          <li>{item.vote}</li>
          <li>{item.news}</li>
        </ul>
      </div>
    </div>
  );
};

export default InformationCommon;
