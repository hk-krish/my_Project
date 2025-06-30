import { useState } from "react";
import { Tooltip } from "reactstrap";
import { SocialGroupData } from "../../../../../../Data/Applications/SocialApp";
import { dynamicImage, Image } from "../../../../../../Utils";

const SocialGroup = () => {
  const [tooltipOpen, setTooltipOpen] = useState(Array(SocialGroupData.length).fill(false));
  const toggle = (index: number) => setTooltipOpen(tooltipOpen.map((item, i) => (i === index ? !item : item)));

  return (
    <ul>
      {SocialGroupData.map((data, index) => (
        <li className="d-inline-block" key={index}>
          <Image className="img-40 rounded-circle" src={dynamicImage(`user/${data.imageName}`)} alt="Img" id={`TooltipExample-${index}`} />
          <Tooltip placement="top" target={`TooltipExample-${index}`} toggle={() => toggle(index)} isOpen={tooltipOpen[index]}>
            {data.userName}
          </Tooltip>
        </li>
      ))}
    </ul>
  );
};

export default SocialGroup;
