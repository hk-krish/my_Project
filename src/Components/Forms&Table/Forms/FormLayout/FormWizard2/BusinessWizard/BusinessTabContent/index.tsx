import React from "react";
import { TabContent, TabPane } from "reactstrap";
import { VerticalWizardNavProps } from "../../../../../../../Types/FormsType";
import FinishForm from "../../../Common/FinishForm";
import BusinessSettingsForm from "./BusinessSettingsForm";
import ChooseAccount from "./ChooseAccount";
import ContactDetailsForm from "./ContactDetailsForm";
import PayDetailsForm from "./PayDetailsForm";

const BusinessTabContent: React.FC<VerticalWizardNavProps> = ({ steps, activeCallBack }) => {
  return (
    <TabContent className="dark-field" activeTab={steps}>
      <TabPane tabId={1}>
        <ChooseAccount activeCallBack={activeCallBack} />
      </TabPane>
      <TabPane tabId={2}>
        <BusinessSettingsForm activeCallBack={activeCallBack} />
      </TabPane>
      <TabPane tabId={3}>
        <ContactDetailsForm activeCallBack={activeCallBack} />
      </TabPane>
      <TabPane tabId={4}>
        <PayDetailsForm activeCallBack={activeCallBack} />
      </TabPane>
      <TabPane tabId={5}>
        <FinishForm />
      </TabPane>
    </TabContent>
  );
};

export default BusinessTabContent;
