import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { OrganizationTabPaneProps } from "../../../../../Types/Applications";
import { dynamicImage, Image } from "../../../../../Utils";
import { Href, Print } from "../../../../../Constants";
import PrintModal from "../PrintModal";

const OrganizationTabs: React.FC<OrganizationTabPaneProps> = ({ user }) => {

  const [printModal, setPrintModal] = useState(false);
  const toggleCallback = useCallback((toggle: boolean) => setPrintModal(toggle), []);

  return (
    <>
      <div className="profile-mail">
        <div className="d-flex">
          <Image className="img-100 img-fluid m-r-20 rounded-circle update_img_5" src={dynamicImage(`${user.avatar}`)} alt="" />
          <div className="flex-grow-1 mt-0">
            <h3><span className="first_name_5 f-w-600">{user.name}</span></h3>
            <p className="email_add_5">{user.email}</p>
            <ul>
              <li>
                <Link to={Href} onClick={() => setPrintModal(!printModal)}>{Print}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mail-general">
          <h6>{"General"}</h6>
          <p>{"Email Address"}: <span className="font-primary email_add_5">{user.email}</span></p>
          <div className="gender">
            <h6>{"Personal"}</h6>
            <p>{"Gender"}: <span>{user.gender}</span></p>
          </div>
        </div>
      </div>
      {user && <PrintModal toggleCallback={toggleCallback} printModal={printModal} selectedUser={user} />}
    </>
  );
};
export default OrganizationTabs;