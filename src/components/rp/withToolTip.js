import React from "react";

class WithTooptip extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    showToolTip: false,
    content: "",
  };

  handleOver = (ev) =>
    this.setState({
      showToolTip: true,
      content: ev.target.innerText,
    });

  handleOut = () =>
    this.setState({ showToolTip: false, content: "" });

  render() {
    return (
      <div
        onMouseOver={this.handleOver}
        onMouseOut={this.handleOut}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default WithTooptip;
