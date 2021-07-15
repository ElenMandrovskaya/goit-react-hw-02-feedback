import React, { Component } from "react";
import { Container, Notification } from "./App.styles";
import FeedbackOptions from "../FeedbackOptions";


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    totalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

};


export default App;