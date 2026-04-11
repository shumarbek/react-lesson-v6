import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import AdminPanel from "./pages/AdminPanel";
import UserDashboard from "./pages/UserDashboard";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      {page === "login" && <LoginPage setPage={setPage} />}
      {page === "admin" && <AdminPanel setPage={setPage} />}
      {page === "user" && <UserDashboard setPage={setPage} />}
    </div>
  );
}

export default App;