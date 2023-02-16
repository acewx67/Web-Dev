import { useState } from "react";

export default function Modal({ setOpenModalProp, setData, data }) {
  console.log("props", data);
  const [item, setItem] = useState({
    title: "",
    quantity: "",
    key: "1",
  });
  function submit() {
    setItem((item) => ({
      ...item,
      key: Math.random().toString(16).slice(2) + "",
    }));
    let dt = [...data];
    dt.push(item);
    setData(dt);
    console.log(item);
    return item;
  }

  // console.log(submit());
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          className="btnX"
          onClick={() => {
            setOpenModalProp(false);
          }}
        >
          X
        </button>
        <div className="modalTitle">
          <h2>Please enter all the details :</h2>
        </div>
        <div className="modalBody">
          <form className="itemDetails">
            <div className="itemName">
              <label>Name of the item: </label>
              <input
                type="text"
                onChange={(e) => {
                  setItem(() => ({
                    ...item,
                    title: e.target.value,
                  }));
                }}
              ></input>
            </div>
            <div className="quantity">
              <label>Quantity: </label>
              <input
                type="text"
                onChange={(e) => {
                  setItem(() => ({
                    ...item,
                    quantity: e.target.value,
                  }));
                }}
              ></input>
            </div>
          </form>
        </div>
        <div className="modalFooter">
          <button className="submitBtn" onClick={submit}>
            Submit
          </button>
          <button
            className="cancelBtn"
            onClick={() => {
              setOpenModalProp(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
