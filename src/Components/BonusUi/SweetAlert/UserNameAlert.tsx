import { Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import { Button} from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { Primary, UserNameAlertTitle, Username } from "../../../Constants";
import { UserNameAlertSubTitle } from "../../../Data/BonusUi/SweetAlert";

const UserNameAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      input: "text",
      inputLabel: "Please! Submit Your Username :",
      confirmButtonColor: Primary
    }).then((result) => {
      result.isConfirmed && Swal.fire({ text: `Your name is : ${result.value}`,confirmButtonColor: Primary});
    });
  };
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card>
        <CommonCardHeader title={UserNameAlertTitle} span={UserNameAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="sweet-13" onClick={handleAlert}>
            {Username}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default UserNameAlert;
