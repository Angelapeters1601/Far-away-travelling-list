import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  //Here, item is a parameter for the handleAddItems function.
  //This means that whenever handleAddItems is called,
  // whatever value is passed to it will be available as
  //item inside the function.

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  //   toggles checkbox
  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  //clear list
  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items 😲?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
