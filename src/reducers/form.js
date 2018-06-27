const initialState = {
  currentStep: 1
}

const FORM_NEXT_STEP = 'APP/FORM/FORM_NEXT_STEP'
const FORM_PREV_STEP = 'APP/FORM/FORM_PREV_STEP'

export function goToNext() {
  return {
    type: FORM_NEXT_STEP
  }
}

export function goToPrev() {
  return {
    type: FORM_PREV_STEP
  }
}

export function formReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1
      }
    case FORM_PREV_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1
      }
    default:
      return state
  }
}
