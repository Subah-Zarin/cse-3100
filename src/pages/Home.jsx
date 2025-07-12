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
  const [apiPage, setApiPage] = useState(1);
  const [uiPage, setUiPage] = useState(1);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const query = new URLSearchParams({
        name: searchTerm,
        status: status,
        page: apiPage,
      });

      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character?${query.toString()}`);
        const data = await res.json();
        if (data.error) {
          setCharacters([]);
          setInfo(null);
        } else {
          setCharacters(data.results);
          setInfo(data.info);
        }
      } catch {
        setCharacters([]);
        setInfo(null);
      }
    };

    fetchCharacters();
  }, [searchTerm, status, apiPage]);

  const charactersPerUiPage = 10;
  const totalUiPagesForApiPage = Math.ceil((characters?.length || 0) / charactersPerUiPage);

  const displayCharacters = characters.slice(
    (uiPage - 1) * charactersPerUiPage,
    uiPage * charactersPerUiPage
  );

  const handleNext = () => {
    if (uiPage < totalUiPagesForApiPage) {
      setUiPage(uiPage + 1);
    } else if (info?.next) {
      setApiPage(apiPage + 1);
      setUiPage(1);
    }
  };

  const handlePrev = () => {
    if (uiPage > 1) {
      setUiPage(uiPage - 1);
    } else if (apiPage > 1) {
      setApiPage(apiPage - 1);
      setUiPage(2);
    }
  };

  return (
    <>
      <Navbar />
      <main className="container home-container">
        <h1 className="home-title">Rick & Morty Explorer</h1>

        <div className="filters row mb-4">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <SearchBox value={searchTerm} onChange={setSearchTerm} />
          </div>
          <div className="col-12 col-md-6">
            <StatusDropdown value={status} onChange={setStatus} />
          </div>
        </div>

        <div className="row character-list">
          {displayCharacters.length === 0 ? (
            <p className="no-results">No characters found.</p>
          ) : (
            displayCharacters.map((char) => (
              <div className="col-12 col-sm-6 col-lg-4 mb-4" key={char.id}>
                <CharacterCard character={char} />
              </div>
            ))
          )}
        </div>

        {info && (
          <div className="pagination-container d-flex justify-content-center align-items-center my-4">
            <button
              className="btn btn-outline-primary me-3"
              onClick={handlePrev}
              disabled={apiPage === 1 && uiPage === 1}
            >
              ← Previous
            </button>
            <span className="page-number mx-3">Page {(apiPage - 1) * totalUiPagesForApiPage + uiPage}</span>
            <button
              className="btn btn-outline-primary ms-3"
              onClick={handleNext}
              disabled={!info.next && uiPage === totalUiPagesForApiPage}
            >
              Next →
            </button>
          </div>
        )}
      </main>
    </>
  );
}