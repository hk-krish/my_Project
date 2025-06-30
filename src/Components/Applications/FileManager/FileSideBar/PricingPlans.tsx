import { Grid } from "react-feather";
import { FREE, PricingPlan, Selected, TrialVersion } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";
import { Button } from "reactstrap";

const PricingPlans = () => {
  return (
    <ul>
      <li>
        <Button outline color="primary"><Grid />{PricingPlan}</Button>
      </li>
      <li>
        <div className="pricing-plan">
          <h6>{TrialVersion} </h6>
          <h5>{FREE}</h5>
          <p>{"100GB Space"}</p>
          <Button className="w-auto" size="xs" color="primary" outline>{Selected}</Button>
          <Image className="bg-img" src={dynamicImage(`dashboard/folder.png`)} alt="dashboard" />
        </div>
      </li>
    </ul>
  );
};

export default PricingPlans;
