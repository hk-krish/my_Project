import { Badge, FormGroup, Input, Label } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { addToFavorites, handleEnvelope, handleInterview, removeItems } from "../../../../../ReduxToolkit/Reducers/LetterBoxSlice";
import { CommonDataType } from "../../../../../Types/Applications";
import { dynamicImage, Image } from "../../../../../Utils";
import SvgIcon from "../../../../CoreComponents/SvgIcon";
import { Fragment } from "react/jsx-runtime";

const InboxEmailContent:React.FC<CommonDataType> = ({ data, ids }) => {
  const { faIcon } = useAppSelector((state) => state.letterBox);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <div className="inbox-user">
        <FormGroup check inline className="m-0">
          <Input className={`checkbox-primary`} name="emailCheckbox" id={`emailCheckbox${ids}`} type="checkbox" />
          <Label check for={`emailCheckbox${ids}`} />
        </FormGroup>
        <div onClick={() => dispatch(addToFavorites(data))}>
          <SvgIcon className={`important-mail ${data.star ? "active" : ""}`} iconId="fill-star" />
        </div>
        <div className="rounded-border">
          {data.image && <Image src={dynamicImage(`${data.image}`)} alt="user" />}
          {data.shortName && (
            <div className={data.color === "success" ? "circle-success" : ""}>
              <p className={`font-${data.color}`}>{data.shortName}</p>
            </div>
          )}
        </div>
        <p>{data.name}</p>
      </div>
      <div className="inbox-message">
        <div className="email-data" onClick={() => dispatch(handleInterview(true))}>
          <span>
            {data.message}
            <span>{data.subMessage}</span>
          </span>
          <div className="inbox-width d-flex gap-2">
            {data.badge &&
              data.badge.map((item, i) => (
                <Badge color="" className={`m-0 badge-light-${item.color} font-${item.color === "light" ? "light-dark" : item.color}`} key={i}>
                  {item.title}
                </Badge>
              ))}
          </div>
        </div>
        <div className="email-timing">
          <span>{data.time}</span>
        </div>
        <div className="email-options">
          <i className={`fa fa-envelope-${!faIcon ? "o envelope-1 " : "open-o envelope-2"}`} onClick={() => dispatch(handleEnvelope(!faIcon))} />
          <i className="fa fa-trash-o trash-3" onClick={() => dispatch(removeItems(data.id))} />
          <i className="fa fa-print" />
        </div>
      </div>
    </Fragment>
  );
};
export default InboxEmailContent;
