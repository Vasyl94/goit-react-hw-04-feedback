// import React, { Component } from 'react';
import { useState } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback/Feedback';
import Section from './section/Section';
import Notification from './notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    const key = e.target.name
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
    
        break;

      default:
        return;
    }
  };

 
// const countTotalFeedback = (neutral, bad, good) => {
//     return Object.values({good,neutral,bad,}).reduce((acc, item) => {
//       return acc + item;
//     }, 0);
//   }

  
  
  const countTotalFeedback = () => {
    let total = good + bad + neutral
    return total
    }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({good,neutral,bad,})}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics">
        {good === 0 && bad === 0 && neutral === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   hadleIncrement = evt => {
//     const { name } = evt.target;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     return Object.values(this.state).reduce((acc, item) => {
//       return acc + item;
//     }, 0);
//   }

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     return Math.round((good / this.countTotalFeedback()) * 100);
//   }

//   render() {
//     const { good, bad, neutral } = this.state;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(good,bad,neutral)}
//             onLeaveFeedback={this.hadleIncrement}
//           />
//         </Section>

//         <Section title="Statistics">
//           {good === 0 && bad === 0 && neutral === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
