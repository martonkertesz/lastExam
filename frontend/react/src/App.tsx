import { useState } from "react";
import { check, signup } from "./http";

const App = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [price, setPrice] = useState(0);
  const [signupResult, setSignupResult] = useState<{
    success: boolean;
    message: string;
  }>({ success: false, message: "" });

  const handleSignup = async () => {
    const result = await signup({ id, name, pricePerNightInUSD: price });
    if (result.success) {
      setSignupResult({ success: true, message: "Signup successful!" });
    } else {
      setSignupResult({ success: false, message: "Signup failed" });
    }
  };

  const handleCheck = async () => {
    const result = await check(name);
    if (result.success) {
      if (result.data.exists) {
        setSignupResult({ success: false, message: "Name already exists" });
      } else {
        setSignupResult({ success: true, message: "Name available" });
      }
    } else {
      setSignupResult({ success: false, message: "Check failed" });
    }
  };

  return (
    <main className="flex flex-col items-center gap-10 pt-10">
    <div className="card card-body bg-base-300 max-w-[350px]">
      <h1 className="text-center font-bold text-xl pb-8">Signup Form</h1>
      <div>
        <label>Name:</label>
        <input
          type="string"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleCheck}>Check If Available</button>
      </div>
      <div>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Price per Night:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
      </div>
      <button className="btn mt-8 btn-success" onClick={handleSignup}>Signup</button>
      {signupResult.message && <p>{signupResult.message}</p>}
    </div>
    </main>
  );
};


export default App;



