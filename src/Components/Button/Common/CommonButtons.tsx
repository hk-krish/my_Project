import { Button, Card, CardBody } from "reactstrap";
import { CommonButtonsInterface } from "../../../Types/Component";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const CommonButtons: React.FC<CommonButtonsInterface> = ({ commonButtonsData, title, subTitle, className, raised }) => {
  return (
    <Card>
      <CommonCardHeader title={title} span={subTitle} tag />
      <CardBody>
        <div className="btn-showcase">
          {commonButtonsData.map((data, index) => (
            <Button key={index} className={`${className ? className : ""}${raised ? ` btn-air-${data.color}` : ""}`} outline={data.outline} active={data.active} disabled={data.disabled} size={data.size ? data.size : ""} id={data.id} color={data.color}>
              {data.title}
            </Button>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default CommonButtons;