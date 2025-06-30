import * as yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CreateAccount, DoNotHaveAccount, EmailAddress, ForgotPassword, Href, Password, RememberPassword, SignIn, SignInAccount, SignInWith } from "../Constants";
import { useAppDispatch } from "../ReduxToolkit/Hooks";
import { login } from "../ReduxToolkit/Reducers/Layout/AuthReducer";
import SocialLink from "./SocialLink";
import { routes } from "../Routers/routes";

const schema = yup.object().shape({
  email: yup.string().email("Enter a valid email address").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
});

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const toggle = () => setPasswordVisible(!isPasswordVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues: { email: "test123@gmail.com", password: "Test@123" } });

  const onSubmit = ({ email, password }: { email: string; password: string }) => {
    if (email === "test123@gmail.com" && password === "Test@123") {
      toast.success("Login Success...!");
      dispatch(login());
      navigate(routes.Dashboard.Default);
    } else {
      toast.error("Please Enter a valid email or password...!");
    }
  };

  return (
    <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
      <h3>{SignInAccount}</h3>
      <p>{"Enter your email & password to login"}</p>
      <FormGroup>
        <Label className="col-form-label">{EmailAddress}</Label>
        <input className="form-control" type="email" {...register("email")} />
        {errors.email && <p className="text-danger mt-1">{errors.email.message}</p>}
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{Password}</Label>
        <div className="form-input position-relative">
          <input className="form-control" type={isPasswordVisible ? "text" : "password"} {...register("password")} />
          <div className="show-hide" onClick={toggle}>
            <span className={!isPasswordVisible ? "show" : ""}> </span>
          </div>
        </div>
        {errors.password && <p className="text-danger mt-1">{errors.password.message}</p>}
      </FormGroup>
      <div className="form-group mb-0">
        <div className="checkbox p-0">
          <Input id="checkbox1" type="checkbox" />
          <Label className="text-muted" htmlFor="checkbox1">
            {RememberPassword}
          </Label>
        </div>
        <Link className="link" to={Href}>
          {ForgotPassword}
        </Link>
        <div className="text-end mt-3">
          <Button color="primary" className="w-100" block>
            {SignIn}
          </Button>
        </div>
      </div>
      <h6 className="text-muted mt-4 or">{SignInWith}</h6>
      <SocialLink />
      <p className="mt-4 mb-0 text-center">
        {DoNotHaveAccount}
        <Link className="ms-2" to={Href}>
          {CreateAccount}
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
