import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      charsLeft: this.props.maxChars
    };
  }

  handleChange = event => {
    const newTweet = event.target.value
    this.setState({
      tweet: newTweet
    })
    this.handleChars()
  }

  handleChars = (props) => {
    const charLimit = this.props.maxChars
    const tweetLength = this.state.tweet.length
    const remainingChars = charLimit - tweetLength
    this.setState({
      charsLeft: remainingChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="tweet" value={this.state.tweet} onChange={this.handleChange} />
        <p>Remaining Characters: {this.state.charsLeft}</p>
      </div>
    );
  }

}

export default TwitterMessage;
