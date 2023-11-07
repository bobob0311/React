import './App.css'
import { useState } from 'react'

import AddUser from './component/Users/AddUser'
import UserList from './component/Users/UsersList'

function App() {
  const [userList, setUserList] = useState([]);
  const a = [a, b]

  const addUserHandler = (userName, userAge) => {
    setUserList((prev) => {
      return [...prev, { name: userName, age: userAge, id: Math.random().toString() }]
    });
  }


  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  )
}

export default App


function solution(players, callings) {
  var idx;
  for (let i = 0; i <= callings.length(); i++) {
    idx = players.indexOf(callings[i])
    [players[idx], players[idx - 1]] = [players[idx - 1], players[idx]]
  }
  var answer = players;
  return answer;
}