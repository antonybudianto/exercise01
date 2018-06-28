# exercise01

Bootstraped using [create-react-app](https://github.com/facebook/create-react-app)

## Custom question type
- You can create custom question type just like creating new React component
- Create the component and register it to:
  - QuestionWrapper.js (Add the switch's case)
  - question-type.js (For enum only)
- The component will receive following props
  - question => (the question object)
  - value => (the current value)
  - onChange(valid, value) => (the dispatcher to update the value)
- Make sure to implement the props.onChange on componentDidMount and your change handler
- You can custom the output of Form result on question-result-util.js file
