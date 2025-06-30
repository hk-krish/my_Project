import React from 'react'
import { Link } from 'react-router-dom';
import { X } from 'react-feather';

import { dynamicImage, Image } from '../../../Utils';
import { routes } from '../../../Routers/routes';
import { CheckAll, MessageTitle } from '../../../Constants';
import SvgIcon from '../../../Components/CoreComponents/SvgIcon';
import { messages } from '../../../Data/Layout/Header';

const Message = () => {
    return (
        <li className="onhover-dropdown">
            <div className="message position-relative">
                <SvgIcon iconId="Message" />
                <span className="rounded-pill badge-danger"></span>
            </div>
            <div className="onhover-show-div message-dropdown">
                <h6 className="f-18 mb-0 dropdown-title">{MessageTitle}</h6>
                <ul>
                    {messages.map((item, index) => (
                        <li key={index}>
                            <div className="d-flex align-items-start">
                                <div className="message-img bg-light-primary">
                                    <Image src={dynamicImage(item.image)} />
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="mb-1">
                                        <Link to={routes.Chats.Private}>{item.title}</Link>
                                    </h5>
                                    <p>{item.text}</p>
                                </div>
                                <div className="notification-right"><X /></div>
                            </div>
                        </li>
                    ))}
                    <li><Link className="f-w-700" to={routes.Chats.Private}>{CheckAll}</Link></li>
                </ul>
            </div>
        </li>
    )
}
export default Message;