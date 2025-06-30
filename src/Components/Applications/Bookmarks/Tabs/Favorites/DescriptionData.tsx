import { Edit2, Link, Share2, Tag, Trash2 } from "react-feather";
import { Href } from "../../../../../Constants";
import { FavDescriptionDataProp } from "../../../../../Types/Applications";

const DescriptionData: React.FC<FavDescriptionDataProp> = ({ myBookData }) => {
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <h4 className="title_0">{myBookData.title}</h4>
        <p className="weburl_0">{myBookData.website_url}</p>
        <div className="hover-block">
          <ul>
            <li><a href={Href}><Edit2 /></a></li>
            <li><a href={Href}><Link /></a></li>
            <li><a href={Href}><Share2 /></a></li>
            <li><a href={Href}><Trash2 /></a></li>
            <li className="text-end"><a href={Href}><Tag /></a></li>
          </ul>
        </div>
        <div className="content-general">
          <p className="desc_0">{myBookData.desc}</p>
          <span className="collection_0">{myBookData.collection}</span>
        </div>
      </div>
    </div>
  );
};

export default DescriptionData;