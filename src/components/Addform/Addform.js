import React, { Component } from "react";
class Addform extends Component {
  constructor(props) {
    super(props);
    const { defaultVal } = props;
    this.state = { val: defaultVal };
  }

  handleChange(e) {
    this.setState({ val: e.target.value });
  }
  render() {
    const { showAdd } = this.props;
    const { val } = this.state;
    if (showAdd) {
      return (
        <div>
          内容：
          <input
            onChange={(e) => {
              this.handleChange(e);
            }}
            value={val}
          />
          <button
            onClick={(e) => {
              this.props.onSubmit(this.state.val);
            }}
          >
            确定
          </button>
        </div>
      );
    } else {
      return <></>;
    }
  }
}

export default Addform;
