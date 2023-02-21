export default function DeleteBtn({ setData, data }) {
  const handleDelete = (e) => {
    const data1 = data.filter((temp) => temp.checked !== true);
    setData(data1);
  };
  return (
    <div>
      <button className="deleteSelectedBtn" onClick={handleDelete}>
        Delete Selected Items
      </button>
    </div>
  );
}
