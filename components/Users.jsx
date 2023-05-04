"use client";
import { useRouter } from "next/navigation";

function Users({users}) {

    const router = useRouter()
  return (
    <ul className="list-group "  >
        {users.map((user) => (
          <li role='button' className="list-group-item d-flex justify-content-between align-items-center list-group-item-action " key={user.id} onClick={() => 
          router.push(`/users/${user.id}`)
          }>
            
              <h5>{user.first_name + ` ` + user.last_name}</h5>
              <img src={user.avatar} alt="" style={{borderRadius: "50%"}} />
            
          </li>
        ))}
      </ul>
  )
}

export default Users
