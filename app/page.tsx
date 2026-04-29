export default function Home() {
  const locations = [
    "Los Angeles, CA",
    "San Francisco, CA",
    "Las Vegas, NV",
    "Austin, TX",
    "Chicago, IL",
    "Miami, FL",
  ];

  const instructors = Array.from({ length: 15 }, (_, i) => `Instructor ${i + 1}`);

  return (
    <main className="aga-page">
      <section className="aga-hero">
        <div className="aga-container aga-hero-grid">
          <div>
            <p className="aga-kicker">Aspire Game Academy</p>
            <h1>Break into the game industry with real studio-style training.</h1>
            <p className="aga-lead">
              An in-person, friendly academy experience designed to build confidence,
              practical production skills, and momentum toward your first role.
            </p>
            <div className="aga-hero-actions">
              <a href="#choose-class" className="aga-btn aga-btn-primary">
                Register Interest
              </a>
              <a href="#choose-class" className="aga-btn aga-btn-secondary">
                Secure Your Spot – $1,985
              </a>
              <a href="#choose-class" className="aga-btn aga-btn-tertiary">
                Apply to Teach
              </a>
            </div>
          </div>
          <div className="aga-hero-image-wrap">
            <img src="/aspire-hero.png" alt="Aspire Game Academy" className="aga-hero-image" />
          </div>
        </div>
      </section>

      <section className="aga-section">
        <div className="aga-container">
          <h2>What Is Aspire Game Academy?</h2>
          <p>
            Aspire Game Academy is a live, immersive training experience inspired by
            how real game teams collaborate. Students learn by doing: communication,
            production basics, task ownership, and delivery mindset inside a supportive
            classroom environment.
          </p>
        </div>
      </section>

      <section className="aga-section">
        <div className="aga-container">
          <h2>Program Options: 3-Day Immersive and 7-Day Immersive</h2>
          <div className="aga-card-grid">
            <article className="aga-card">
              <h3>3-Day Immersive</h3>
              <p>
                A high-energy foundation sprint focused on team workflow, production
                language, and practical industry readiness.
              </p>
            </article>
            <article className="aga-card">
              <h3>7-Day Immersive</h3>
              <p>
                A deeper studio simulation with expanded project time, feedback loops,
                and stronger portfolio-facing outcomes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="aga-section">
        <div className="aga-container">
          <h2>Tuition: $1,985</h2>
          <p className="aga-price">$1,985</p>
          <p>
            Tuition includes live instruction, collaborative project work, guided
            mentorship, and completion recognition for your selected immersive format.
          </p>
        </div>
      </section>

      <section className="aga-section">
        <div className="aga-container">
          <h2>Aspire Achievement Tracks</h2>
          <p>
            Progress through Aspire’s structured achievement pathways designed to help
            students map confidence and growth across key production competencies.
          </p>
          <img
            src="/ASPIRE BADGES.png"
            alt="Aspire Achievement Tracks"
            className="aga-badges"
          />
        </div>
      </section>

      <section className="aga-section">
        <div className="aga-container">
          <h2>Meet the Instructors</h2>
          <p>Experienced game professionals guiding each cohort with practical mentorship.</p>
          <div className="aga-instructors-grid">
            {instructors.map((name) => (
              <div key={name} className="aga-instructor-item" aria-label={name}>
                <div className="aga-avatar-placeholder" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aga-section" id="choose-class">
        <div className="aga-container">
          <h2>Choose Your Class</h2>
          <form className="aga-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Location
              <select defaultValue="">
                <option value="" disabled>
                  Select location
                </option>
                {locations.map((location) => (
                  <option key={location}>{location}</option>
                ))}
              </select>
            </label>

            <label>
              Instructor
              <select defaultValue="">
                <option value="" disabled>
                  Select instructor
                </option>
                <option>Instructor assignment at enrollment</option>
              </select>
            </label>

            <label>
              Format
              <select defaultValue="">
                <option value="" disabled>
                  Select format
                </option>
                <option>3-Day Immersive</option>
                <option>7-Day Immersive</option>
              </select>
            </label>

            <label>
              Date / Session
              <select defaultValue="">
                <option value="" disabled>
                  Select date / session
                </option>
                <option>Summer 2026 - Session A</option>
                <option>Summer 2026 - Session B</option>
                <option>Fall 2026 - Session A</option>
              </select>
            </label>

            <div className="aga-form-actions">
              <button type="button" className="aga-btn aga-btn-primary">
                Register Interest
              </button>
              <button type="button" className="aga-btn aga-btn-secondary">
                Secure Your Spot – $1,985
              </button>
              <button type="button" className="aga-btn aga-btn-tertiary">
                Apply to Teach
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
