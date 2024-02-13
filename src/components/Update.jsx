import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const loadUser = useLoaderData();
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const UpdateUser = { name, email };
    console.log(UpdateUser);

    fetch(`http://localhost:5000/users/${loadUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User Updated successfully");
          window.location.reload();
        }
      });
  };
  return (
    <div>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h3>Update information of {loadUser.name}</h3>
      <form onSubmit={handleUpdate}>
        <input type="text" defaultValue={loadUser?.name} name="name" id="" />
        <br />
        <input type="email" defaultValue={loadUser?.email} name="email" id="" />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
