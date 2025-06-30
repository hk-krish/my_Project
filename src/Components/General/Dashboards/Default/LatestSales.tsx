import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";
import { LastOrdersOption, LatestSalesData } from "../../../../Data/General/Dashboard/Default";

const LatestSales = () => {
  const [TabList, SetTabList] = useState("Weekly");
  return (
    <Col xl="6" md="6" className="proorder-md-5">
      <Card className="latest-sales">
        <CardHeader className="d-flex justify-content-between align-items-center custom-border-bottom">
          <h4>Latest Sales</h4>
          <div className="d-flex align-items-center justify-content-center latest-sales-btn">
            {LatestSalesData.map((item, index) => (
              <Button color="primary" outline size="sm" className={`btn-square${TabList === item ? " active" : ""}`} onClick={() => SetTabList(item)} key={index}>
                {item}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardBody>
          <div id="lastOrdersChart">
            <ReactApexChart options={LastOrdersOption} series={LastOrdersOption.series} type="rangeBar" height={300} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LatestSales;
