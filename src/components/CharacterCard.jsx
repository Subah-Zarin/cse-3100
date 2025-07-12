import { useNavigate } from "react-router-dom";
import "../style/CharacterCard.css";

export default function CharacterCard({ character }) {
  const navigate = useNavigate();

  const getStatusIcon = (status) => {
    switch (status) {
      case "Alive":
        return "🟢";
      case "Dead":
        return "🔴";
      default:
        return "⚪";
    }
  };

  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div
      className="character-card card shadow-sm h-100"
      style={{ cursor: "pointer", borderRadius: "12px", overflow: "hidden" }}
    >
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-center">{character.name}</h5>
          <p className="card-status text-center mb-3">
            <strong>Status:</strong>{" "}
            <span className="status-text">
              {getStatusIcon(character.status)} {character.status}
            </span>
          </p>
        </div>
        <button
          onClick={handleClick}
          className="btn btn-outline-primary w-100 mt-auto"
        >
          🔍 View Details
        </button>
      </div>
    </div>
  );
}
