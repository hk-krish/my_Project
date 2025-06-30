/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { CountdownRendererProps } from "../../Types/CommonComponents";

const CountdownData = () => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setStyle({ style: { display: "none" } });
    }, 1000);
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRendererProps) => {
    if (completed) {
      return "You are good to go!";
    } else {
      return (
        <div>
          <ul>
            <li>
              <span className="time days" id="days">{days}</span>
              <span className="title">days</span>
            </li>
            <li>
              <span className="time hours" id="hours">{hours}</span>
              <span className="title">Hours</span>
            </li>
            <li className="px-3">
              <span className="time minutes" id="minutes">{minutes}</span>
              <span className="title">Min</span>
            </li>
            <li className="px-3">
              <span className="time seconds" id="seconds">{seconds}</span>
              <span className="title">Sec</span>
            </li>
          </ul>
        </div>
      );
    }
  };
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var countdown = new Date(year, month, day + 15).getTime();

  return <Countdown date={countdown} renderer={renderer} />;
};
export default CountdownData;
