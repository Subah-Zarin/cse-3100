import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Navbar from "../components/Navbar";
import "../style/Home.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchCharacters = async () => {
      let allData = [];
      let page = 1;
      while (allData.length < currentPage * itemsPerPage) {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await res.json();
        allData = [...allData, ...data.results];
        page++;
        if (!data.info.next) break;
      }

      const sliced = allData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
      setCharacters(sliced);
      setTotalPages(Math.ceil(allData.length / itemsPerPage));
    };

    fetchCharacters();
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Navbar />
      <main className="container home-container">
        <h1 className="home-title">Rick & Morty Explorer</h1>
        <div className="row">
          {characters.map((char) => (
            <div className="col-md-4 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))}
        </div>

        <div className="pagination-container">
          <button className="btn nav-btn me-2" onClick={handlePrev} disabled={currentPage === 1}>
            ← Previous
          </button>
          <span className="page-number">Page {currentPage}</span>
          <button className="btn nav-btn ms-2" onClick={handleNext}>
            Next →
          </button>
        </div>
      </main>
    </>
  );
}
