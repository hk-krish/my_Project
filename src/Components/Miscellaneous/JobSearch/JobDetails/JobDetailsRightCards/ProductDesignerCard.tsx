import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { Button, Card, CardBody } from "reactstrap";
import { Apply, Href, JobDescription, ProductDesignerTitle, SaveThisJob, Share } from "../../../../../Constants";
import { JobDescriptionData } from "../../../../../Data/Miscellaneous/JobSearch";
import { dynamicImage, Image } from "../../../../../Utils";
import { routes } from "../../../../../Routers/routes";

const ProductDesignerCard = () => {
  return (
    <Card>
      <div className="job-search">
        <CardBody>
          <div className="d-flex">
            <Image className="img-40 img-fluid m-r-20" src={dynamicImage(`job-search/1.jpg`)} alt="" />
            <div className="flex-grow-1">
              <h6 className="f-w-600">
                <Link to={Href}>{ProductDesignerTitle}</Link>
                <span className="pull-right">
                  <Link to={routes.JobSearch.Apply}>
                    <Button color="primary">{Apply}</Button>
                  </Link>
                </span>
              </h6>
              <p>{"Endless - United States"}<span><Rating className="ms-1" fillColor={"#FFAE1A"} initialValue={Math.random() * 5} size={16} /></span></p>
            </div>
          </div>
          <div className="job-description">
            <h3>{JobDescription}</h3>
            <p>{"Endless is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. Our designers contribute to clients’ projects at all stages of development. We might start from scratch, conducting user and stakeholder interviews, making personas and journey maps, and continue on to iterating on designs and prototypes through delivering final assets for launch. We might come into the middle of an in-flight program-size project and conduct analysis and usability correction or feature enhancement. We might provide research and vision for handoff to an internal development team."}</p>
          </div>
          {JobDescriptionData.map((data) => (
            <div className="job-description" key={data.id}>
              <h3>{data.title}</h3>
              <ul>
                {data.child.map((item) => (<li key={item.id}>{item.list}</li>))}
              </ul>
            </div>
          ))}
          <div className="job-description">
            <Button color="primary" className="me-2"><span><i className="fa fa-check"></i></span>{SaveThisJob}</Button>
            <Button color="primary"><span><i className="fa fa-share-alt"></i></span>{Share}</Button>
          </div>
        </CardBody>
      </div>
    </Card>
  );
};
export default ProductDesignerCard;
