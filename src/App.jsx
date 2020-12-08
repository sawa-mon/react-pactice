import React, { useEffect, useState } from "react";
import Colorful from "./components/Coloerful";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [face, setFace] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        face || setFace(true);
      } else {
        face && setFace(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <button onClick={onClickCountUp}>ボタン</button>
      <Colorful color="blue">{num}</Colorful>
      {face && <p>Yeah!!!!</p>}
    </>
  );
};

export default App;
