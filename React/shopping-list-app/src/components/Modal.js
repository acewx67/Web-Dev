import { useState } from "react";

export default function Modal({ setOpenModalProp, setData, data }) {
  console.log("props", data);
  const [item, setItem] = useState({
    title: "",
    quantity: "",
    key:Date.now()+"",
    checked : false
  });
  function submit() {
    if(item.title === "" || item.quantity === "") {
      alert("Please enter all details");
    }
    else{
      //adding a random key value to the item
      setItem(
        {
        ...item,
        key:Date.now()+""
        }
      );
      //pushing the item into the data array
      setData([...data,item]);
    }
    
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
