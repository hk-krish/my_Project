import { TabContent } from "reactstrap";
import { Business, Holidays, Important, Newsletter, Notification, Organization, SharedWithMe } from "../../../../Constants";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import TabCard from "./Common/TabCard";
import Favorites from "./Favorites";
import MyBookmark from "./MyBookmark";
import Created from "./Created";
import EditBookmark from "../Modal/EditBookmark";

const Tabs = () => {
  const { activeTabs } = useAppSelector((state) => state.bookmarkTab);

  return (
    <TabContent activeTab={activeTabs}>
      <Created />
      <Favorites />
      <TabCard tabId="3" title={SharedWithMe} />
      <MyBookmark />
      <TabCard tabId="5" title={Notification} />
      <TabCard tabId="6" title={Newsletter} />
      <TabCard tabId="7" title={Business} />
      <TabCard tabId="8" title={Holidays} />
      <TabCard tabId="9" title={Important} />
      <TabCard tabId="10" title={Organization} />
      <EditBookmark />
    </TabContent>
  );
};
export default Tabs;
