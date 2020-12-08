import React, { useState } from "react";
import Colorful from "./components/Coloerful";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(0);

  return (
    <>
      <button onClick={onClickCountUp}>ボタン</button>
      <Colorful color="blue">{num}</Colorful>
    </>
  );
};

export default App;
