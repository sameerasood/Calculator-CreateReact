import Wrapper from "./components/wrapper/wrapper";
import Screen from "./components/screen/screen";
import ButtonBox from "./components/buttonBox/buttonBox";
import Button from "./components/buttons/buttons";
import TimeDate from "./components/timeDate/timeDate";

const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  return (
    <Wrapper>
      <TimeDate />
      <Screen value="0" />
      <ButtonBox>
        {buttonValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked!`);
              }}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
