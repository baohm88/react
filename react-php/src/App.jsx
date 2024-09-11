import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateUser from "./components/CreateUser";
import ListUser from "./components/ListUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="/user/create">Create User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
