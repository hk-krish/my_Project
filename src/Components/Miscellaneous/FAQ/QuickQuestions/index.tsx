import { Fragment } from "react";
import { Col, Row } from "reactstrap";
import { QuickQuestionsTitle } from "../../../../Constants";
import { FaqQuestionsData } from "../../../../Data/Miscellaneous/FAQ";
import FaqRightSide from "./FaqRightSide";
import AccordionCard from "./AccordionCard";

const QuickQuestions = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <h4 className="mb-0">{QuickQuestionsTitle}</h4>
      </div>
      <Row className="default-according style-1 faq-accordion">
        <Col xl="8" lg="6" md="7" className="xl-60">
          {FaqQuestionsData.map((item, i) => (
            <Fragment key={i}>
              {item.subTitle && (
                <div className="faq-title">
                  <h4 className="mb-0">{item.subTitle}</h4>
                </div>
              )}
              {FaqQuestionsData[i].titles.map((item, id) => (
                <AccordionCard key={id} item={item} />
              ))}
            </Fragment>
          ))}
        </Col>
        <FaqRightSide />
      </Row>
    </Col>
  );
};
export default QuickQuestions;
