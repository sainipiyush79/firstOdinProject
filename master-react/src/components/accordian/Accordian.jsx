import { useState } from "react";
import "./styles.css";
import data from "./data";

export const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelected, setEnableMultiSelected] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleSingleClick = (currentId) => {
    setSelected(currentId);
  };

  const handleMultipleClick = (currentId) => {
    let temp = [...multipleSelected];
    const currIdIndex = temp.indexOf(currentId);
    if (currIdIndex == -1) {
      temp.push(currentId);
    } else {
      temp.splice(currIdIndex, 1);
    }
    setMultipleSelected(temp);
  };

  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelected(!enableMultiSelected)}>
        {!enableMultiSelected
          ? "Enable multi Selection"
          : "Disable multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelected
                    ? () => handleMultipleClick(dataItem.id)
                    : () => handleSingleClick(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              {enableMultiSelected ? (
                multipleSelected.indexOf(dataItem.id) !== -1 && (
                  <div className="acc-content"> {dataItem.answer} </div>
                )
              ) : selected == dataItem.id ? (
                <div className="acc-content"> {dataItem.answer} </div>
              ) : null}
            </div>
          ))
        ) : (
          <div> Could not load Data </div>
        )}
      </div>
    </div>
  );
};
