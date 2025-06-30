import { Card, CardBody, Col } from "reactstrap";
import { FaqWidgetsData } from "../../../Data/Miscellaneous/FAQ";
import { Fragment } from "react/jsx-runtime";

const FaqWidgets = () => {
  return (
    <Fragment>
      {FaqWidgetsData.map((data) => (
        <Col xl="4" className={data.colClass} key={data.id}>
          <Card className="bg-primary">
            <CardBody>
              <div className="d-flex faq-widgets">
                <div className="flex-grow-1">
                  <h4 className="txt-light">{data.title}</h4>
                  <p>{data.paragraph}</p>
                </div>
                {data.icon}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default FaqWidgets;
