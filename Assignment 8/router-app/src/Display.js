function Display({ name, branch, age, city }) {
  return (
    <div className="container">
      <h2>Student Information</h2>

      <h3>Name: {name}</h3>
      <h3>Branch: {branch}</h3>
      <h3>Age: {age}</h3>
      <h3>City: {city}</h3>
    </div>
  );
}

export default Display;