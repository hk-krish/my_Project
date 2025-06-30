import { SvgProps } from "../../Types/CommonComponents";

const SvgIcon: React.FC<SvgProps> = (props) => {
  return (
    <svg className={props.className} style={props.style} onClick={props.onClick}>
      <use href={`${process.env.PUBLIC_URL}/assets/svg/icon-sprite.svg#${props.iconId}`}></use>
    </svg>
  );
};
export default SvgIcon;
