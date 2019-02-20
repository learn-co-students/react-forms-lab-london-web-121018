import React from "react";


class TwitterMessage extends React.Component {

  constructor() {
    super();
    this.state = {
     
      message: ''
    };
  }

  handleChange = (input) => {
    this.setState({
      message: input
    })
  }

  render() {
    return (
      <div>
        <p> You have {this.props.maxChars-this.state.message.length} characters left</p>
        <strong>Your message:</strong>
        {/* <p>You have {(this.props.maxChars- this.state.message.length)} characters left</p> */}
        <input type="text" name="message" value={this.state.message} onChange={event => this.handleChange(event.target.value)} />
      </div>
    );
  }
}

export default TwitterMessage;
