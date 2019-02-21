import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }

  handleTweet = (e) =>{
      this.setState({
        tweet: e.target.value
      })
  }
    

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={e => this.handleTweet(e)}/>
        <p>{this.props.maxChars - this.state.tweet.length} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
