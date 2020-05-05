import React from "react";
import ListItem from "../ListItem/ListItem";

const List = (props) => {
  const items = props.items.map((item, i) => (
    <ListItem key={item} name={item} handleClick={props.handleClick} />
  ));

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default List;
