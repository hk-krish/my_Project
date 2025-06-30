import { FileFolderItemProp } from "../../../../../Types/Applications";

const FolderListItem:React.FC<FileFolderItemProp> = ({ item }) => {
  return (
    <li className="folder-box">
      <div className="d-block">
        <i className={`f-44 fa fa-${item.folderClass} txt-warning`} />
        <i className="fa fa-ellipsis-v me-0 f-14 ellips" />
        <div className="mt-3">
          <h6>{item.title}</h6>
          <p>
            {item.folderFiles}
            <span className="pull-right">
              <i className="fa fa-clock-o me-1" />
              {item.folderTime}
            </span>
          </p>
        </div>
      </div>
    </li>
  );
};
export default FolderListItem;
