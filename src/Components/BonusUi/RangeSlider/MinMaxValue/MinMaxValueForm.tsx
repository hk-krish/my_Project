import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { Col, Form, FormGroup, Row } from "reactstrap";
import { Secondary } from "../../../../Constants";

const MinMaxValueForm = () => {
  const [values, setValues] = useState([550]);
  return (
    <Form className="theme-form form-label-align-right">
      <FormGroup>
        <Row className="py-1">
          <Col md="10">
            <div style={{ color: Secondary }} className="d-flex justify-content-center flex-wrap m-3">
              <Range
                values={values}
                step={1}
                min={100}
                max={1000}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "36px" }} className="d-flex w-100">
                    <output className="mt-2 me-2">100</output>
                    <div ref={props.ref} className="w-100 rounded-2" style={{ height: "5px", background: getTrackBackground({ values: values, colors: [Secondary, "#ccc"], min: 100, max: 1000 }), alignSelf: "center" }}>
                      {children}
                    </div>
                    <output className="mt-2 ms-2">1000</output>
                  </div>
                )}
                renderThumb={({ props, index }) => (
                  <div {...props} className="d-flex justify-content-center align-items-center rounded-5" key={index} style={{ ...props.style, height: "25px", width: "25px", border: `3px solid ${Secondary}`, backgroundColor: "#FFF", boxShadow: "0px 2px 6px #AAA" }}>
                    <div style={{ height: "20px", width: "20px", backgroundColor: "#FFF" }} className="rounded-5" />
                  </div>
                )}
              />
              <output className="mt-3" id="output">
                {values[0]}
              </output>
            </div>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default MinMaxValueForm;
