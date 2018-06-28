import { QUESTION_TYPE } from '../constants/question-type'

export function getQuestionResult(value, question) {
  switch (question.question_type) {
    case QUESTION_TYPE.CHECKBOX:
      return Object.keys(value)
        .map(v => question.options[v])
        .join(', ')
    default:
      return value
  }
}
