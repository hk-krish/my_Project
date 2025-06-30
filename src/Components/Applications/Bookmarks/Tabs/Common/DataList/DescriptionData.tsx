import { Edit2, Link, Share2, Tag, Trash2 } from "react-feather";
import { Href } from "../../../../../../Constants";
import { DescriptionBookMarkPropsType } from "../../../../../../Types/Applications";

const DescriptionData: React.FC<DescriptionBookMarkPropsType> = ({ data, onHandleClick, removeFromBookmark }) => {

  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <h5 className="title_0 f-w-600">{data.title}</h5>
        <p className="weburl_0">{data.website_url}</p>
        <div className="hover-block">
          <ul>
            <li><a href={Href} onClick={() => onHandleClick(data)}><Edit2 /></a></li>
            <li><a href={Href}><Link /></a></li>
            <li><a href={Href}><Share2 /></a></li>
            <li><a href={Href} onClick={() => removeFromBookmark(data.id)}><Trash2 /></a></li>
            <li className="text-end"><a href={Href}><Tag /></a></li>
          </ul>
        </div>
        <div className="content-general">
          <p className="desc_0">{data.desc}</p>
          <span className="collection_0">{data.collection}</span>
        </div>
      </div>
    </div>
  );
};

export default DescriptionData;