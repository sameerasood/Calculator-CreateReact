import { Textfit } from "react-textfit";
import "./timeDate.css";

const TimeDate = () => {
  const currentTime = new Date().toLocaleTimeString();
  return <Textfit className="timeDate">{currentTime}</Textfit>;
};

export default TimeDate;
