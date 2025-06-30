import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { EmailAddress, ForgotPassword, Password, RememberPassword, SignIn, SignInAccount } from "../../../../../Constants";
import { LoginFormProp } from "../../../../../Types/OthersType";
import CommonLogo from "./CommonLogo";
import SocialLinks from "./SocialLinks";
import { routes } from "../../../../../Routers/routes";

const LoginForm: React.FC<LoginFormProp> = ({ logoClass }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const toggle = () => setPasswordVisible(!isPasswordVisible);
  const [formData, setFormData] = useState({ email: "", password: "", checkbox1: false });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ email: "", password: "", checkbox1: false });
  };
  return (
    <div>
      <div>
        <CommonLogo logoClass={logoClass} />
      </div>
      <div className="login-main">
        <Form className="theme-form" onSubmit={handleSubmit}>
          <h4>{SignInAccount}</h4>
          <p>{"Enter your email & password to login"}</p>
          <FormGroup>
            <Col><Label>{EmailAddress}</Label></Col>
            <Input type="email" required placeholder="Test@gmail.com" id="email" value={formData.email} onChange={handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Col><Label>{Password}</Label></Col>
            <div className="form-input position-relative">
              <Input type={isPasswordVisible ? "text" : "password"} name="login[password]" autoComplete="off" required placeholder="*********" id="password" value={formData.password} onChange={handleInputChange} />
              <div className="show-hide" onClick={toggle}>
                <span className={!isPasswordVisible ? "show" : ""}></span>
              </div>
            </div>
          </FormGroup>
          <div className="mb-0 form-group">
            <div className="checkbox p-0">
              <Input id="checkbox1" type="checkbox" checked={formData.checkbox1} onChange={handleInputChange} />
              <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
            </div>
            <Link className="link" to={routes.Auth.Recovery.ForgetPassword}>{ForgotPassword}</Link>
            <div className="text-end mt-3">
              <Button color="primary" block className="w-100">{SignIn}</Button>
            </div>
          </div>
          <SocialLinks />
        </Form>
      </div>
    </div>
  );
};
export default LoginForm;
