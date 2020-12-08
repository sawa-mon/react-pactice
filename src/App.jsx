import React from "react";
import Colorful from "./components/Coloerful";

const App = () => {
  return (
    <>
      <button>ボタン</button>
      <Colorful color="pink">
        ここに売ったコメントがchildrenとして表記される
      </Colorful>
    </>
  );
};

export default App;
