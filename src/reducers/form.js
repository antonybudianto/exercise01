const initialState = {
  currentStep: 1,
  inputData: {},
  successData: {}
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
        successData: {
          ...state.successData,
          [state.currentStep - 1]: action.payload.valid
        },
        inputData: {
          ...state.inputData,
          [state.currentStep - 1]: action.payload.value
        }
      }
    default:
      return state
  }
}
