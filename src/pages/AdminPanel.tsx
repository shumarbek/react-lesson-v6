function AdminPanel({ setPage }: { setPage: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center w-80">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Admin panel</h1>
        <p className="text-gray-600 mb-6">Admin panelga xush kelibsiz</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl"
          onClick={() => setPage("login")}
        >
          Chiqish
        </button>
      </div>
    </div>
  );
}

export default AdminPanel;