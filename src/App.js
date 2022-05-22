import React, { PureComponent } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import ListPage from "./components/listpage";
// import ListItem from "./components/listItemFunc";
import ItemA from "./components/hoc/itemA";
import ItemC from "./components/rp/itemC";
class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      listData: [
        {
          id: 1,
          name: "fuck machine 1",
          price: 3000,
          value: 4,
        },
        {
          id: 2,
          name: "fuck machine 2",
          price: 2000,
          value: 2,
        },
        {
          id: 3,
          name: "fuck machine 3",
          price: 1000,
          value: 1,
        },
      ],
    };

    console.log("App - constructor");
  }

  componentDidMount() {
    console.log("App - Mount");
  }
  // * 单一数据源
  handleDecrease = (id) => {
    console.log(id);
    const _data = this.state.listData.map((item) => {
      if (item.id === id) {
        const _item = { ...item };
        _item.value--;
        if (_item.value < 0) _item.value = 0;
        return _item;
      } else {
        return item;
      }
    });

    this.setState({
      listData: _data,
    });
  };

  handleIncrease = (id) => {
    const _data = this.state.listData.map((item) => {
      if (item.id === id) {
        const _item = { ...item };
        _item.value++;
        return _item;
      } else {
        return item;
      }
    });

    this.setState({
      listData: _data,
    });
  };

  // renderList() {
  //   if (this.state.listData.length === 0) {
  //     return <div className="text-center">Empty</div>;
  //   }
  //   return this.state.listData.map((item, index) => {
  //     return (
  //       <ListItem
  //         key={item.id}
  //         data={item}
  //         onDelete={this.handleDelete}
  //         onIncrease={this.handleIncrease}
  //         onDecrease={this.handleDecrease}
  //       />
  //     );
  //   });
  // }

  handleDelete = (id) => {
    const listData = this.state.listData.filter(
      (item) => item.id !== id
    );

    this.setState({
      listData,
    });
  };

  handleReset = () => {
    const _list = this.state.listData.map((item) => {
      const _item = { ...item };
      _item.value = 0;
      return _item;
    });

    this.setState({
      listData: _list,
    });
  };

  render() {
    console.log("app - render");
    return (
      <>
        <NavBar
          onReset={this.handleReset}
          total={this.state.listData.length}
        />
        <ListPage
          data={this.state.listData}
          handleDecrease={this.handleDecrease}
          handleIncrease={this.handleIncrease}
          handleDelete={this.handleDelete}
        />
        <ItemA example={"example"} />
        <ItemC />
      </>
    );
  }
}

export default App;
