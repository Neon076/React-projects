import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Items from "./components/Items";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list) {
      list = JSON.parse(localStorage.getItem("list"));
    } else {
      list = [];
    }
    return list;
  };
  const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

  const [items, setItems] = useState(defaultList);

  const setLocalStorage = (items) => {
    localStorage.setItem("list", JSON.stringify(items));
  };
  const addItems = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added to the list");
    // console.log(items);
  };
  const removeItem = (itemId) => {
    const newItem = items.filter((item) => item.id !== itemId);
    setItems(newItem);
    setLocalStorage(newItem);
    toast.success("Item Removed from the list");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <>
      <ToastContainer position='top-center' />
      <section className='section-center'>
        <Form addItems={addItems} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
    </>
  );
}

export default App;
