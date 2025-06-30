import { Href } from "../../../../../Constants";
import { StepperHorizontalData } from "../../../../../Data/Pages/Pages";
import { RegisterWizardProp } from "../../../../../Types/OthersType";
import { dynamicImage, Image } from "../../../../../Utils";
import CommonLogo from "../Common/CommonLogo";

const RegisterWizardList: React.FC<RegisterWizardProp> = ({ level }) => {
  return (
    <ul className="anchor custom-scrollbar">
      <li>
        <CommonLogo logoClass="ps-0" />
      </li>
      {StepperHorizontalData.map((item) => (
        <li key={item.id}>
          <a href={Href} className={`${level === item.id ? "selected" : level > item.id ? "done" : "disabled"}`}>
            <h4>{item.id}</h4>
            <h5>{item.title}{item.icon}</h5>
            <small>{item.detail}</small>
          </a>
        </li>
      ))}
      <li>
        <Image className="img-fluid w-100" src={dynamicImage(`login/icon.png`)} alt="loogin page" />
      </li>
    </ul>
  );
};
export default RegisterWizardList;
