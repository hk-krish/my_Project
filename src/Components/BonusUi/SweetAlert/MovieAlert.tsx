/* eslint-disable no-throw-literal */
import { Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import { Button} from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { MovieAlertTitle, MovieMode, Primary } from "../../../Constants";
import { MovieAlertSubTitle } from "../../../Data/BonusUi/SweetAlert";

const MovieAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      text: 'Search for a movie. e.g. "Harry Potter".',
      input: "text",
      confirmButtonText: "Search!",
      confirmButtonColor: Primary
    })
      .then((name) => {
        if (!name) throw null;
        return fetch(`https://itunes.apple.com/search?term=${name.value}&entity=movie`);
      })
      .then((results) => {
        return results.json();
      })
      .then((json) => {
        const movie = json.results[0];
        if (!movie) {
          return Swal.fire({text:"No movie was found!",confirmButtonColor: Primary});
        }
        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;
        Swal.fire({
          imageUrl: imageURL,
          title: "Top result:",
          text: name,
          confirmButtonColor: Primary
        });
      })
      .catch((err) => {
        if (err) {
          Swal.fire("Oh noes!", "The AJAX request failed!", "error");
        }
      });
  };
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card>
        <CommonCardHeader title={MovieAlertTitle} span={MovieAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="sweet-15" onClick={handleAlert}>
            {MovieMode}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MovieAlert;
