import { FileFolderItemProp } from "../../../../../Types/Applications";

const FileListItem:React.FC<FileFolderItemProp> = ({ item }) => {
  return (
    <li className="folder-box d-flex align-items-center">
      <div className="d-flex align-items-center files-list">
        <div className="flex-shrink-0 file-left">
          <i className={`f-22 fa fa-${item.icon}`} />
        </div>
        <div className="flex-grow-1 ms-3">
          <h6>{item.name}</h6>
          <p>{item.folderTime + "," + item.size}</p>
        </div>
      </div>
    </li>
  );
};
export default FileListItem;
