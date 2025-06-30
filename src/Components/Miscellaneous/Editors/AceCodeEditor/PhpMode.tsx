import { Highlight, themes } from "prism-react-renderer";
import { Card, CardBody, Col } from "reactstrap";
import { PHPModeHeading } from "../../../../Constants";
import { PhpData } from "../../../../Data/Miscellaneous/Editor";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";

const PhpMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={PHPModeHeading} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={PhpData} language="php">
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </CardBody>
      </Card>
    </Col>
  );
};
export default PhpMode;
