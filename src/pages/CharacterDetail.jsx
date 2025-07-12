import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../style/CharacterDetail.css";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter)
      .catch(console.error);
  }, [id]);

  if (!character)
    return <p className="loading-text">Loading character data...</p>;

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
              <span>{character.episode?.length}</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
