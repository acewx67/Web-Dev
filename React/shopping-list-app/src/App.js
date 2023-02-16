import "./App.css";
import Card from "./components/Card";
import CreateButton from "./components/CreateButton";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <link rel="stylesheet" href="index.css" />
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
        <div className="list">
          {data.map((each) => {
            return (
              <Card
                title={each.title}
                qty={each.quantity}
                uid={each.key}
                setData={setData}
                data={data}
              ></Card>
            );
          })
          }
          {data.length <= 0 && <h3>Grocery list is empty..</h3>}
        </div>
      </div>
    </>
  );
}

export default App;
