import { useState } from "react";
import { Button, ButtonGroup, Dropdown, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label } from "reactstrap";
import { DropdownFormText, EmailAddress, Password, RememberMe, SignIn } from "../../../../Constants";

const DropdownForm = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle} direction="down">
        <DropdownToggle caret color="secondary" className="text-white">{DropdownFormText}</DropdownToggle>
        <DropdownMenu>
          <Form className="p-4 form-wrapper dark-form">
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <Input type="email" placeholder="email@example.com" />
            </FormGroup>
            <FormGroup>
              <Label>{Password}</Label>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup check>
              <Input id="dropdownCheck2" type="checkbox" />
              <Label htmlFor="dropdownCheck2" check>{RememberMe}</Label>
            </FormGroup>
            <Button color="primary" onClick={toggle}>{SignIn}</Button>
          </Form>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};
export default DropdownForm;
