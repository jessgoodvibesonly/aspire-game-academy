const instructors = Array.from({ length: 15 }, (_, i) => ({
  name: `Instructor ${String(i + 1).padStart(2, "0")}`,
}));

const achievementTracks = [
  "Production",
  "Game Design",
  "QA + DevQA",
  "Live Ops",
  "Game Art",
  "Technical Foundations",
];

const locations = [
  "Los Angeles",
  "Las Vegas",
  "Chicago",
  "San Francisco",
  "St. Petersburg, Florida",
  "Ottawa",
  "Charlottetown",
  "Austin",
  "Across the UK",
  "Across France",
  "Netherlands",
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero card">
        <img src="/aspire-hero.png" alt="Aspire Game Academy hero" className="hero-image" />
        <div className="hero-content">
          <p className="arcade-label">Arcade Learning Experience</p>
          <h1>ASPIRE GAME ACADEMY</h1>
          <p className="subheadline">Learn how real games are built, shipped, and operated.</p>
          <p className="support-copy">AAA-led immersive training for future game industry professionals.</p>
          <div className="button-row">
            <a href="#payment" className="btn btn-primary">Secure Your Spot</a>
            <a href="#choose-class" className="btn btn-secondary">Register Interest</a>
            <a href="#payment" className="btn btn-secondary">Apply to Teach</a>
          </div>
        </div>
      </section>

      <section className="card section-block">
        <h2>Program Positioning</h2>
        <p>
          Aspire Game Academy is a global pop-up education model designed to teach real production workflows used in modern game studios.
        </p>
        <p>
          Students learn through immersive instructor-led programs focused on practical skills, collaboration, studio pipelines, and real-world game production.
        </p>
        <div className="program-meta">
          <span>3-Day Immersive</span>
          <span>7-Day Immersive</span>
          <span className="tuition">Tuition: $1,985</span>
        </div>
      </section>

      <section className="card section-block">
        <h2>Aspire Achievement Tracks</h2>
        <p>Students earn collectible achievement icons connected to real game studio skills.</p>
        <div className="track-grid">
          {achievementTracks.map((track) => (
            <div key={track} className="track-pill">{track}</div>
          ))}
        </div>
        <img
          src="/ASPIRE BADGES.png"
          alt="Aspire achievement badges"
          className="achievement-image"
        />
      </section>

      <section className="card section-block">
        <h2>Meet the Instructors</h2>
        <div className="instructor-grid">
          {instructors.map((instructor) => (
            <article className="instructor-card" key={instructor.name}>
              <div className="avatar-placeholder" aria-hidden="true" />
              <h3>{instructor.name}</h3>
              <ul>
                <li><strong>Location:</strong> Location placeholder</li>
                <li><strong>Languages:</strong> Languages placeholder</li>
                <li><strong>Expertise:</strong> Expertise placeholder</li>
                <li><strong>Course format:</strong> Course format placeholder</li>
                <li><strong>Upcoming dates:</strong> Upcoming dates placeholder</li>
                <li><strong>Achievement track:</strong> Achievement track placeholder</li>
              </ul>
              <p>Short bio placeholder.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="choose-class" className="card section-block">
        <h2>Choose Your Class</h2>
        <form className="interest-form">
          <label>Location
            <select><option>Select location</option>{locations.map((location) => <option key={location}>{location}</option>)}</select>
          </label>
          <label>Instructor
            <select><option>Select instructor</option>{instructors.map((instructor) => <option key={instructor.name}>{instructor.name}</option>)}</select>
          </label>
          <label>Course format
            <select>
              <option>Select format</option>
              <option>3-Day Immersive</option>
              <option>7-Day Immersive</option>
            </select>
          </label>
          <label>Date/session
            <select>
              <option>Select date/session</option>
              <option>Session Placeholder A</option>
              <option>Session Placeholder B</option>
            </select>
          </label>
          <label>Student name<input type="text" placeholder="Your name" /></label>
          <label>Student email<input type="email" placeholder="you@email.com" /></label>
          <button type="submit" className="btn btn-primary">Register Interest</button>
        </form>
      </section>

      <section id="payment" className="card section-block payment">
        <h2>Payment</h2>
        <a href="#" className="btn btn-primary">Secure Your Spot – $1,985</a>
        <p>Limited spots per class. Payment link coming soon.</p>
        <a href="#" className="btn btn-secondary">Apply to Teach</a>
      </section>
    </main>
  );
}
