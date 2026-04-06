export default function Home() {
  const colors = {
    bg0: "#04060c",
    bg1: "#0a0f1a",
    bg2: "#140a22",
    card: "rgba(255,255,255,0.06)",
    cardBorder: "rgba(255,255,255,0.12)",
    text: "#ffffff",
    muted: "rgba(255,255,255,0.78)",
    soft: "rgba(255,255,255,0.62)",
    cyan: "#72e6ff",
    mint: "#b8ffe8",
    purple: "#8d5bff",
    blue: "#5fdcff",
    glow: "rgba(114,230,255,0.18)",
  };

  const pageStyle = {
    minHeight: "100vh",
    background: `
      radial-gradient(circle at 10% 10%, rgba(0,255,255,0.12), transparent 24%),
      radial-gradient(circle at 90% 12%, rgba(141,91,255,0.14), transparent 26%),
      radial-gradient(circle at 50% 100%, rgba(72,30,120,0.18), transparent 40%),
      linear-gradient(135deg, ${colors.bg0} 0%, ${colors.bg1} 46%, ${colors.bg2} 100%)
    `,
    color: colors.text,
    padding: "0 24px 100px 24px",
    fontFamily:
      'Inter, Arial, Helvetica, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  } as const;

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  } as const;

  const sectionStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "84px 0",
  } as const;

  const dividerStyle = {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
    margin: "0 auto",
    maxWidth: "1200px",
  } as const;

  const smallLabelStyle = {
    color: colors.cyan,
    fontSize: "14px",
    fontWeight: 800,
    letterSpacing: "3px",
    marginBottom: "18px",
    textTransform: "uppercase" as const,
  };

  const h2Style = {
    fontSize: "clamp(34px, 4vw, 54px)",
    lineHeight: 1.06,
    fontWeight: 800,
    margin: "0 0 18px 0",
    letterSpacing: "-1.5px",
  };

  const bodyStyle = {
    fontSize: "clamp(18px, 1.8vw, 22px)",
    lineHeight: 1.75,
    color: colors.muted,
    margin: "0 0 18px 0",
    maxWidth: "920px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  } as const;

  const cardStyle = {
    background: `
      linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))
    `,
    border: `1px solid ${colors.cardBorder}`,
    borderRadius: "22px",
    padding: "26px",
    boxShadow:
      "0 10px 30px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.02) inset",
    backdropFilter: "blur(8px)",
  } as const;

  const statPillStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "999px",
    padding: "12px 18px",
    fontSize: "15px",
    color: "#d7fbff",
    fontWeight: 700,
    boxShadow: "0 0 18px rgba(114,230,255,0.08)",
  } as const;

  const buttonPrimaryStyle = {
    display: "inline-block",
    background: "linear-gradient(135deg, #6f63ff 0%, #4b43ff 100%)",
    padding: "18px 30px",
    borderRadius: "14px",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 800,
    fontSize: "18px",
    boxShadow: "0 14px 34px rgba(95, 78, 255, 0.34)",
    border: "1px solid rgba(255,255,255,0.10)",
  } as const;

  const buttonSecondaryStyle = {
    display: "inline-block",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.14)",
    padding: "18px 30px",
    borderRadius: "14px",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "18px",
    backdropFilter: "blur(6px)",
  } as const;

  const sectionIntroStyle = {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr)",
    gap: "10px",
    marginBottom: "8px",
  } as const;

  const cardTitleStyle = {
    marginTop: 0,
    marginBottom: "12px",
    fontSize: "23px",
    fontWeight: 800,
    letterSpacing: "-0.4px",
  };

  return (
    <main style={pageStyle}>
      {/* HERO */}
      <section
        style={{
          ...containerStyle,
          paddingTop: "40px",
          paddingBottom: "84px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.08fr) minmax(300px, 0.92fr)",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px",
                padding: "10px 16px",
                marginBottom: "26px",
                boxShadow: "0 0 20px rgba(114,230,255,0.08)",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "999px",
                  background: colors.cyan,
                  boxShadow: "0 0 14px rgba(114,230,255,0.7)",
                }}
              />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: colors.cyan,
                }}
              >
                Aspire Agency Global Inc.
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(54px, 8vw, 100px)",
                lineHeight: 0.98,
                fontWeight: 900,
                margin: "0 0 22px 0",
                letterSpacing: "-2.5px",
                maxWidth: "920px",
              }}
            >
              Learn how real game studios operate in{" "}
              <br />
              <span style={{ color: "#72e6ff" }}>7 days.</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(22px, 2.3vw, 34px)",
                lineHeight: 1.35,
                fontWeight: 800,
                color: colors.mint,
                margin: "0 0 24px 0",
                maxWidth: "820px",
              }}
            >
              Studio-aligned. Hands-on. Real-world.
            </p>

            <p
              style={{
                fontSize: "clamp(19px, 2vw, 24px)",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.84)",
                margin: "0 0 16px 0",
                maxWidth: "900px",
              }}
            >
              Aspire Game Academy is a 7-day in-person industry immersion
              designed to fast-track aspiring talent into the game industry
              through real workflows, direct mentorship, and practical exposure.
            </p>

            <p
              style={{
                fontSize: "clamp(19px, 2vw, 24px)",
                lineHeight: 1.75,
                color: colors.soft,
                margin: "0 0 34px 0",
                maxWidth: "900px",
              }}
            >
              Built for aspiring talent, career-switchers, and future studio
              professionals who want clear, focused exposure to how real teams
              operate across QA, production, and live ops.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "24px",
              }}
            >
              <a href="#" style={buttonPrimaryStyle}>
                Apply Now
              </a>

              <a href="#program" style={buttonSecondaryStyle}>
                Explore the Program
              </a>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "8px",
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
                <div key={item} style={statPillStyle}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                position: "relative",
                borderRadius: "30px",
                padding: "26px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow:
                  "0 18px 60px rgba(0,0,0,0.32), 0 0 40px rgba(114,230,255,0.08)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "-30% auto auto -10%",
                  width: "200px",
                  height: "200px",
                  background: "rgba(114,230,255,0.14)",
                  filter: "blur(60px)",
                  borderRadius: "999px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "auto -10% -20% auto",
                  width: "220px",
                  height: "220px",
                  background: "rgba(141,91,255,0.16)",
                  filter: "blur(70px)",
                  borderRadius: "999px",
                }}
              />

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "22px",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "28px",
                    overflow: "hidden",
                    boxShadow:
                      "0 0 0 1px rgba(255,255,255,0.08), 0 0 24px rgba(114,230,255,0.18)",
                    background: "rgba(255,255,255,0.04)",
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

                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 800,
                      color: colors.cyan,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    Premium Pop-Up Program
                  </div>

                  <div
                    style={{
                      fontSize: "clamp(28px, 3vw, 40px)",
                      fontWeight: 900,
                      lineHeight: 1.06,
                      letterSpacing: "-1px",
                      marginBottom: "14px",
                    }}
                  >
                    One focused week.
                    <br />
                    Real studio exposure.
                  </div>

                  <p
                    style={{
                      margin: 0,
                      color: colors.muted,
                      fontSize: "18px",
                      lineHeight: 1.7,
                      maxWidth: "430px",
                    }}
                  >
                    A clean, high-impact format built to give students momentum,
                    practical clarity, and a stronger entry point into the game
                    industry.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "14px",
                    width: "100%",
                  }}
                >
                  {[
                    ["Format", "In-Person"],
                    ["Length", "7 Days"],
                    ["Cohort", "10 to 20"],
                    ["Outcome", "Certificate"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        borderRadius: "16px",
                        padding: "16px",
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          color: colors.soft,
                          fontSize: "13px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          marginBottom: "6px",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          color: colors.text,
                          fontSize: "20px",
                          fontWeight: 800,
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* WHAT IT IS */}
      <section id="program" style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>What It Is</div>
          <h2 style={h2Style}>A focused studio-style learning experience</h2>
          <p style={{ ...bodyStyle, color: colors.mint, fontWeight: 800 }}>
            Built for practical exposure, momentum, and real industry context.
          </p>
          <p style={bodyStyle}>
            Aspire Game Academy is designed for people who want a stronger, more
            realistic understanding of how game teams actually operate without
            stretching the learning experience over months.
          </p>
          <p style={bodyStyle}>
            Students learn how workflows move, how teams communicate, how tasks
            are managed, and how professional thinking starts inside a real
            production environment.
          </p>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Fast by design</h3>
            <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>
              One focused 7-day intensive built for clarity, momentum, and
              useful exposure.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Real-world focus</h3>
            <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>
              QA, production, studio communication, task flow, release support,
              and live ops awareness.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Built to travel</h3>
            <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>
              A clean pop-up format that can launch city by city with strong
              instructors and focused cohorts.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* WHO IT'S FOR */}
      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Who It’s For</div>
          <h2 style={h2Style}>Built for aspiring talent and career-switchers</h2>
          <p style={bodyStyle}>
            Students do not need prior game industry experience. This model is
            designed to create a faster, more practical bridge into the real
            world of game development and operations.
          </p>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <strong
              style={{ fontSize: "21px", display: "block", marginBottom: "12px" }}
            >
              Aspiring game talent
            </strong>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              People looking for a stronger, more realistic entry point into the
              industry.
            </p>
          </div>
          <div style={cardStyle}>
            <strong
              style={{ fontSize: "21px", display: "block", marginBottom: "12px" }}
            >
              Students wanting more
            </strong>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              Students who want practical exposure instead of theory only.
            </p>
          </div>
          <div style={cardStyle}>
            <strong
              style={{ fontSize: "21px", display: "block", marginBottom: "12px" }}
            >
              Career-switchers
            </strong>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              People from tech, support, design, media, or adjacent fields who
              want to understand real studio workflows.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* CURRICULUM */}
      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>7-Day Intensive</div>
          <h2 style={h2Style}>Sample curriculum</h2>
        </div>

        <div style={gridStyle}>
          {[
            [
              "Day 1",
              "Industry reality, studio roles, pipeline awareness, and how games are actually made",
            ],
            [
              "Day 2",
              "QA thinking, issue spotting, testing basics, and stronger bug reporting",
            ],
            [
              "Day 3",
              "Production workflows, communication, task flow, and sprint-style thinking",
            ],
            [
              "Day 4",
              "Live ops basics, updates, release support, and player-facing awareness",
            ],
            [
              "Day 5",
              "Hands-on project work and guided studio-style collaboration",
            ],
            [
              "Day 6",
              "Professional readiness, portfolio direction, applications, and positioning",
            ],
            [
              "Day 7",
              "Final exercise, review, wrap-up, and certificate presentation",
            ],
          ].map(([day, text]) => (
            <div key={day} style={cardStyle}>
              <div
                style={{
                  color: colors.cyan,
                  fontWeight: 800,
                  fontSize: "15px",
                  letterSpacing: "1.6px",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                {day}
              </div>
              <div
                style={{
                  fontSize: "19px",
                  lineHeight: 1.7,
                  color: colors.muted,
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={dividerStyle} />

      {/* VALUE */}
      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Why It Matters</div>
          <h2 style={h2Style}>Real exposure in one focused week</h2>
          <p style={bodyStyle}>
            Most people spend years guessing how to break into the game
            industry. Aspire Game Academy gives students a fast, practical, and
            premium entry point that helps them better understand how real
            studios function.
          </p>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Small cohort</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              10 to 20 students for stronger engagement, better interaction, and
              a more premium experience.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Industry-led</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              Taught by people with real-world game industry experience.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Useful fast</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              Clear, practical exposure without dragging the learning process
              out for months.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* POP-UP MODEL */}
      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Pop-Up Model</div>
          <h2 style={h2Style}>Designed to launch city by city</h2>
          <p style={bodyStyle}>
            Aspire Game Academy is structured as a premium 7-day pop-up program
            that can be launched in multiple cities with local instructors,
            simple venues, and clear cohort dates.
          </p>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Focused format</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              One week. One city. One strong live experience.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Professional energy</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              Premium positioning for students and strong visibility for local
              instructors.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Built to scale</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              Easy to replicate in new markets as Aspire grows.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* TUITION */}
      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Tuition</div>
          <h2 style={h2Style}>Simple, premium, and clear</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              ...cardStyle,
              background:
                "linear-gradient(180deg, rgba(95,220,255,0.10), rgba(255,255,255,0.03))",
            }}
          >
            <h3 style={{ ...cardTitleStyle, marginBottom: "10px" }}>
              Student Tuition
            </h3>
            <div
              style={{
                fontSize: "clamp(42px, 5vw, 58px)",
                fontWeight: 900,
                color: colors.cyan,
                marginBottom: "12px",
                letterSpacing: "-1px",
              }}
            >
              $1,997
            </div>
            <p style={{ color: colors.muted, lineHeight: 1.75, margin: 0 }}>
              Includes 7 live in-person training days, mentorship, hands-on
              learning, and a certificate of completion.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>What’s Included</h3>
            <p style={{ color: colors.muted, lineHeight: 1.9, margin: 0 }}>
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
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Teach With Aspire</div>
          <h2 style={h2Style}>Lead a city cohort</h2>
          <p style={bodyStyle}>
            Aspire Game Academy is built with real industry professionals who
            can lead, mentor, and bring real-world studio experience into the
            room.
          </p>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Instructor structure</h3>
            <p style={{ color: colors.muted, lineHeight: 1.85, margin: 0 }}>
              $1,500 base instructor fee
              <br />
              + $150 per student
              <br />
              + $500 bonus at 20 students
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Program schedule</h3>
            <p style={{ color: colors.muted, lineHeight: 1.85, margin: 0 }}>
              7 consecutive days
              <br />
              10:00 AM to 3:00 PM daily
              <br />
              10 to 20 students
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Why it works</h3>
            <p style={{ color: colors.muted, lineHeight: 1.85, margin: 0 }}>
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
          textAlign: "center",
          paddingBottom: "30px",
        }}
      >
        <div style={smallLabelStyle}>Apply</div>
        <h2
          style={{
            ...h2Style,
            maxWidth: "900px",
            margin: "0 auto 18px auto",
          }}
        >
          Your path into the game industry starts here
        </h2>
        <p
          style={{
            ...bodyStyle,
            margin: "0 auto 34px auto",
            maxWidth: "860px",
          }}
        >
          Whether you want to join as a student or teach as a city lead,
          Aspire Game Academy is built to move fast, stay practical, and
          deliver a real-world studio-aligned experience.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
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
