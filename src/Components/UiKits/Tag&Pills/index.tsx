import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { BadgesContextualTitle, BadgeTagwithIconsTitle, NumberOfBadge, NumberOfPills, PillsContextualTitle, RoundedPillswithIconsTitle, TagPills, UIKits } from "../../../Constants";
import { BadgeIconData, BadgesContextualSubTitle, BadgesData, BadgeIconSubTitle, NumberBadgeSubTitle, PillsIconSubTitle, NumberPillsSubTitle, PillsContextualSubTitle } from "../../../Data/UiKits/Tag&Pills";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import BadgeButton from "./BadgeButton";
import BadgeHeading from "./BadgeHeading";
import CommonBadges from "./CommonBadges/CommonBadges";

const TagAndPillsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={TagPills} parent={UIKits} />
      <Container fluid>
        <Row>
          <CommonBadges title={BadgesContextualTitle} span={BadgesContextualSubTitle} data={BadgesData} />
          <CommonBadges title={PillsContextualTitle} span={PillsContextualSubTitle} data={BadgesData} roundedPills />
          <CommonBadges title={NumberOfBadge} span={NumberBadgeSubTitle} data={BadgesData} number />
          <CommonBadges title={NumberOfPills} span={NumberPillsSubTitle} data={BadgesData} number className="rounded-circle badge-p-space" />
          <CommonBadges title={BadgeTagwithIconsTitle} span={BadgeIconSubTitle} data={BadgeIconData} icon />
          <CommonBadges title={RoundedPillswithIconsTitle} span={PillsIconSubTitle} data={BadgeIconData} icon className="rounded-circle p-2" />
          <BadgeHeading />
          <BadgeButton />
        </Row>
      </Container>
    </Fragment>
  );
};
export default TagAndPillsContainer;
