import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleOnChange = (event) => {
    const typedTweet = event.target.value
    this.setState({
      tweet: typedTweet
    }, () => console.log(this.state.tweet))
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleOnChange} value={this.state.tweet}/>
        <p>chars left: {this.props.maxChars - this.state.tweet.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
