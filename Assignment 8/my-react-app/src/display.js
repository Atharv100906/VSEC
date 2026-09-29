import { useLocation } from "react-router-dom";

function Display() {
  const location = useLocation();

  const { name, email } = location.state || {};

  return (
    <div>
      <h2>Submitted Details</h2>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Display;
