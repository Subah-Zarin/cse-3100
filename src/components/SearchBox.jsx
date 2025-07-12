export default function SearchBox({ value, onChange }) {
    return (
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  