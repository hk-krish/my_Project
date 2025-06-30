import React from 'react'
import { useAppSelector } from '../../../../ReduxToolkit/Hooks';
import ConfigDB from '../../../../Config/Theme';

const Content = () => {
    const { layoutType, sideBarIconType } = useAppSelector((state) => state.themeCustomizer);

    return (
        <pre>
            <code>
                <div>{"export const ConfigDB ="}&#123;</div>
                <div>   {"settings"}&#58; &#123;</div>
                <div>       {"layoutType"}&#58; '{layoutType}',</div>
                <div>       {"sidebar"}&#58; &#123;</div>
                <div>           {"type"}&#58; '{ConfigDB.settings.sidebar.type}',</div>
                <div>           {"iconType"}&#58; '{sideBarIconType}-icon',</div>
                <div>       &#125;</div>
                <div>   &#125;,</div>
                <div>   {"color"}&#58; &#123;</div>
                <div>       {"primaryColor"}&#58; '{ConfigDB.color.primaryColor}',</div>
                <div>       {"secondaryColor"}&#58; '{ConfigDB.color.secondaryColor}',</div>
                <div>       {"mixBackgroundLayout"}&#58; '{ConfigDB.color.mixBackgroundLayout}',</div>
                <div>   &#125;</div>
                <div>&#125;</div>
            </code>
        </pre>
    );
}

export default Content;