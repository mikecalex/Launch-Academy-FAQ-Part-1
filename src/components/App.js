import React, { Component } from 'react';
import QuestionList from './QuestionList'
import '../stylesheets/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    }
    this.newId = this.newId.bind(this)
  }

  newId(id) {
    if (id != this.state.selectedId) {
      this.setState({ selectedId: id })
    } else {
      this.setState({ selectedId: null })
    }
  }

  render() {

    let questions = this.props.data.map(qs => {
      let button;
      let answer;
      if (qs.id === this.state.selectedId) {
        button = "fa fa-minus-square toggleMinus"
        answer = qs.answer
      } else {
        button = "fa fa-plus-square togglePlus"
        answer = null
      }


      return(
        <QuestionList
          key={qs.id}
          id={qs.id}
          question={qs.question}
          answer={answer}
          button={button}
          setSelectedQuestion={this.newId}
          selectedId={this.state.selectedId}
        />
      )
    })

    return(
      <div className="page">
        <h1>We're Here to Help</h1>
        <ul>
          {questions}
        </ul>
      </div>
    )
  }
}
export default App;
