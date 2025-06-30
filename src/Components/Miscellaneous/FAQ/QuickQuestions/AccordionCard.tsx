import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "react-feather";
import { Button, Card, CardBody, CardHeader, Collapse } from "reactstrap";
import { AccordionCardProp } from "../../../../Types/MiscellaneousType";

const AccordionCard:React.FC<AccordionCardProp> = ({ item }) => {
  const [isActivity, setIsActivity] = useState(false);
  const handelChange = () => setIsActivity(!isActivity);

  return (
    <Card>
      <CardHeader>
        <h2 className="mb-0">
          <Button color="transparent" className="btn-link collapsed justify-content-between" onClick={handelChange}>
            <span className="d-flex align-items-center gap-2">
              <HelpCircle />
              {item.title}
            </span>
            {isActivity ? <ChevronDown className="position-relative inset-0 m-0" /> : <ChevronUp className="position-relative inset-0 m-0" />}
          </Button>
        </h2>
      </CardHeader>
      <Collapse isOpen={isActivity}>
        <CardBody>{item.paragraph}</CardBody>
      </Collapse>
    </Card>
  );
};
export default AccordionCard;
