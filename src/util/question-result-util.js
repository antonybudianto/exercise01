import { QUESTION_TYPE } from '../constants/question-type'

export function getQuestionResult(value, question) {
  switch (question.question_type) {
    case QUESTION_TYPE.CHECKBOX:
      return Object.keys(value).join(', ')
    default:
      return value
  }
}
