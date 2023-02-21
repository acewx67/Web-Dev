import { useState } from "react";
export default function EditWindow({ setOpenEditProp, setData, data, cId }) {
  const [item, setItem] = useState({
    title: "",
    quantity: "",
    key: Date.now() + "",
    checked: false,
  });
  function submit() {
    let temp = [...data];
    console.log(temp);
    let index = data.findIndex((obj) => obj.key === cId);
    console.log(temp.splice(index, 1, item));

    if (item.title === "" || item.quantity === "") {
      alert("Please enter all details");
    } else {
      temp = temp.splice(index, 1, item);
      setData(temp);
      setOpenEditProp(false);
    }
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          className="btnX"
          onClick={() => {
            setOpenEditProp(false);
          }}
        >
          X
        </button>
        <div className="modalTitle">
          <h2>Please enter the new info :</h2>
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
            Save changes
          </button>
          <button
            className="cancelBtn"
            onClick={() => {
              setOpenEditProp(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
