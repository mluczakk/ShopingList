import React, { useState } from "react";
import style from "./List_Item.module.css";
import { FaRegCheckSquare, FaRegWindowClose } from "react-icons/fa";

const ListItem = (props) => {
  const [bought, setBought] = useState(false);

  return (
    <div className={style.wrapper}>
      <div className={style.Line}>
        <FaRegCheckSquare
          className={bought ? style.checkedIcon : style.checkIcon}
          onClick={() => setBought(!bought)}
        />
        <li className={bought ? style.itemBought : style.item}>{props.name}</li>
        <FaRegWindowClose
          className={style.closeIcon}
          onClick={() => props.handleClick(props.name)}
        />
      </div>
    </div>
  );
};
export default ListItem;
