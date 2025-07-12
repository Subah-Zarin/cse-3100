import Navbar from "../components/Navbar";
import "../style/About.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-container container mt-5">
        <h1 className="about-title">About Rick & Morty Explorer</h1>

        <section className="about-section">
          <h4>📌 About</h4>
          <p>
            <strong>Rick & Morty Explorer</strong> is a modern, single-page web application developed as part of the
            <strong> CSE-3100 Software Development Laboratory</strong> course. It utilizes the Rick and Morty API to let users:
          </p>
          <ul>
            <li>Search and filter characters by name and status</li>
            <li>View detailed information on each character</li>
            <li>Paginate through the character list, 10 per page</li>
          </ul>
        </section>

        {/* Developer Info */}
        <section className="about-section">
          <h4>Developer</h4>
          <p>
            <strong>Quazi Zarin Subah</strong><br />
            Student ID: <strong>20220204079</strong><br />
            Section: <strong>B2</strong><br />
            Year: <strong>3rd</strong><br />
            Semester: <strong>1st</strong><br />
            Department of Computer Science & Engineering
          </p>
        </section>

        {/* Favorite Quote */}
        <section className="about-section">
          <h4>🧪 Favorite Rick & Morty Quote</h4>
          <blockquote className="quote">
            "When you know nothing matters, the universe is yours. I’ve never met a universe that was into it.
            The universe is basically an animal. It grazes on the ordinary. It creates infinite idiots just to eat them."
            <br />– Rick Sanchez
          </blockquote>
        </section>
      </div>
    </>
  );
}
