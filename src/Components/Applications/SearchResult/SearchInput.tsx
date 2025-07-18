import { CardHeader, Form, Input, InputGroup, InputGroupText } from "reactstrap";
import { SearchTableButton } from "../../../Constants";

const SearchInput = () => {
  return (
    <CardHeader>
      <Form className="theme-form">
        <InputGroup className="m-0 flex-nowrap">
          <Input className="form-control-plaintext" type="search" placeholder="Search .." />
          <InputGroupText className="btn btn-primary">{SearchTableButton}</InputGroupText>
        </InputGroup>
      </Form>
    </CardHeader>
  );
};

export default SearchInput;