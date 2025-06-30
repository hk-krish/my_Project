import { Card, CardBody, CardFooter, Col } from "reactstrap";
import { ThemeName } from "../../../Constants";
import { InfoColorData } from "../../../Data/BonusUi/BasicCard";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { Fragment } from "react/jsx-runtime";

const InfoColorCard = () => {
  return (
    <Fragment>
      {InfoColorData.map((data, index) => (
        <Col xl="4" sm="6" key={index}>
          <Card>
            <CommonCardHeader headClass={`pb-20 ${data.headerClass}`} title={data.title} tagClass={data.headingClass} />
            <CardBody className={data.bodyClass}>
              <h3 className={`pb-2 ${data.textClass ? data.textClass : ""}`}> {data.text} </h3>
              <p className="mb-0">{data.span}</p>
            </CardBody>
            <CardFooter className={data.footerClass}>
              <h3 className={`"mb-0 text-end ${data.footerTextClass ? data.footerTextClass : ""}`}>{ThemeName}</h3>
            </CardFooter>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default InfoColorCard;
