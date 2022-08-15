import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["iteam1", "iteam2"],
      txtContent: "",
    };
  }
  txtChange = (e) => {
    this.setState({ txtContent: e.target.value });
  };
  addItem = (e) => {
    let currentTxt = this.state.txtContent;
    let currentItems = this.state.items;
    currentItems.push(currentTxt);
    this.setState({ items: currentItems });
  };
  dltItem = (k) => {
    let currentItems = this.state.items;
    currentItems.splice(k, 1);
    this.setState({ items: currentItems });
  };
  render() {
    return (
      <div className="container">
        <h1>TO DO</h1>
        <div>
          <input type="text" onChange={this.txtChange} />
          <button onClick={this.addItem}>Add</button>
        </div>

        <ul>
          {this.state.items.map((item, k) => {
            return (
              <li>
                {item}{" "}
                <button
                  onClick={() => {
                    this.dltItem(k);
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default App;
