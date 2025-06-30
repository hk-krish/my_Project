import { useState } from "react";
import { Href } from "../../../../Constants";
import SvgIcon from "../../../../Components/CoreComponents/SvgIcon";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { Link } from "react-router-dom";
import BookmarkBack from "./Back";
import BookmarkFront from "./Front";

const Bookmark = () => {
  const [show, setShow] = useState(false);
  const { flip } = useAppSelector((state) => state.layout);

  return (
    <li className="onhover-dropdown">
      <Link to={Href} onClick={() => setShow(!show)}>
        <SvgIcon iconId="Bookmark" />
      </Link>
      <div className={`onhover-show-div bookmark-flip ${show ? "show" : ""}`}>
        <div className="flip-card">
          <div className={`flip-card-inner ${flip ? "flipped" : ""}`}>
            <BookmarkFront />
            <BookmarkBack />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Bookmark;