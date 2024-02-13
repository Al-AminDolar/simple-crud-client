import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const addTohandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const Newuser = { name, email };
    console.log(Newuser);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(Newuser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Users Added SuccessFully");
        }
        form.reset();
      });
  };
  return (
    <>
      <h1>Simple Crud Operation</h1>

      <form onSubmit={addTohandle}>
        <input type="text" name="name" placeholder="User Name" />
        <br />
        <input type="email" name="email" id="" placeholder="User Email" />
        <br />
        <input type="submit" value="Add User" />
      </form>

      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="/users">User List</Link>
      </h2>
    </>
  );
}

export default App;
