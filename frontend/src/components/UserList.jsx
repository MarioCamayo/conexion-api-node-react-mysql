import {useEffect, useState} from 'react'

export const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async ()=>{
    const response = await fetch('http://localhost:3001/users')
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }

  useEffect(()=>{
     fetchUsers()
  }, [])
  return (
    <>
    <h1>Users List</h1>
    <section>
     {
      users && users.map(user=>(
        <div key={user.id}>
          <h2>{'name: ' +user.username}</h2>
          <p>{'email: ' +user.email}</p>
        </div>
      ))
     }
    </section>
   </>
  )
}
