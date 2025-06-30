import { TabContent, TabPane } from "reactstrap";
import { VerticalWizardNavProps } from "../../../../../../../Types/FormsType";
import FinishForm from "../../../Common/FinishForm";
import BankInfoForm from "./BankInfoForm";
import InquiresForm from "./InquiresForm";
import PersonalInfoForm from "./PersonalInfoForm";

const CustomTabContent: React.FC<VerticalWizardNavProps> = ({ steps, activeCallBack ,differentId}) => {
  return (
    <TabContent className="dark-field" activeTab={steps}>
      <TabPane tabId={1}>
        <PersonalInfoForm activeCallBack={activeCallBack} />
      </TabPane>
      <TabPane tabId={2}>
        <BankInfoForm activeCallBack={activeCallBack} />
      </TabPane>
      <TabPane tabId={3}>
        <InquiresForm activeCallBack={activeCallBack} differentId={differentId}/>
      </TabPane>
      <TabPane tabId={4}>
        <FinishForm />
      </TabPane>
    </TabContent>
  );
};
export default CustomTabContent;
