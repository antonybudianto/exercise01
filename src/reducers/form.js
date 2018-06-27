const initialState = {
  currentStep: 1,
  data: {}
}

const NEXT_STEP = 'APP/FORM/NEXT_STEP'
const PREV_STEP = 'APP/FORM/PREV_STEP'
const SAVE_INPUT = 'APP/FORM/SAVE_INPUT'

export function saveInput(data) {
  return {
    type: SAVE_INPUT,
    payload: data
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
    case SAVE_INPUT:
      return {
        ...state,
        data: {
          ...state.data,
          [state.currentStep - 1]: {
            valid: action.payload.valid,
            value: action.payload.value
          }
        }
      }
    default:
      return state
  }
}
