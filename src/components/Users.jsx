import { Link, useLoaderData } from "react-router-dom";

export default function Users() {
  const handleDeleteUser = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          window.location.reload();
        }
      });
  };
  const users = useLoaderData();
  return (
    <div>
      <h2>{users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name}: {user.email}{" "}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
}
