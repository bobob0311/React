// ref는 제출때 한번 일어나는 일
// 즉각적인 유효성 검증을 위해서는 한글자당 확인하는 것이 좋음 State

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: enteredNameIsValid,
    reset: resetName
  } = useInput(value => value.trim() !== '');


  const {
    value: enteredEmail,
    hasError: EmailInputHasError,
    valueChangeHandler: EmailChangeHandler,
    inputBlurHandler: EmailBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmail
  } = useInput(value => value.includes('@'));



  let formIsValid = false;


  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = e => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    // nameInputRef.current.value = '';  => DOM을 조작하려고하면 안된다 이상적이지 않다.
    resetName();
    resetEmail();
  }

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = EmailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className='error-text'>이름이 유효하지않습니다.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={EmailChangeHandler}
          onBlur={EmailBlurHandler}
          value={enteredEmail}
        />
        {EmailInputHasError && <p className='error-text'>이메일이 유효하지않습니다.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
