import React from 'react'
import { QUESTION_TYPE } from '../../constants/question-type'
import TextQuestion from './TextQuestion/TextQuestion'
import CheckboxQuestion from './CheckboxQuestion/CheckboxQuestion'

const QuestionWrapper = ({ question, onChange, value }) => {
  let QuestionClass
  switch (question.question_type) {
    case QUESTION_TYPE.TEXT:
      QuestionClass = TextQuestion
      break
    case QUESTION_TYPE.CHECKBOX:
      QuestionClass = CheckboxQuestion
      break
    default:
      QuestionClass = null
  }
  if (QuestionClass === null) {
    return <div>Question type is not available or invalid.</div>
  }
  return (
    <div>
      <h3>{question.prompt}</h3>
      <div
        style={{
          paddingBottom: '10px'
        }}
      >
        {question.is_required ? '*Required!' : '(optional)'}
      </div>
      <QuestionClass value={value} onChange={onChange} question={question} />
    </div>
  )
}

export default QuestionWrapper
