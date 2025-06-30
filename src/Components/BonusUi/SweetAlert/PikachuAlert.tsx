import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import { Pikachu, PikachuAlertTitle, Primary } from "../../../Constants";
import { PikachuAlertSubTitle } from "../../../Data/BonusUi/SweetAlert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const PikachuAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      text: "A wild Pikachu appeared! What do you want to do?",
      showCancelButton: true,
      cancelButtonText: "Run away!",
      cancelButtonColor: Primary,
      confirmButtonText: "Throw Pokeball!",
      denyButtonText: "Defeat",
      showDenyButton: true,
      denyButtonColor: Primary,
      confirmButtonColor: Primary,
    }).then((result) => {
      if (result.isConfirmed) Swal.fire({ icon: "success", title: "Yeah!", text: "Pikachu was caught!", confirmButtonColor: Primary });
      else if (result.dismiss) Swal.fire({ text: "Got away safely!", confirmButtonColor: Primary });
      else if (result.isDenied) Swal.fire({ text: "Pikachu fainted! You gained 500 XP!", confirmButtonColor: Primary });
    });
  };
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card>
        <CommonCardHeader title={PikachuAlertTitle} span={PikachuAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="sweet-12" onClick={handleAlert}>
            {Pikachu}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default PikachuAlert;
