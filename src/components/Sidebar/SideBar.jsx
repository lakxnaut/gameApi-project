import React, { useState } from "react";
import "./SideBar.css";
import { useDispatch } from "react-redux";
import { GamesDataAction } from "../store/GamesDataSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  // const [name, setName] = useState(null);

  function NameChangehandler(event) {
    dispatch(GamesDataAction.getFilteredData(event.target.value));
  }
  function scoreChangehandler(event) {
    dispatch(GamesDataAction.getFilterScore(event.target.value));
  }

  function selectHandler(value) {
    console.log(typeof value);
    dispatch(GamesDataAction.getSortbyValues(value));
  }
  return (
    <div className="SideBar">
      <form className="form">
        <h4>Filter Results</h4>
        <h4>Name (contains)</h4>
        <input
          type="text"
          placeholder="Text String"
          onChange={NameChangehandler}
        />
        <h4>Minimum Score</h4>
        <input type="number" placeholder="1-10" onChange={scoreChangehandler} />
        <h4>Order By</h4>
        <select
          onChange={(val) => selectHandler(val.target.value)}
          className="btn btn-sm btn-outline-secondary dropdown-toggle"
        >
          <option value="order">Order By</option>
          <option value="date">Release Date</option>
          <option value="score">Score</option>
          <option value="name">Name</option>
        </select>
        <div className="clearContainer">
          <button>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default SideBar;
