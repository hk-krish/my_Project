import { Fragment } from 'react'
import { Container, Row } from 'reactstrap'
import { Typography, UIKits } from '../../../Constants'
import Headings from "./Headings";
import ColoredHeadings from "./ColoredHeadings";
import FontWeight from "./FontWeight";
import Listing from "./Listing";
import DisplayHeading from './DisplayHeadings';
import InlineTextElements from "./InlineTextElements";
import TextColor from "./TextColor";
import BlockQuotesCard from "./BlockQuotes";
import Breadcrumbs from '../../CoreComponents/Breadcrumbs';

const TypographyContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Typography} parent={UIKits} />
      <Container fluid>
        <Row>
          <Headings />
          <ColoredHeadings />
          <FontWeight />
          <Listing />
          <DisplayHeading />
          <InlineTextElements />
          <TextColor />
          <BlockQuotesCard />
        </Row>
      </Container>
    </Fragment>
  )
}

export default TypographyContainer