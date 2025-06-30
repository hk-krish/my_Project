import { Nav, NavLink } from "reactstrap";
import { customizerLinks } from "../../../Data/Layout/ThemeCustomizer";
import { CustomizerProps } from "../../../Types/Layout";
import { dynamicImage, Image } from "../../../Utils";

const CustomizerLinks: React.FC<CustomizerProps> = ({ callbackNav, selected }) => {
  
  return (
    <Nav className="flex-column" pills vertical>
      <NavLink className={selected === "sidebar-type" ? "active" : ""} onClick={() => callbackNav("sidebar-type", true)}>
        <div className="settings">
          <Image className="img-fluid" src={dynamicImage("customizer/1.png")} alt="nft" />
        </div>
        <span>{"Quick option"}</span>
      </NavLink>
      {customizerLinks.map((item) => (
        <NavLink key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
          <div>
            <Image className="img-fluid" src={dynamicImage(item.image)} alt="nft" />
          </div>
          <span>{item.title}</span>
        </NavLink>
      ))}
    </Nav>
  );
};

export default CustomizerLinks;