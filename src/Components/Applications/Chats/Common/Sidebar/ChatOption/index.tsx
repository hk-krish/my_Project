import { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Chats, Contacts } from "../../../../../../Constants";
import { ChatTabs } from "./ChatTabs";
import { ContactTabs } from "./ContactTabs";

export const ChatOption = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="advance-options">
      <Nav className="border-tab" id="chat-options-tab">
        <NavItem><NavLink className={`f-w-600 ${activeTab === "1" ? "active" : ""}`} onClick={() => setActiveTab("1")} id="chats-tab">{Chats}</NavLink></NavItem>
        <NavItem><NavLink className={`f-w-600 ${activeTab === "2" ? "active" : ""}`} onClick={() => setActiveTab("2")} id="contacts-tab">{Contacts}</NavLink></NavItem>
      </Nav>
      <TabContent activeTab={activeTab} id="chat-options-tabContent">
        <TabPane id="chats" tabId="1">
          <ChatTabs />
        </TabPane>
        <TabPane id="contacts" tabId="2">
          <ContactTabs />
        </TabPane>
      </TabContent>
    </div>
  );
};