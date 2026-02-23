import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>

        <div className="grid gap-4">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">ยินดีต้อนรับ 👋</h2>
              <p>นี่คือหน้า Home ของคุณ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
