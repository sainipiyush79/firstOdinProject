import { useState } from "react";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };
  const handleRandomColor = () => {
    if (typeOfColor == "hex") {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber(16)];
      }
      setColor(hexColor);
    } else {
      setColor(
        `rgb(${getRandomNumber(256)} ${getRandomNumber(256)} ${getRandomNumber(
          256
        )})`
      );
    }
  };

  return (
    <div
      className="container"
      style={{ width: "100vw", height: "100vh", background: color }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Generate Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button onClick={handleRandomColor}>Generate Random Color</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "40px",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <h3>{typeOfColor === "hex" ? "RGB COLOR" : "HEX COLOR"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};
