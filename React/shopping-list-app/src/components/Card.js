import React from "react";

function Card({
  title,
  qty,
  uid,
  setData,
  data,
  status,
  setOpenModalProp,
  setOpenEditProp,
  cardId,
}) {
  function removeFunc() {
    let temp = [...data];
    temp.map((obj, i) => {
      if (obj.key === uid) {
        temp.splice(i, 1);
      }
    });
    setData(temp);
  }

  function handleCheck(e) {
    let temp = [...data];
    temp.map((obj) => {
      if (obj.key === uid) {
        obj.checked = obj.checked ? false : true;
      }
    });
    setData(temp);
  }
  function handleEdit() {
    //close modal
    console.log(uid, "inside card");
    cardId(uid);
    setOpenModalProp(false);
    //open edit modal
    setOpenEditProp(true);
  }
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="qty">Quantity : {qty}</div>
      <div className="buttons">
        <div className="editButton">
          <div onClick={handleEdit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 100 100"
            >
              <circle cx="75.5" cy="27.5" r="8.5" fill="#4b4dff"></circle>
              <path
                fill="#4343bf"
                d="M75.5,39c-6.341,0-1.622-1.271-1.622-7.612c0-3.729-8.076-10.925-5.316-13.028 C70.495,16.888,72.889,16,75.5,16C81.841,16,87,21.159,87,27.5c0,2.708-0.733,5.493-2.514,7.274C84.114,35.146,79.132,39,75.5,39z M75.5,22c-3.032,0-5.5,2.468-5.5,5.5s2.468,5.5,5.5,5.5s5.5-2.468,5.5-5.5S78.532,22,75.5,22z"
              ></path>
              <rect
                width="13.435"
                height="59"
                x="43.282"
                y="20.5"
                fill="#4b4dff"
                transform="rotate(45.001 50 50)"
              ></rect>
              <path
                fill="#4343bf"
                d="M36.967,82.032L19.998,66.071L68.49,18.42l15.17,16.306L36.967,82.032z M28.646,65.968l8.164,7.682 l38.551-39.057l-7.118-7.687L28.646,65.968z"
              ></path>
              <polygon
                fill="#3abcf8"
                points="40.992,77.954 33.983,70.946 70.327,34.602 61.342,25.412 68.49,18.42 84.486,34.774"
              ></polygon>
              <polygon fill="#ff8405" points="20,66 20,82 37,82"></polygon>
            </svg>
          </div>
        </div>

        <label className="cl-checkbox">
          <input type="checkbox" checked={status} onChange={handleCheck} />
          <span></span>
        </label>

        <div className="deleteButton" onClick={removeFunc}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="45"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Card;
