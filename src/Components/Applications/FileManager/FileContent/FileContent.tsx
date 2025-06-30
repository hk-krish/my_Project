import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { Card, CardHeader } from "reactstrap";
import { FilesListData } from "../../../../Data/Applications/FileManager";
import SearchBar from "./SearchBar";
import AddUploadMedia from "./AddUploadMedia";
import FileListItem from "./FileManagerBody/FileListItem";
import FileManagerBody from "./FileManagerBody/FileManagerBody";
import SearchNotFoundClass from "../../../CoreComponents/SearchNotFoundClass";

const FileContent = () => {
  const [searchFile, setSearchFile] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [myFile, setMyFile] = useState(FilesListData);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) setSelectedFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    let myFiles = [...myFile];
    if (selectedFile !== null) {
      myFiles.push({
        id: myFile.length + 1,
        name: selectedFile.name,
        size: `${selectedFile.size}`,
        modify: `${selectedFile.lastModified}`,
        icon: "f-22 fa fa-folder font-info",
        folderClass: "f-44 fa fa-folder txt-warning",
        title: selectedFile.name,
        folderFiles: "100 files",
        folderTime: "2 Hour ago",
      });
      setMyFile(myFiles);
      toast.success("File Upload Successfully !");
    } else toast.error("Please Select at least one file !");
  };
  const fileList = myFile.filter((data) => searchFile === "" || data.name.toLowerCase().includes(searchFile.toLowerCase())).map((item, index) => <FileListItem key={index} item={item} />);
  return (
    <Card>
      <CardHeader className="d-md-block d-none pb-0">
        <div className="d-md-flex d-sm-block">
          <SearchBar searchFile={searchFile} setSearchFile={setSearchFile} />
          <AddUploadMedia onFileChange={onFileChange} onFileUpload={onFileUpload} />
        </div>
      </CardHeader>
      {fileList.length ? <FileManagerBody myFile={myFile} fileList={fileList} searchFile={searchFile} /> : <SearchNotFoundClass word="File" />}
    </Card>
  );
};
export default FileContent;
