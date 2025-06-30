import { Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href, Next, Previous } from "../../../../../Constants";

const PaginationCard = () => {
  return (
    <Col sm="12">
      <div className="job-pagination pagin-border-primary justify-content-center pagination-primary pagination">
        <Pagination color="primary">
          <PaginationItem disabled>
            <PaginationLink href={Href} previous>{Previous}</PaginationLink>
          </PaginationItem>
          <PaginationItem active> 
            <PaginationLink href={Href}>{"1"}</PaginationLink>
          </PaginationItem>
          <PaginationItem> 
            <PaginationLink href={Href}>{"2"}</PaginationLink>
          </PaginationItem>
          <PaginationItem>  
            <PaginationLink href={Href}>{"3"}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={Href} next>{Next}</PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    </Col>
  );
};
export default PaginationCard