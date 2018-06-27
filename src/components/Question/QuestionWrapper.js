import React from 'react'
import { QUESTION_TYPE } from '../../constants/question-type'
import TextQuestion from './TextQuestion/TextQuestion'

const QuestionWrapper = ({ question, onChange, value }) => {
  if (question.question_type === QUESTION_TYPE.TEXT) {
    return (
      <TextQuestion value={value} onChange={onChange} question={question} />
    )
  }
  return <div>Question type is not available or invalid.</div>
}

export default QuestionWrapper
