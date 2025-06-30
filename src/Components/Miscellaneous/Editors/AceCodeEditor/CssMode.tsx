import { Card, CardBody, Col } from "reactstrap";
import { CSSModeHeading } from "../../../../Constants";
import { CssData } from "../../../../Data/Miscellaneous/Editor";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { Highlight, themes } from "prism-react-renderer";

const CssMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CSSModeHeading} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={CssData} language="css">
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
export default CssMode;
