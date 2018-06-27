const initialState = {
  currentStep: 1,
  successData: {}
}

const NEXT_STEP = 'APP/FORM/NEXT_STEP'
const PREV_STEP = 'APP/FORM/PREV_STEP'
const MARK_SUCCESS = 'APP/FORM/MARK_SUCCESS'

export function markSuccess(valid) {
  return {
    type: MARK_SUCCESS,
    payload: valid
  }
}

export function goToNext() {
  return {
    type: NEXT_STEP
  }
}

export function goToPrev() {
  return {
    type: PREV_STEP
  }
}

export function formReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1
      }
    case PREV_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1
      }
    case MARK_SUCCESS:
      return {
        ...state,
        successData: {
          ...state.successData,
          [state.currentStep - 1]: action.payload
        }
      }
    default:
      return state
  }
}
