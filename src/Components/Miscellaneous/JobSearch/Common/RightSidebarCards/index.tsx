import { Rating } from "react-simple-star-rating";
import { Fragment } from "react/jsx-runtime";
import { Badge, Card, CardBody } from "reactstrap";
import { Href } from "../../../../../Constants";
import { RightSidebarCardsData } from "../../../../../Data/Miscellaneous/JobSearch";
import { RightSidebarCardProps } from "../../../../../Types/MiscellaneousType";
import { dynamicImage, Image } from "../../../../../Utils";
import PaginationCard from "./PaginationCard";

const RightSidebarCards: React.FC<RightSidebarCardProps> = ({ startLimit,endLimit, colClass ,pagination}) => {
  return (
    <Fragment>
      {RightSidebarCardsData.slice(startLimit, endLimit).map((item, i) => (
        <div className={colClass} key={i}>
          <Card className={item.ribbon ? "ribbon-vertical-left-wrapper" : ""}>
            {item.ribbon && (
              <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary">
                <i className="icofont icofont-love"></i>
              </div>
            )}
            <div className="job-search">
              <CardBody>
                <div className="d-flex">
                  <Image className="img-40 img-fluid m-r-20" src={dynamicImage(`job-search/${item.logo}`)} alt="" />
                  <div className="flex-grow-1">
                    <h6 className="f-w-600">
                      <a href={Href}>{item.job_name}</a>
                      {item.badgeValue ? (
                        <Badge color="primary" className="pull-right">{item.type}</Badge>
                      ) : (
                        <span className="pull-right">{item.type}</span>
                      )}
                    </h6>
                    <p className="mt-0">
                      {item.job_area} <span>{item.job_city}</span>
                      <span><Rating className="ms-1" fillColor={"#FFAE1A"} initialValue={Math.random() * 5} size={16} /></span>
                    </p>
                  </div>
                </div>
                <p>{item.job_description}</p>
              </CardBody>
            </div>
          </Card>
        </div>
      ))}
      {!pagination && <PaginationCard />}
    </Fragment>
  );
};
export default RightSidebarCards;
