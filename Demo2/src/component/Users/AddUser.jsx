import { useState, useRef } from 'react';

import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';

export default function AddUser(props) {
    const nameInputRef = useRef(); // 항상 객체 current props를 갖고있다
    const ageInputRef = useRef();


    // const [enterUserName, setEnterUserName] = useState('');
    // const [enterAge, setEnterAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'please enter a valid name and age'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'please enter a valid age (> 0)'
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setEnterAge('');
        // setEnterUserName('');
    };

    /*
        const userNameChangeHandler = (event) => {
            setEnterUserName(event.target.value)
        }
    
    
        const ageChangeHandler = (event) => {
            setEnterAge(event.target.value)
        }
    */
    const errorHandler = () => {
        setError(null)
    }


    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}


            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input
                        // value={enterUserName}
                        id="username"
                        type="text"
                        // onChange={userNameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        //  value={enterAge}
                        id="age"
                        type="number"
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )

};