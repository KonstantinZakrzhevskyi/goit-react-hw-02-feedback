// import { render } from "node-sass";
import React, {Component} from "react";
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notifivation/Notfication";

// import './App.css';

class App extends Component {
//   static defaultProps = {
//     initialValue: 0,
// }

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

 handleFeetbackGood = () => {
    this.setState(prevState => ({
        good: prevState.good + 1,
    }));
  };

  handleFeetbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleFeetbackBad = () => {
    this.setState(prevState => ({
     bad: prevState.bad + 1,
   }))
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

 positiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
  return (
    <>
    <h2>Please leave feedback</h2>

    <FeedbackOptions
          onFeetbackGood={this.handleFeetbackGood}
          onFeetbackNeutral={this.handleFeetbackNeutral}
          onFeetbackBad={this.handleFeetbackBad} />

      {this.countTotalFeedback() ? (
        <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.positiveFeedbackPercentage()}/>
      ) : (
          <Notification message = "No feedback given"></Notification>
      )}
  </>
  )
};
  
};

export default App;
