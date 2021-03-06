import React, {Component} from 'react';
import Flags from './Flags'
import AnswerFlag from './AnswerFlag';
import './FlagImage.css';

const QuestionStates = {
  QUESTION: 1,
  ANSWER_WRONG: 2,
  ANSWER_CORRECT: 3
};


class FlagImage extends Component {
  static defaultProps = {
    options: []
  }

  constructor(props) {
    super(props);
    this.state = {
      userChoice: undefined,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({userChoice: Number(e.target.value)});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onGuess(this.state.userChoice);
  }

  render() {
    const {
      flag,
      questionState,
      options,
      answerText,
      onNext
    } = this.props;
    const {userChoice} = this.state;
    let opts = options.map(opt => ({
      ...opt,
      checked: userChoice === opt.id
    }));
    let output = questionState === QuestionStates.QUESTION ?
      (<Flags handleChange={this.handleChange}
                   handleSubmit={this.handleSubmit}
                   options={opts} />) :
      (<AnswerFlag
        correct={questionState === QuestionStates.ANSWER_CORRECT}
        answer={answerText}
        onNext={onNext} />);

    return (
      <div>
        {output}
        <img
           className="flag-img"
           src={flag}
           alt="Guess the flag"
         />
      </div>
    );
  }
}

export default FlagImage;
export { QuestionStates };