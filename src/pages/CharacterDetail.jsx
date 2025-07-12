import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../style/CharacterDetail.css";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodeTitles, setEpisodeTitles] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        return Promise.all(
          data.episode.map((url) =>
            fetch(url).then((res) => res.json()).then((ep) => ep.name)
          )
        );
      })
      .then(setEpisodeTitles)
      .catch(console.error);
  }, [id]);

  if (!character)
    return <p className="loading-text">Loading character data...</p>;

  const displayedEpisodes = showAll
    ? episodeTitles
    : episodeTitles.slice(0, 5);

  return (
    <>
      <Navbar />
      <main className="detail-main">
        <div className="detail-card">
          <div className="image-container">
            <img
              src={character.image}
              alt={character.name}
              className="detail-image"
            />
          </div>
          <div className="detail-info">
            <h1 className="detail-name">{character.name}</h1>

            <div className="info-group">
              <span className="info-label">Status:</span>
              <span className={`status ${character.status.toLowerCase()}`}>
                {character.status}
              </span>
            </div>

            <div className="info-group">
              <span className="info-label">Species:</span>
              <span>{character.species}</span>
            </div>

            <div className="info-group">
              <span className="info-label">Origin:</span>
              <span>{character.origin?.name}</span>
            </div>

            <div className="info-group">
              <span className="info-label">Last Known Location:</span>
              <span>{character.location?.name}</span>
            </div>

            <div className="info-group">
              <span className="info-label">Episodes Appeared In:</span>
              <span>{episodeTitles.length}</span>
            </div>

            <div className="info-group" style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <span className="info-label">Episodes List:</span>
              <ul className="episode-list">
                {displayedEpisodes.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
              {episodeTitles.length > 5 && (
                <button className="view-toggle-btn" onClick={() => setShowAll(!showAll)}>
                  {showAll ? "View Less" : "View All"}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
