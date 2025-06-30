import React from 'react'
import { useAppDispatch } from '../../../ReduxToolkit/Hooks';
import { addSideBarBackGround } from '../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers';
import ConfigDB from '../../../Config/Theme';
import SvgIcon from '../../../Components/CoreComponents/SvgIcon';

const Mode = () => {
    const dispatch = useAppDispatch();
    const darkModeHandler = (data: string) => dispatch(addSideBarBackGround(data));

    return (
        <li onClick={() => darkModeHandler(ConfigDB.color.mixBackgroundLayout !== "light" ? "light" : "dark-only")}>
            <div className={`mode ${ConfigDB.color.mixBackgroundLayout !== "light" ? "active" : ""}`}>
                <SvgIcon className="for-dark" iconId="moon" />
                <SvgIcon className="for-light" iconId="Sun" />
            </div>
        </li>
    );
};
export default Mode