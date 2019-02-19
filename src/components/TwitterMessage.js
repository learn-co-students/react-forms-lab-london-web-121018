import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      charactersLeft: this.props.maxChars,
    }
  }

  handleType = (event) => {
    this.setState({
      content: event.target.value
    })
    let remainingCharacters = this.props.maxChars - this.state.content.length
    this.setState({
      charactersLeft: remainingCharacters
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.content} onChange={event => this.handleType(event)} />
        Characters Left: {this.state.charactersLeft}
      </div>
    );
  }
}

export default TwitterMessage;
