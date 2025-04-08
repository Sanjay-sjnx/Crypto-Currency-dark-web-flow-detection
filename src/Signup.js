import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signup", { username, password });
      alert(response.data.message);
      if (response.data.success) history.push("/login");
    } catch (error) {
      console.error("Signup error", error);
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form>
        <label>Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
