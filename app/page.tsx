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
            Learn how real game studios operate in 7 days.
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
            Studio-aligned. Hands-on. Real-world.
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
            Aspire Game Academy is a 7-day in-person industry immersion designed
            to fast-track aspiring talent into the game industry through real
            workflows, direct mentorship, and practical exposure.
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
            This is not a traditional course. This is a focused pop-up training
            experience built to help students understand how real studios
            actually operate across QA, production, and live operations.
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
              "7 consecutive days",
              "10:00 AM to 3:00 PM",
              "35 hours total",
              "10 to 20 students",
              "Certificate included",
              "$1,997 USD",
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
        <h2 style={h2Style}>This is not a course</h2>
        <p style={{ ...bodyStyle, color: "#b8ffe8", fontWeight: 700 }}>
          This is a real-world game studio experience.
        </p>
        <p style={bodyStyle}>
          Aspire Game Academy is built for aspiring game industry talent,
          career-switchers, and students who want practical exposure without
          dragging things out for months.
        </p>
        <p style={bodyStyle}>
          Students learn how studios actually function, how teams communicate,
          how workflows move, and how to think more professionally inside a real
          game production environment.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Fast by design</h3>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              One focused 7-day pop-up intensive built for clarity, momentum,
              and useful exposure.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Real-world focus</h3>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              QA, production, studio communication, task flow, release support,
              and live ops awareness.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Pop-up format</h3>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Designed for city-by-city launch with strong instructors, simple
              venues, and focused cohorts.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* WHO IT'S FOR */}
      <section style={sectionStyle}>
        <div style={smallLabelStyle}>Who It’s For</div>
        <h2 style={h2Style}>Built for aspiring talent and career-switchers</h2>
        <p style={bodyStyle}>
          Students do not need prior game industry experience. This model is
          designed to create a faster, more practical bridge into the real world
          of game development and operations.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <strong style={{ fontSize: "20px" }}>Aspiring game talent</strong>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              People looking for a stronger, more realistic entry point into the
              industry.
            </p>
          </div>
          <div style={cardStyle}>
            <strong style={{ fontSize: "20px" }}>Students wanting more</strong>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Students who want practical exposure instead of theory only.
            </p>
          </div>
          <div style={cardStyle}>
            <strong style={{ fontSize: "20px" }}>Career-switchers</strong>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              People from tech, support, design, media, or adjacent fields who
              want to understand real studio workflows.
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
            ["Day 1", "Industry reality, studio roles, pipeline awareness, and how games are actually made"],
            ["Day 2", "QA thinking, issue spotting, testing basics, and stronger bug reporting"],
            ["Day 3", "Production workflows, communication, task flow, and sprint-style thinking"],
            ["Day 4", "Live ops basics, updates, release support, and player-facing awareness"],
            ["Day 5", "Hands-on project work and guided studio-style collaboration"],
            ["Day 6", "Professional readiness, portfolio direction, applications, and positioning"],
            ["Day 7", "Final exercise, review, wrap-up, and certificate presentation"],
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

      {/* VALUE */}
      <section style={sectionStyle}>
        <div style={smallLabelStyle}>Why It Matters</div>
        <h2 style={h2Style}>Real exposure in 7 days</h2>
        <p style={bodyStyle}>
          Most people spend years guessing how to break into the game industry.
          Aspire Game Academy gives students a fast, practical, premium entry
          point that helps them better understand how real studios function.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Small cohort</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              10 to 20 students for stronger engagement, better interaction, and
              a more premium feel.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Industry-led</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Taught by people with real-world game industry experience.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Useful fast</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Clear, practical exposure without wasting months.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* POP-UP MODEL */}
      <section style={sectionStyle}>
        <div style={smallLabelStyle}>Pop-Up Model</div>
        <h2 style={h2Style}>Designed to launch city by city</h2>
        <p style={bodyStyle}>
          Aspire Game Academy is structured as a premium 7-day pop-up program
          that can be launched in multiple cities with local instructors, simple
          venues, and clear cohort dates.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Focused format</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              One week. One city. One strong live experience.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Professional energy</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Premium positioning for students and strong visibility for local
              instructors.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Built to scale</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Easy to replicate in new markets as Aspire grows.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* TUITION */}
      <section style={sectionStyle}>
        <div style={smallLabelStyle}>Tuition</div>
        <h2 style={h2Style}>Simple, premium, and clear</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Student Tuition</h3>
            <div
              style={{
                fontSize: "42px",
                fontWeight: 800,
                color: "#72e6ff",
                marginBottom: "10px",
              }}
            >
              $1,997
            </div>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}>
              Includes 7 live in-person training days, mentorship, hands-on
              learning, and certificate of completion.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>What’s Included</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>
              35 total hours
              <br />
              Live instruction
              <br />
              Practical exposure
              <br />
              Certificate included
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* TEACH */}
      <section style={sectionStyle}>
        <div style={smallLabelStyle}>Teach With Aspire</div>
        <h2 style={h2Style}>Lead a city cohort</h2>
        <p style={bodyStyle}>
          Aspire Game Academy is built with real industry professionals who can
          lead, mentor, and bring real-world studio experience into the room.
        </p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Instructor structure</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>
              $1,500 base instructor fee
              <br />
              + $150 per student
              <br />
              + $500 bonus at 20 students
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Program schedule</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>
              7 consecutive days
              <br />
              10:00 AM to 3:00 PM daily
              <br />
              10 to 20 students
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: "24px" }}>Why it works</h3>
            <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>
              Strong teaching, premium positioning, and a shared incentive to
              help fill the cohort.
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
          Your path into the game industry starts here
        </h2>
        <p
          style={{
            ...bodyStyle,
            margin: "0 auto 34px auto",
            maxWidth: "900px",
          }}
        >
          Whether you want to join as a student or teach as a city lead, Aspire
          Game Academy is built to move fast, stay practical, and deliver a
          real-world studio-aligned experience.
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
