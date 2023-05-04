import React from "react";
import Users from "@/components/Users.jsx"

// Fetching data from reqres.in API for getting users informations (fake information, real API)

async function fetchUsers(pageNumber) {
  const response = await fetch(
    `https://reqres.in/api/users?page=${pageNumber}`
  );
  const data = await response.json();
  return data.data;
}
async function IndexPage() {
  const users = await fetchUsers(2);
  return (
    <div>
      <h1>Hello World!</h1>
      <Users users={users} ></Users>
    </div>
  );
}


export default IndexPage;
