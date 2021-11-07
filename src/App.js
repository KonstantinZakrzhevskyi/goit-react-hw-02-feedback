import React, {Component} from "react";
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notifivation';

import './App.css'

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleBtnClick = (option) => {
    this.setState(prevState => ({
     [option]: prevState[option] + 1
    }))
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

 countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

  return (
    <>
      <Section title ={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleBtnClick}
        />
      </Section>
      <Section title ={'Statistics'}>
      {this.countTotalFeedback() ? (
        <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}/>
      ) : (
          <Notification message = "No feedback given"></Notification>
        )}
      </Section>
  </>
  )
};
};

export default App;
