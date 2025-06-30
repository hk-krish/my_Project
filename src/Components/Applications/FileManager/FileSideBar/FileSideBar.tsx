import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { FileFilter } from "../../../../Constants";
import { SideButtons } from "../../../../Data/Applications/FileManager";
import StoragePlan from "./StoragePlan";
import PricingPlans from "./PricingPlans";

const FileSideBar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <Col xl="3" className="box-col-30">
      <div className="md-sidebar">
        <Button color="primary" className="md-sidebar-toggle" onClick={() => setIsOpen(!IsOpen)}>{FileFilter}</Button>
        <div className={`md-sidebar-aside custom-scrollbar ${IsOpen ? "open" : ""}`}>
          <div className="file-sidebar">
            <Card>
              <CardBody>
                <ul>
                  {SideButtons.map((item, i) => (
                    <li key={i}>
                      <Button className={item.className} color={item.Name}>{item.icon}{item.title}</Button>
                    </li>
                  ))}
                </ul>
                <hr />
                <StoragePlan />
                <hr />
                <PricingPlans />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FileSideBar;
