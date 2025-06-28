
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <Head>
        <title>TactiCore – Sunderland 4-2-3-1</title>
      </Head>
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Sunderland 2024/25 Tactical Overview</h1>
        <img src="/images/sunderland-tactic-2025.png" alt="Sunderland Tactical Graphic" className="w-full rounded-xl shadow-lg mb-6" />
        
        <section className="mb-6">
          <label className="block font-medium">Rate this tactic:</label>
          <input type="range" min="1" max="10" className="w-full" />
        </section>
        
        <section className="mb-6">
          <button onClick={() => {
            const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
            favs.push("Sunderland 4-2-3-1");
            localStorage.setItem("favorites", JSON.stringify(favs));
            alert("Tactic saved to favorites!");
          }} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save to Favorites
          </button>
        </section>
      </main>
    </div>
  );
}
