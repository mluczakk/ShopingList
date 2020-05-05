import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddComponent from "./components/AddComponent/AddComponent";
import List from "./components/List/List";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddComponent
        handleSubmit={(item) => {
          if (items.indexOf(item) < 0) {
            setItems(items.concat(item));
          } else {
            console.log("item already added");
          }
        }}
      />
      <List
        items={items}
        handleClick={(item) => {
          setItems(items.slice().filter((i) => i !== item));
        }}
      />
    </div>
  );
}

export default App;
