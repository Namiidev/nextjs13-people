"use client";
import { useRouter } from "next/navigation";

function Users({users}) {

    const router = useRouter()
  return (
    <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => 
          router.push(`/users/${user.id}`)
          }>
            <div>
              <h5>{user.first_name + ` ` + user.last_name}</h5>
              <img src={user.avatar} alt="" />
            </div>
          </li>
        ))}
      </ul>
  )
}

export default Users
