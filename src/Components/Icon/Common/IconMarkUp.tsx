import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Input, Label, Row } from "reactstrap";
import { Class, CopyText } from "../../../Constants";
import { IconMarkUpProps } from "../../../Types/Component";

const IconMarkUp: React.FC<IconMarkUpProps> = ({ icon, iconTag, iconFClass }) => {
  const featherIcons = require("feather-icons");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (iconTag.iconTag !== "" && icon.icon !== "") {
      setOpen(true);
    }
  }, [iconTag.iconTag, icon.icon]);

  const buttonClick = async () => {
    await navigator.clipboard.writeText(iconTag.iconTag);
    toast.info("Code Copied to clipboard !", { position: "bottom-right", theme: "colored" });
  };
  return (
    <div className={`icon-hover-bottom p-fixed fa-fa-icon-show-div opecity-0 ${open ? "d-block" : "d-none"}`}>
      <Container fluid>
        <Row>
          <div className="icon-popup">
            <div className="close-icon" onClick={() => setOpen(false)}>
              <i className="icofont icofont-close"></i>
            </div>
            <div className="icon-first me-2">{icon.feathericon ? <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[icon.feathericon].toSvg(icon.feathericon) }} /> : <i id="icon_main" className={icon.icon}></i>}</div>
            <div className="icon-class">
              <Label className="icon-title">{Class}</Label>
              <span id="fclass1">{iconFClass.iconFClass}</span>
            </div>
            <div className="icon-last icon-last">
              <Label className="icon-title">{"Markup"}</Label>
              <div className="form-inline">
                <div className="form-group">
                  <Input type="text" className="inp-val m-r-10" defaultValue={iconTag.iconTag} id="input_copy" />
                  <Button color="primary" className="notification" onClick={buttonClick}>
                    {CopyText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default IconMarkUp;
