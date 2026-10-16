import { useNavigate } from "react-router-dom";

function Input({ setName, setBranch, setAge, setCity }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Student Details</h2>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter your branch"
        onChange={(e) => setBranch(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter your age"
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter your city"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={() => navigate("/display")}>
        Next
      </button>
    </div>
  );
}

export default Input;