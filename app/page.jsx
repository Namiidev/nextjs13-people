import React from "react";
import Users from "@/components/Users.jsx"

// Fetching data from reqres.in API for getting users informations (fake information, real API)
// since the reqres.in API has 2 pages for users (and may have more pages with more users in the future)
// I created the "getUsers()" function that instead of receiving the page as a function parameter,
// the program will make loop for after getting the "totalPages" information so we will fetch both url's
// then we use the Promise.all JS to make the request for all the url's, the data.reduce will place the both requests 
// to a singular array called acc and will concat the data. 

async function getUsers() {
  const firstPageUrl = "https://reqres.in/api/users";
  const firstPageResponse = await fetch(firstPageUrl);
  const firstPageData = await firstPageResponse.json();
  const totalPages = firstPageData.total_pages;
  const requests = [];

  for (let i = 1; i <= totalPages; i++) {
    const url = `https://reqres.in/api/users?page=${i}`;
    requests.push(fetch(url));
  }

  const responses = await Promise.all(requests);
  const users = await Promise.all(
    responses.map((response) => response.json())
  ).then((data) => data.reduce((acc, { data }) => acc.concat(data), []));

  return users;
}

async function IndexPage() {
  const users = await getUsers();
  return (
    <div>
      <Users users={users} ></Users>
    </div>
  );
}


export default IndexPage;
