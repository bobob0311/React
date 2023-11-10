import useBinput from "../hooks/use-binput";

const BasicForm = (props) => {
  const {
    enterdvalue: firstNameValue,
    valueIsValid: firstNameIsValid,
    hasError: firstNameError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    valueReset: firstNameReset
  } = useBinput(enterdvalue => enterdvalue.trim() !== '');


  const {
    enterdvalue: secondNameValue,
    valueIsValid: secondNameIsValid,
    hasError: secondNameError,
    valueChangeHandler: secondNameChangeHandler,
    valueBlurHandler: secondNameBlurHandler,
    valueReset: secondNameReset
  } = useBinput(enterdvalue => enterdvalue.trim() !== '');

  const {
    enterdvalue: emailValue,
    valueIsValid: emailIsValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    valueReset: emailReset
  } = useBinput(enterdvalue => enterdvalue.includes('@'));



  let formIsValid = false;

  if (firstNameIsValid && secondNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const firstNameclasses = firstNameError
    ? 'form-control invalid'
    : 'form-control';

  const secondNameclasses = secondNameError
    ? 'form-control invalid'
    : 'form-control';

  const emailNameclasses = emailError
    ? 'form-control invalid'
    : 'form-control';

  const formSubmissionHandler = e => {
    e.preventDefault();

    console.log(emailValue, firstNameValue, secondNameValue)
    if (!formIsValid) {
      return;
    }
    // nameInputRef.current.value = '';  => DOM을 조작하려고하면 안된다 이상적이지 않다.
    firstNameReset();
    secondNameReset();
    emailReset();

  }



  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>

        <div className={firstNameclasses}>
          <label htmlFor='name'>First Name</label>
          <input
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            type='text'
            id='name' />
          {firstNameError && <p className='error-text'>First Name이 유효하지않습니다.</p>}
        </div>

        <div className={secondNameclasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            value={secondNameValue}
            onChange={secondNameChangeHandler}
            onBlur={secondNameBlurHandler}
            type='text'
            id='name' />
          {secondNameError && <p className='error-text'>Last Name이 유효하지않습니다.</p>}
        </div>

      </div>
      <div className={emailNameclasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type='text'
          id='name' />
        {emailError && <p className='error-text'>Email이 유효하지않습니다.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form >
  );
};

export default BasicForm;
