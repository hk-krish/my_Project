import { FormEvent } from "react";
import { Search } from "react-feather";
import { Col, Form, FormGroup, Input } from "reactstrap";
import { dynamicImage } from "../../../Utils";

const KnowledgeSearch = () => {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <Col xs="12">
      <div className="knowledgebase-bg b-center bg-size" style={{ backgroundImage: `url(${dynamicImage(`knowledgebase/bg_1.jpg`)})`, backgroundSize: "cover", backgroundPosition: "center", display: "block" }} />
      <div className="knowledgebase-search">
        <div>
          <h3>{"How Can I help you?"}</h3>
          <Form className="form-inline" onSubmit={handleSearch}>
            <FormGroup className="w-100 m-0">
              <Search />
              <Input className="w-100" type="text" placeholder="Type question here" plaintext />
            </FormGroup>
          </Form>
        </div>
      </div>
    </Col>
  );
};
export default KnowledgeSearch;
