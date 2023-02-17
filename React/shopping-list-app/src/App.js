import "./App.css";
import Card from "./components/Card";
import CreateButton from "./components/CreateButton";
import Modal from "./components/Modal";
import { useState } from "react";
import DeleteBtn from "./components/DeleteBtn";
import EditWindow from "./components/EditWindowModal";
import './index.css';

let cId;
function cardId(id){
  console.log(id);
  cId = id;
}

function App() {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <>
      <div className="wrapper">
        <h1>Grocery Shopping List</h1>
        <CreateButton
          onClick={() => {
            setOpenModal(true);
          }}
        />
        {openModal && (
          <Modal
            setOpenModalProp={setOpenModal}
            setData={setData}
            data={data}
          />
        )}
        {openEdit && (
          <EditWindow
          cId={cId}
          setOpenEditProp={setOpenEdit}
          setData={setData}
          data={data}
          />
        )}
        <div className="list">
          {data.map((each,index) => {
            return (
              <Card
                cardId={cardId}
                title={each.title}
                qty={each.quantity}
                uid={each.key}
                setData={setData}
                data={data}
                status={each.checked}
                setOpenModalProp={setOpenModal}
                setOpenEditProp={setOpenEdit}
              ></Card>
            );
          })
          }
          {data.length <= 0 && <h3>Grocery list is empty..</h3>}
        </div>
        <DeleteBtn setData={setData} data={data}/>
      </div>
    </>
  );
}

export default App;
