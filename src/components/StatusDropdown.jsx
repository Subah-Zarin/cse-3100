export default function StatusDropdown({ value, onChange }) {
    return (
      <select
        className="form-select mb-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Filter by status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    );
  }
  