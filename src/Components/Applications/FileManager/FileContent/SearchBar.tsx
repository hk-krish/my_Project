import { ChangeEvent } from "react";
import { Form, Input } from "reactstrap";
import { FileSearchBarProps } from "../../../../Types/Applications";

const SearchBar:React.FC<FileSearchBarProps> = ({ searchFile, setSearchFile }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchFile(e.target.value);
  };
  return (
    <Form className="form-inline">
      <div className="form-group mb-0 d-flex align-items-center">
        <i className="fa fa-search" />
        <Input type="text" className="form-control-plaintext" placeholder="Search..." plaintext onChange={handleChange} value={searchFile} />
      </div>
    </Form>
  );
};
export default SearchBar;
