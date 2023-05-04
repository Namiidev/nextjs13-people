//We use this function to get the parameters of the page, in this case the id number
//This is also a replacement for using the getParams Hook,
//so we will not render this on the client side but on the server

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UsersPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div>
      <div>
        <img src={user.avatar} alt={user.email} />
        <div>
          <h5>{user.first_name} {user.last_name} </h5>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
