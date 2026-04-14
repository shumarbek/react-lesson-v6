import { useState } from "react";

function LoginPage({ setPage }: { setPage: (page: string) => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "12345") {
      setPage("admin");
    } else if (username === "user" && password === "user") {
      setPage("user");
    } else {
      setError("username yoki password noto'g'ri");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-4 rounded-xl shadow-md w-80">
        <h1 className="text-2xl font-bold text-center mb-4">Kirish</h1>

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <input
          type="text"
          placeholder="Login..."
          className="w-full border rounded-xl px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Parol..."
          className="w-full border rounded-xl px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl"
          onClick={handleLogin}
        >
          Kirish
        </button>
      </div>
    </div>
  );
}

export default LoginPage;