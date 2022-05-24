import { useState } from "react"
import { useDispatch } from "react-redux";
import { loginActionAsync } from "./action";

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginActionAsync(username, password));
  }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <label>
          username
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">login</button>
      </form>
    </div>
  )
}