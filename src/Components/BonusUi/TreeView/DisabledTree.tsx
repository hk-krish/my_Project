import { Card, CardBody } from "reactstrap";
import { handleTreeViewCheckChange, processTreeViewItems, TreeView, TreeViewCheckDescriptor, TreeViewExpandChangeEvent } from "@progress/kendo-react-treeview";
import { useState } from "react";
import { DisabledTreesTitle } from "../../../Constants";
import { BasicTreeSubTitle, DisabledTreeViewList } from "../../../Data/BonusUi/TreeView";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const DisabledTree = () => {
  const checkField = "checked";

  type TreeState = {
    check: TreeViewCheckDescriptor;
    items: typeof DisabledTreeViewList;
  };

  const [treeState, setTreeState] = useState<TreeState>({
    check: { idField: "text", applyCheckIndeterminate: true, ids: [] },
    items: DisabledTreeViewList,
  });

  const onCheckChange = (event: any) => {
    const settings = { checkChildren: true, checkParents: true };
    const newCheck = handleTreeViewCheckChange(event, treeState.check, treeState.items, settings) as TreeViewCheckDescriptor;
    setTreeState((prevState) => ({
      ...prevState,
      check: { ...prevState.check, ...newCheck },
    }));
  };

  const onExpandChange = (event: TreeViewExpandChangeEvent) => {
    event.item.expanded = !event.item.expanded;
    setTreeState((prevState) => ({
      ...prevState,
      items: [...prevState.items],
    }));
  };

  return (
    <Card>
      <CommonCardHeader title={DisabledTreesTitle} span={BasicTreeSubTitle} />
      <CardBody>
        <div className="disabled-container">
          <div className="checkbox">
            <TreeView
              data={processTreeViewItems(treeState.items, {
                check: treeState.check,
              })}
              checkField={checkField}
              checkboxes={true}
              onCheckChange={onCheckChange}
              expandIcons={true}
              onExpandChange={onExpandChange}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default DisabledTree;
