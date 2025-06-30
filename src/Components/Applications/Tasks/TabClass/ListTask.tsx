import { useRef } from "react";
import { Printer } from "react-feather";
import { useReactToPrint } from "react-to-print";
import { Card, CardHeader } from "reactstrap";
import CreatedByMe from "./CreatedByMe";
import { CreatedByMeTitle, Href, Print } from "../../../../Constants";
import { Link } from "react-router-dom";

const ListOfTask = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({ contentRef });

  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h4 className="mb-0">{CreatedByMeTitle}</h4>
        <Link to={Href} onClick={()=>handlePrint()}>
          <Printer className="me-2" />
          {Print}
        </Link>
      </CardHeader>
      <CreatedByMe ref={contentRef} />
    </Card>
  );
};

export default ListOfTask;
