import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion, formatDate } from "../utils/helpers";

class Question extends Component {
  render() {
    const { question } = this.props;
    const { name, id, timestamp, avatar, optionOne, optionTwo } = question;
    return (
      <div className="question">
        <h3>{`${name} asks:`}</h3>
        <span>
            <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
            <h3> Would You Rather</h3>
            <div>
            {optionOne.text}
            </div>
            {optionTwo.text}
        </span>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: formatQuestion(users[question.author], question)
  };
}

export default connect(mapStateToProps)(Question);
