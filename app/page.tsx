export default function Home() {
  const pageStyle = {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, rgba(0,255,255,0.12), transparent 25%), radial-gradient(circle at top right, rgba(153,0,255,0.14), transparent 30%), linear-gradient(135deg, #05070d 0%, #090d18 45%, #120a1f 100%)",
    color: "#ffffff",
    padding: "48px 32px 90px 32px",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "72px 0",
  };

  const dividerStyle = {
    height: "1px",
    background: "rgba(255,255,255,0.10)",
    margin: "0 auto",
    maxWidth: "1200px",
  };

  const h2Style = {
    fontSize: "clamp(34px, 4vw, 52px)",
    lineHeight: 1.08,
    fontWeight: 700,
    margin: "0 0 18px 0",
    letterSpacing: "-1px",
  };

  const bodyStyle = {
    fontSize: "clamp(18px, 1.8vw, 22px)",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.82)",
    margin: "0 0 18px 0",
    maxWidth: "980px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px",
    marginTop: "28px",
  };

  const cardStyle = {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "18px",
    padding: "24px",
    boxShadow: "0 0 24px rgba(0,255,255,0.05)",
  };

  const smallLabelStyle = {
    color: "#72e6ff",
    fontSize: "16px",
    fontWeight: 700,
    letterSpacing: "3px",
    marginBottom: "20px",
    textTransform: "uppercase" as const,
  };

  const buttonPrimaryStyle = {
    display: "inline-block",
    background: "linear-gradient(135deg, #6f63ff 0%, #4e43ff 100%)",
    padding: "18px 34px",
    borderRadius: "12px",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "20px",
    boxShadow: "0 10px 30px rgba(95, 78, 255, 0.35)",
  };

  const buttonSecondaryStyle = {
    display: "inline-block",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.14)",
    padding: "18px 34px",
    borderRadius: "12px",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "20px",
  };

  return (
    <main style={pageStyle}>
      {/* HERO */}
      <section style={containerStyle}>
        <div
          style={{
            maxWidth: "1050px",
            paddingTop: "10px",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "999px",
              overflow: "hidden",
              marginBottom: "30px",
              boxShadow:
                "0 0 0 2px rgba(255,255,255,0.06), 0 0 30px rgba(0,255,255,0.18), 0 0 60px rgba(153,0,255,0.18)",
              background: "rgba(255,255,255,0.03)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/aspiregameacademylogo.png"
              alt="Aspire Game Academy Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div style={smallLabelStyle}>Aspire Agency Global Inc.</div>

          <h1
            style={{
              fontSize: "clamp(56px, 8vw, 96px)",
              lineHeight: 1.02,
              fontWeight: 500,
              margin: "0 0 28px 0",
              letterSpacing: "-2px",
              maxWidth: "1000px",
            }}
          >
            Aspire Game Academy
          </h1>

          <p
            style={{
              fontSize: "clamp(22px, 2.3vw, 34px)",
              lineHeight: 1.4,
              fontWeight: 700,
              color: "#b8ffe8",
              margin: "0 0 28px 0",
              maxWidth: "980px",
            }}
          >
            Become studio-ready in 7 days.
          </p>

          <p
            style={{
              fontSize: "clamp(20px, 2vw, 24px)",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.86)",
              margin: "0 0 22px 0",
              maxWidth: "980px",
            }}
          >
            Aspire Game Academy is a fast, industry-aligned bootcamp designed to
            prepare real-world game talent through practical exposure to QA,
            production, live ops, studio workflows, and professional readiness.
          </p>

          <p
            style={{
              fontSize: "clamp(20px, 2vw, 24px)",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.78)",
              margin: "0 0 46px 0",
              maxWidth: "980px",
            }}
          >
            This is not a dragged-out academic program. It is a high-impact,
            live, instructor-led intensive built to give students useful
            knowledge fast and help them better understand how game studios
            actually work.
          </p>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap" as const,
              marginBottom: "26px",
            }}
          >
            <a href="#" style={buttonPrimaryStyle}>
              Apply Now
            </a>

            <a href="#program" style={buttonSecondaryStyle}>
              Learn More
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              gap: "14px",
              marginTop: "18px",
            }}
          >
            {[
              "7 days",
              "10:00 AM to 3:00 PM",
              "35 hours total",
              "Certificate included",
              "$995 early bird",
              "$1,250 regular",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "999px",
                  padding: "12px 18px",
                  fontSize: "15px",
                  color: "#d7fbff",
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* WHAT IT IS */}
      <section id="program" style={sectionStyle}>
        <div style={smallLabelStyle}>What It Is</div>
        <h2 style={h2Style}>A live, intensive game industry bootcamp</h2>
        <p style={bodyStyle}>
          Aspire Game Academy is built for aspiring game industry talent,
          career-switchers, and students who want real-world exposure without
          spending months in a traditional program.
        </p>
        <p style={bodyStyle}>
          The focus is practical. Students learn how game studios actually
          operate, how teams communicate, how workflows move, and how to think
          more professionally inside a studio environment.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Fast by design</h3>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              One focused 7-day intensive. In, out, done, and useful.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Real-world focus</h3>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Practical workflows, studio awareness, communication, QA,
              production, and live ops.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Scalable format</h3>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Built for pop-up training in multiple cities with strong local
              instructors and a clear certificate model.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* WHO IT'S FOR */}
      <section style={sectionStyle}>
        <div style={smallLabelStyle}>Who It’s For</div>
        <h2 style={h2Style}>Built for beginners, aspiring talent, and career-switchers</h2>
        <p style={bodyStyle}>
          Students do not need to already be working in the gaming industry.
          This model is beginner-friendly and designed to create a stronger,
          faster bridge into the real world of game development and operations.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <strong style={{ fontSize: "20px" }}>Aspiring talent</strong>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              People looking for a more realistic starting point in gaming.
            </p>
          </div>
          <div style={cardStyle}>
            <strong style={{ fontSize: "20px" }}>Students wanting more</strong>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Students who want practical, applied knowledge instead of just theory.
            </p>
          </div>
          <div style={cardStyle}>
            <strong style={{ fontSize: "20px" }}>Career-switchers</strong>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              People from tech, support, design, media, or adjacent fields who
              want to understand studio workflows.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* CURRICULUM */}
      <section style={sectionStyle}>
        <div style={smallLabelStyle}>7-Day Intensive</div>
        <h2 style={h2Style}>Sample curriculum</h2>

        <div style={gridStyle}>
          {[
            ["Day 1", "Industry reality, studio roles, and how games are actually made"],
            ["Day 2", "QA thinking, issue spotting, and stronger bug reporting"],
            ["Day 3", "Production workflows, sprints, communication, and task flow"],
            ["Day 4", "Live ops, release support, updates, and player-facing thinking"],
            ["Day 5", "Studio simulation and guided team-style problem solving"],
            ["Day 6", "Professional readiness, applications, portfolio direction, and positioning"],
            ["Day 7", "Final exercise, review, completion, and certificate presentation"],
          ].map(([day, text]) => (
            <div key={day} style={cardStyle}>
              <div
                style={{
                  color: "#72e6ff",
                  fontWeight: 700,
                  fontSize: "16px",
                  letterSpacing: "1px",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                }}
              >
                {day}
              </div>
              <div style={{ fontSize: "19px", lineHeight: 1.6, color: "rgba(255,255,255,0.82)" }}>
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={dividerStyle} />

      {/* LOCATIONS */}
      <section style={sectionStyle}>
        <div style={smallLabelStyle}>Launch Cities</div>
        <h2 style={h2Style}>Pop-up model starting in June</h2>
        <p style={bodyStyle}>
          This format is designed to work city by city with strong instructors,
          simple venues, and clear cohort dates.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Tampa, Florida</h3>
            <p style={{ color: "#b8ffe8", fontWeight: 700 }}>June 8–14, 2026</p>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Strong first launch city with a lower-friction test market.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Austin, Texas</h3>
            <p style={{ color: "#b8ffe8", fontWeight: 700 }}>June 22–28, 2026</p>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Great workshop culture and strong tech energy.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>San Diego, California</h3>
            <p style={{ color: "#b8ffe8", fontWeight: 700 }}>July 13–19, 2026</p>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Premium coastal market with strong branding potential.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* PRICING */}
      <section style={sectionStyle}>
        <div style={smallLabelStyle}>Tuition</div>
        <h2 style={h2Style}>Simple, premium, and easy to understand</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Early Bird</h3>
            <div
              style={{
                fontSize: "42px",
                fontWeight: 800,
                color: "#72e6ff",
                marginBottom: "10px",
              }}
            >
              $995
            </div>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Best for early signups and faster seat commitment.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Regular Tuition</h3>
            <div
              style={{
                fontSize: "42px",
                fontWeight: 800,
                color: "#b8ffe8",
                marginBottom: "10px",
              }}
            >
              $1,250
            </div>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Full live access, hands-on training, and certificate of completion.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* TEACH */}
      <section style={sectionStyle}>
        <div style={smallLabelStyle}>Teach With Aspire</div>
        <h2 style={h2Style}>Aspire Game Academy City Leads</h2>
        <p style={bodyStyle}>
          This model is designed to scale with strong local instructors who can
          teach, attract students, and build energy around each cohort.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Suggested structure</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>
              $1,000 base teaching fee
              <br />
              + $150 per paid student
              <br />
              + bonus once 12 students are reached
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Why it works</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>
              It motivates strong teaching and gives instructors a reason to
              help fill their own cohort.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* CTA */}
      <section
        style={{
          ...sectionStyle,
          textAlign: "center" as const,
          paddingBottom: "40px",
        }}
      >
        <div style={smallLabelStyle}>Apply</div>
        <h2 style={{ ...h2Style, maxWidth: "900px", margin: "0 auto 18px auto" }}>
          Real-world game industry readiness, without dragging it out
        </h2>
        <p
          style={{
            ...bodyStyle,
            margin: "0 auto 34px auto",
            maxWidth: "900px",
          }}
        >
          Whether you want to join as a student or teach as a city lead, Aspire
          Game Academy is built to move fast, stay practical, and prepare people
          for real studio environments.
        </p>

        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap" as const,
            justifyContent: "center",
          }}
        >
          <a href="#" style={buttonPrimaryStyle}>
            Apply as a Student
          </a>

          <a href="#" style={buttonSecondaryStyle}>
            Apply to Teach
          </a>
        </div>
      </section>
    </main>
  );
}
