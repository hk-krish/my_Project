import { Link } from "react-router-dom";
import { Href, MoreComments } from "../../../../../../Constants";
import { SocialChatsData } from "../../../../../../Data/Applications/SocialApp";
import { dynamicImage, Image } from "../../../../../../Utils";

const SocialChat = () => {
  return (
    <div className="social-chat">
      {SocialChatsData.map((data, index) => (
        <div className={data.class} key={index}>
          <div className="d-flex">
            <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="user" src={dynamicImage(`user/${data.image}`)} />
            <div className="flex-grow-1">
              <span>
                {data.title}&nbsp;
                <span>
                  {data.year} <i className="fa fa-reply font-primary" />
                </span>
              </span>
              <p>{data.text}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="text-center">
        <Link to={Href}>{MoreComments}</Link>
      </div>
    </div>
  );
};

export default SocialChat;
