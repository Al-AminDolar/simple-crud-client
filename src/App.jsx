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
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
