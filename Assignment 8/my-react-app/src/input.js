import { useState } from "react";
import { useNavigate } from "react-router";

function Input() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/display", {
      state: {
        name: name,
        email: email,
      },
    });
  };

  return (
    <div>
      <h2>Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Input;
