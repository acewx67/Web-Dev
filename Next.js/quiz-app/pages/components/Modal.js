import React from 'react'

function Modal(props) {

  return (
    <div className="modalWrapper">
      <div className="modal">
        <div
          className="closeBtn"
          onClick={() => {
            console.log(props);
            props.setMarks(0)
            props.setOptions({})
            props.setShow(false)
            
          }}
        >
          X
        </div>
        <div className="text">
        <h2>Results : </h2>
        <h3>{`${props.marks}/10`}</h3>
        </div>
        
      </div>
    </div>
  );
}

export default Modal
