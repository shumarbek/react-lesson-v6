function UserDashboard({ setPage }: { setPage: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center w-80">
        <h1 className="text-2xl font-bold text-yellow-600 mb-2">Foydalanuvchi paneli</h1>
        <p className="text-gray-600 mb-6">Foydalanuvchi paneliga xush kelibsiz</p>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-xl"
          onClick={() => setPage("login")}
        >
          Chiqish
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;