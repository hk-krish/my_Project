import React from "react";
import { Link } from "react-router-dom";
import { LoginFormProp } from "../../../../../Types/OthersType";
import { dynamicImage, Image } from "../../../../../Utils";
import { routes } from "../../../../../Routers/routes";

const CommonLogo: React.FC<LoginFormProp> = ({ logoClass }) => {
  return (
    <Link className={`logo ${logoClass}`} to={routes.Dashboard.Default}>
      <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="logo" />
      <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo_dark.png`)} alt="logo" />
    </Link>
  );
};
export default CommonLogo;
