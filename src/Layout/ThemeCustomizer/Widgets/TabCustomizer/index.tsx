import React, { useState } from 'react'
import { CustomizerProps } from '../../../../Types/Layout';
import { Button, TabContent, TabPane } from 'reactstrap';
import Configuration from '../Configuration';
import LayoutType from './LayoutType';
import SidebarType from './SidebarType';
import SideBarIconType from './SideBarIconType';
import ColorsComponent from './ColorsComponent';
import LightLayout from './LightLayout';
import DarkLayout from './DarkLayout';
import MixLayout from './MixLayout';

const TabCustomizer: React.FC<CustomizerProps> = ({ callbackNav, selected }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }

    return (
        <TabContent activeTab={selected}>
            <div className="customizer-header">
                <i className="icofont-close icon-close" onClick={() => callbackNav("", false)}></i>
                <h5 className="f-w-700">{"Preview Options"}</h5>
                <p className="mb-0">
                    {"Try It Real Time  "}<i className="fa fa-thumbs-o-up txt-primary"/>
                </p>
                <Button color="primary" className="plus-popup mt-2" onClick={toggle}>
                    {"Configuration"}
                </Button>
                <Configuration modal={modal} toggle={toggle} />
            </div>
            <div className="customizer-body custom-scrollbar">
                <TabPane tabId="sidebar-type">
                    <LayoutType />
                    <SidebarType />
                    <SideBarIconType />
                    <ColorsComponent />
                    <LightLayout />
                    <DarkLayout />
                    <MixLayout />
                </TabPane>
            </div>
        </TabContent>
    );
};

export default TabCustomizer;