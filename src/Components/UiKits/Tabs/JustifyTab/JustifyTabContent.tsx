import React from "react";
import { TabContent, TabPane } from "reactstrap";
import { SimpleTabContentProp } from "../../../../Types/UiKitsType";
import { dynamicImage, Image } from "../../../../Utils";
import { JustifyTabData } from "../../../../Data/UiKits/Tabs";

const JustifyTabContent: React.FC<SimpleTabContentProp> = ({ tabId }) => {
  return (
    <TabContent activeTab={tabId}>
      {JustifyTabData &&
        JustifyTabData.map((item, index) => (
          <TabPane className={`fade ${tabId === item.id ? "show" : ""}`} tabId={item.id} key={index}>
            <div className="designer-details">
              {item.data &&
                item.data.map((item, index) => (
                  <div className="designer-profile" key={index}>
                    <div className="designer-wrap">
                      <Image className="designer-img" src={dynamicImage(item.image)} alt="profile" />
                      <div className="designer-content">
                        <h6>{item.head}</h6>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPane>
        ))}
    </TabContent>
  );
};

export default JustifyTabContent;
