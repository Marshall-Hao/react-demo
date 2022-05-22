import React from "react";

const withTooptip = (Component) => {
  class HOC extends React.Component {
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
          <Component action={this.state} {...this.props} />
        </div>
      );
    }
  }

  return HOC;
};

export default withTooptip;
