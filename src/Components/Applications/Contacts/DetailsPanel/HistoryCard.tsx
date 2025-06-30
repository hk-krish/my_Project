import { Href } from "../../../../Constants";
import { HistoryCardProps } from "../../../../Types/Applications";

const HistoryCard: React.FC<HistoryCardProps> = ({ historyToggle, showHistory }) => {
  return (
    <div className={showHistory ? "show" : ""} id="right-history">
      <div className="modal-header p-20">
        <h4 className="modal-title w-100">
          Contact History
          <span className="pull-right">
            <a className="close-history" href={Href} onClick={historyToggle}>
              <i className="icofont icofont-close" />
            </a>
          </span>
        </h4>
      </div>
      <div className="history-details">
        <div className="text-center">
          <i className="icofont icofont-ui-edit"></i>
          <p className="mb-0">{"Contact has not been modified yet."}</p>
        </div>
        <div className="d-flex">
          <i className="icofont icofont-star me-3"></i>
          <div className="flex-grow-1 mt-0">
            <h3 className="mt-0">{"Contact Created"}</h3>
            <p className="mb-0">{"Contact is created via mail"}</p>
            <span className="f-12">{"Sep 10, 2024 4:00"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HistoryCard;
