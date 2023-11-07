import Card from "../UI/Card"
import classes from "./UserList.module.css/"


export default function UserList(props) {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((users) => (
                    <li key={users.id}>
                        {users.name} ({users.age}years old)
                    </li>
                ))}
            </ul>
        </ Card>
    )
};