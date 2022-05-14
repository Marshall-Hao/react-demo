import React, { Component } from "react";
import "./App.css";
import ListItem from "./components/listItem";
// import ListItem from "./components/listItemFunc";

const listData = [
  {
    id: 1,
    name: "fuck machine 1",
    price: 3000,
    stock: 20,
  },
  {
    id: 2,
    name: "fuck machine 2",
    price: 2000,
    stock: 10,
  },
  {
    id: 3,
    name: "fuck machine 3",
    price: 1000,
    stock: 30,
  },
];

class App extends Component {
  renderList() {
    if (listData.length === 0) {
      return <div className="text-center">Empty</div>;
    }
    return listData.map((item, index) => {
      return <ListItem key={item.id} data={item} />;
    });
  }

  render() {
    return (
      <div className="container">
        <span className="title">Title</span>
        {/* 简洁  与运算符*/}
        {listData.length === 0 && (
          <div className="text-center">Empty</div>
        )}
        {this.renderList()}
      </div>
    );
  }
}

export default App;
