
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import UserDetail from './UserDetail';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/user-detail">User Detail</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/user-detail" element={<UserDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
