import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { dynamicImage, Image } from "../../../../Utils";
import { routes } from "../../../../Routers/routes";
import { GoPremium } from "../../../../Constants";
import { useState } from "react";
import QRCode from "react-qr-code";

const PremiumCoursesCard = () => {
  // npm i react-qr-code
  // Parameters Explained:
  // pa = UPI ID (VPA)

  // pn = Payee Name

  // am = Amount (optional)

  // cu = Currency (INR)
  const [upiId, setUpiId] = useState("krishgediya144@oksbi");
  const [name, setName] = useState("krish");
  const [amount, setAmount] = useState("");

  const upiURI = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}${amount ? `&am=${amount}` : ""}&cu=INR`;

  return (
    <Col xl="6" className="box-col-7 proorder-md-1">
      <Card>
        <CardBody className="premium-card">
          <Row className="premium-courses-card">
            <div style={{ padding: "20px", fontFamily: "Arial" }}>
              <h3>Dynamic UPI QR Code Generator</h3>

              <div style={{ marginBottom: "10px" }}>
                <input type="text" placeholder="Enter UPI ID (e.g. yourid@upi)" value={upiId} onChange={(e) => setUpiId(e.target.value)} style={{ padding: "8px", width: "300px" }} />
              </div>

              <div style={{ marginBottom: "10px" }}>
                <input type="text" placeholder="Enter Payee Name" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: "8px", width: "300px" }} />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <input type="number" placeholder="Enter Amount (optional)" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ padding: "8px", width: "300px" }} />
              </div>

              <QRCode value={upiURI} />

              <p style={{ marginTop: "20px", fontSize: "14px", color: "gray" }}>
                UPI URI: <br />
                <code>{upiURI}</code>
              </p>
            </div>
            {/* <Col md="5" className="premium-course">
              <h1 className="f-w-700">{"Get Thousands Premium Courses."}</h1>
              <span className="f-light f-w-400 f-14">{"Upgrade to watch, play, learn, make and discover. "}</span>
              <Button tag="a" color="primary" className="btn-square f-w-700" href={routes.ECommerce.Pricing}>
                {GoPremium}
              </Button>
            </Col> */}
            {/* <Col md="7" className="premium-course-img">
              <div className="premium-message">
                <Image className="img-fluid" src={dynamicImage("dashboard/massage.gif")} alt="massage" />
              </div>
              <div className="premium-books">
                <Image className="img-fluid" src={dynamicImage("dashboard/books.gif")} alt="books" />
              </div>
            </Col> */}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PremiumCoursesCard;
