import React from 'react';
import QButton from './QButton';
import './AnswerFlag.css';

const AnswerFlag = ({correct, answer, onNext}) => (
  <div className='flag-answer'>
    {correct ?
      `Correct!: ${answer}` :
      `Incorrect! Correct Answer: ${answer}`}
    <QButton text="NEXT" onClick={onNext} />
  </div>
);

export default AnswerFlag;