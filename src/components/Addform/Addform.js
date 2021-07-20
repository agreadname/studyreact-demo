import React, { Component } from "react";
class Addform extends Component {
  constructor(props) {
    super(props);
    const {defaultVal}=props
    this.state={val:defaultVal}
  }

  handleChange(e) {
    this.setState({val:e.target.value})
  } 
  render() {
     const {showAdd}=this.props
     const {val}=this.state
      if(showAdd){
        return (
            <p>
                <input onChange={(e) => { this.handleChange(e); }} value={val} />
                
            </p>
          );
      }else{
          return(<></>)
      }
    
  }
}

export default Addform;
