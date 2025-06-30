import { Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import { Button} from "reactstrap";
import { QuestionAlertTitle, QuestionsState } from "../../../Constants";
import { QuestionAlertSubTitle } from "../../../Data/BonusUi/SweetAlert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const QuestionAlert = () => {
  const buttonStyle = Swal.mixin({
    customClass: {
      cancelButton: "btn-primary",
    },
    buttonsStyling: true,
  });
  const handleAlert = () => {
    buttonStyle.fire({
      text: "Are you sure you want to do this?",
      showCancelButton: true,
      cancelButtonText: "Aww yiss!",
      confirmButtonText: "oh noez!",
      confirmButtonColor: "gray",
    });
  };
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card>
        <CommonCardHeader title={QuestionAlertTitle} span={QuestionAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="sweet-11" onClick={handleAlert}>
            {QuestionsState}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default QuestionAlert;
