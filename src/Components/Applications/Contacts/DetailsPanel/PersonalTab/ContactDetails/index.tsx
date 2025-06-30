import React, { useCallback, useState } from "react";
import { ContactDetailsProps } from "../../../../../../Types/Applications";
import { dynamicImage, Image } from "../../../../../../Utils";
import { Href, Print } from "../../../../../../Constants";
import PrintModal from "../../PrintModal";
import EmptyState from "../../EmptyState";
import UserActions from "./UserActions";

const ContactDetails: React.FC<ContactDetailsProps> = ({ selectedUser, userEditCallback, historyToggle }) => {

  const [printModal, setPrintModal] = useState(false);
  const toggleCallback = useCallback((toggle: boolean) => setPrintModal(toggle), []);

  return (
    <div>
      {selectedUser ? (
        <div className="profile-mail">
          <div className="d-flex">
            <Image className="img-100 img-fluid m-r-20 rounded-circle update_img_0" src={dynamicImage(`${selectedUser.avatar}`)} alt="" />
            <div className="flex-grow-1 mt-0">
              <h3>
                <span className="first_name_0 f-w-600">{selectedUser.name} </span>
                <span className="last_name_0 f-w-600">{selectedUser.surname}</span>
              </h3>
              <p className="email_add_0">{selectedUser.email}</p>
              <ul>
                <UserActions userEditCallback={userEditCallback} selectedUser={selectedUser} />
                <li><a href={Href} onClick={() => historyToggle()}>{"History"}</a></li>
                <li><a href={Href} onClick={() => setPrintModal(!printModal)}>{Print}</a></li>
              </ul>
            </div>
          </div>
          <div className="mail-general">
            <h6 className="mb-3">{"General"}</h6>
            <ul>
              <li>{"Name"} <span className="font-primary first_name_0">{selectedUser.name}</span></li>
              <li>{"Mobile No"}<span className="font-primary mobile_num_0">{selectedUser.mobile}</span></li>
              <li>{"Email Address"}<span className="font-primary email_add_0">{selectedUser.email}</span></li>
            </ul>
          </div>
        </div>
      ) : (
        <EmptyState />
      )}
      {selectedUser && <PrintModal toggleCallback={toggleCallback} printModal={printModal} selectedUser={selectedUser} />}
    </div>
  );
};
export default ContactDetails;