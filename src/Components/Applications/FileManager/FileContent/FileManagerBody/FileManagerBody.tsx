import { CardBody } from "reactstrap";
import { QuickAccessData } from "../../../../../Data/Applications/FileManager";
import { FileManagerBodyProps } from "../../../../../Types/Applications";
import FolderListItem from "./FolderListItem";
import { Fragment } from "react/jsx-runtime";

const FileManagerBody:React.FC<FileManagerBodyProps> = ({ myFile, fileList, searchFile }) => {
  return (
    <CardBody className="file-manager">
      {!searchFile && (
        <Fragment>
          <h5 className="mb-2 f-w-600">{"Quick Access"}</h5>
          <ul className="quick-file d-flex flex-row">
            {QuickAccessData.map((item) => (
              <li key={item.id}>
                <div className="quick-box">
                  <i className={item.quickClass}></i>
                </div>
                <h6>{item.quickTitle}</h6>
              </li>
            ))}
          </ul>
          <h5 className="mt-4 mb-2 f-w-600">{"Folders"}</h5>
          <ul className="folder">
            {myFile.map((item) => (
              <FolderListItem key={item.id} item={item} />
            ))} 
          </ul>
        </Fragment>
      )}
      <h5 className="mt-4 mb-2 f-w-600">{"Files"}</h5>
      <ul className="files-content">{fileList}</ul>
    </CardBody>
  );
};
export default FileManagerBody;
