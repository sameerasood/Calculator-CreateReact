import { Textfit } from "react-textfit";
import "./screen.css";
import "../../App";

const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;
