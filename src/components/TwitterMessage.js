import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      characterCounter: this.props.maxChars
    };
  }

  handleChange = event => {
    const newMessage = event.target.value;
    this.setState({
      message: newMessage
    });
    this.handleChar();
  }

  handleChar = (props) => {
    const maxChar = this.props.maxChars;
    const messageChar = this.state.message.length;
    const remainingChar = maxChar - messageChar;
    this.setState({
      characterCounter: remainingChar
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name='message' 
          value={this.state.message} 
          onChange={this.handleChange}
        />
        <p>Characters remaining: {this.state.characterCounter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
