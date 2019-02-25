import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      maxchars: this.props.maxChars
    };
  }

  handleTweet = (event) => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.handleTweet} />
        {this.state.maxchars-this.state.tweet.length} Chars left.
      </div>
    );
  }
}

export default TwitterMessage;
