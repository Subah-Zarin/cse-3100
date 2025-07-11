import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Navbar from "../components/Navbar";
import "../style/Home.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await res.json();
      setCharacters(data.results);
      setInfo(data.info);
      setLoading(false);
    };

    fetchCharacters();
  }, [page]);

  const handleNext = () => {
    if (info?.next) setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (info?.prev) setPage((prev) => prev - 1);
  };

  return (
    <>
      <Navbar />
      <main className="home-container container">
        <h1 className="home-title">Rick & Morty Explorer</h1>

        {loading ? (
          <p className="loading-text">Loading characters...</p>
        ) : (
          <>
            <div className="row">
              {characters.map((char) => (
                <div className="col-lg-4 col-md-6 mb-4" key={char.id}>
                  <CharacterCard character={char} />
                </div>
              ))}
            </div>

            <div className="pagination-container">
              <button
                className="btn nav-btn"
                onClick={handlePrev}
                disabled={!info?.prev}
              >
                ← Previous
              </button>

              <span className="page-number">Page {page}</span>

              <button
                className="btn nav-btn"
                onClick={handleNext}
                disabled={!info?.next}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
