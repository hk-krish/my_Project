import React from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { dynamicImage, Image } from '../../../Utils';
import { CheckAll, NotificationTitle } from '../../../Constants';
import { notifications } from '../../../Data/Layout/Header';
import { routes } from '../../../Routers/routes';
import SvgIcon from '../../../Components/CoreComponents/SvgIcon';

const Notification = () => {

    return (
        <li className="onhover-dropdown">
            <div className="notification-box"><SvgIcon iconId="Bell" /></div>
            <div className="onhover-show-div notification-dropdown">
                <h6 className="f-18 mb-0 dropdown-title">{NotificationTitle} </h6>
                <div className="notification-card">
                    <ul>
                        {notifications.map((item) => (
                            <li key={item.id}>
                                <div className="user-notification">
                                    <div>
                                        <Image src={dynamicImage(item.avatar)} alt="avatar" />
                                    </div>
                                    <div className="user-description">
                                        <Link to={routes.LetterBox}><h4>{item.text}</h4></Link>
                                        <span>{item.time}</span>
                                    </div>
                                </div>
                                <div className="notification-btn">
                                    <Button color="primary" className="btn-pill">Accpet</Button>
                                    <Button color="secondary" className="btn-pill">Decline</Button>
                                </div>
                                <div className="show-btn">
                                    <Link to={routes.Dashboard.Default}><span>Show</span></Link>
                                </div>
                            </li>
                        ))}
                        <li>
                            <Link className="f-w-700" to={routes.LetterBox}>{CheckAll}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default Notification;