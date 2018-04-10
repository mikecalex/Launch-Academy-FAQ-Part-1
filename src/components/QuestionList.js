import React from 'react';
import '../stylesheets/Tab.scss';

const QuestionList = (props) => {

  let handleClick = () => {
    props.setSelectedQuestion(props.id)
  }

  return(
    <div className="Question">
      <i onClick={handleClick} className={props.button} id='icon' aria-hidden="true"></i>
      <h5>{props.question}</h5>
      <p>{props.answer}</p>
      {<hr/>}
    </div>
  )
}
export default QuestionList;
