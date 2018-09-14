export function formatQuestion(author, question) {
  const { id, optionOne, optionTwo, timestamp, } = question;
  const { name, avatarURL, answers, questions } = author;


  return {
    name,
    id,
    answers,
    questions,
    timestamp,
    avatar: avatarURL,
    optionOne,
    optionTwo
  };
}

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
