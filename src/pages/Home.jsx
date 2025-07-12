import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import StatusDropdown from "../components/StatusDropdown";
import "../style/Home.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const query = new URLSearchParams({
        name: searchTerm,
        status: status,
        page: page,
      });

      const res = await fetch(`https://rickandmortyapi.com/api/character?${query.toString()}`);
      const data = await res.json();
      if (data.error) {
        setCharacters([]);
        setInfo(null);
      } else {
        setCharacters(data.results);
        setInfo(data.info);
      }
    };

    fetchCharacters();
  }, [searchTerm, status, page]);

  const handleNext = () => {
    if (info?.next) setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (info?.prev) setPage((prev) => prev - 1);
  };

  return (
    <>
      <Navbar />
      <main className="container home-container">
        <h1 className="home-title">Rick & Morty Explorer</h1>

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-md-6">
            <SearchBox value={searchTerm} onChange={setSearchTerm} />
          </div>
          <div className="col-md-6">
            <StatusDropdown value={status} onChange={setStatus} />
          </div>
        </div>

        {/* Character Cards */}
        <div className="row">
          {characters.map((char) => (
            <div className="col-md-4 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {info && (
          <div className="pagination-container">
            <button className="btn nav-btn me-2" onClick={handlePrev} disabled={!info?.prev}>
              ← Previous
            </button>
            <span className="page-number">Page {page}</span>
            <button className="btn nav-btn ms-2" onClick={handleNext} disabled={!info?.next}>
              Next →
            </button>
          </div>
        )}
      </main>
    </>
  );
}
