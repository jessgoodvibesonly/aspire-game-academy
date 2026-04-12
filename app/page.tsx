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

  const studentFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScB1ZxdmvHP4lwGXU0-VViByCPDDGfezhg1J0XtknGbm6ohcw/viewform";

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
    maxWidth: "940px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  } as const;

  const cardStyle = {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
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

  const curriculumDays = [
    {
      day: "Day 1",
      title: "How Games Actually Ship",
      text: "Production reality, roles, pods, multi-studio setups, milestones, tools, and mapping a game idea into a roadmap.",
    },
    {
      day: "Day 2",
      title: "Production Thinking & Prioritization",
      text: "Backlogs, epics, scope, time, quality, dependencies, critical path basics, and writing clearer tickets.",
    },
    {
      day: "Day 3",
      title: "Agile in Practice",
      text: "Sprint cadence, estimation, definition of ready, definition of done, WIP limits, reporting, and running a mock sprint.",
    },
    {
      day: "Day 4",
      title: "Art & External Development Pipelines",
      text: "Managing art pipelines, vendor briefs, review loops, quality control, handoffs, approvals, and communication standards.",
    },
    {
      day: "Day 5",
      title: "QA, Builds & Release Readiness",
      text: "Bug lifecycle, triage, severity vs priority, build pipelines, certification basics, release gates, and readiness reporting.",
    },
    {
      day: "Day 6",
      title: "Live Ops, Data & Continuous Delivery",
      text: "Live ops cadence, metrics, A/B testing, player feedback loops, KPIs, experiments, and coordinating updates across teams.",
    },
    {
      day: "Day 7",
      title: "Leadership, Communication & Career Readiness",
      text: "Stakeholder communication, meetings, conflict resolution, time management, CV positioning, and a full mini-production cycle.",
    },
  ];

  const outcomes = [
    "Build a playable team project",
    "Run standups and production check-ins",
    "Track scope, blockers, and priorities",
    "Respond to release and live ops scenarios",
    "Present work like a real studio team",
  ];

  const studentWork = [
    {
      title: "Playable game slice",
      text: "Work in teams to shape and present a small playable project, not just ideas on paper.",
    },
    {
      title: "Daily standups",
      text: "Practice how teams align, assign tasks, surface blockers, and keep work moving.",
    },
    {
      title: "Production boards",
      text: "Map scope, priorities, milestones, and handoffs using studio-style production thinking.",
    },
    {
      title: "Live ops scenarios",
      text: "React to updates, player issues, release pressure, and real-world delivery moments.",
    },
  ];

  return (
    <main style={pageStyle}>
      {/* HERO */}
      <section
        style={{
          ...containerStyle,
          paddingTop: "56px",
          paddingBottom: "84px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, 0.85fr)",
            gap: "44px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "6px",
                overflow: "hidden",
                marginBottom: "34px",
                boxShadow: "0 0 34px rgba(114,230,255,0.14)",
                background: "rgba(255,255,255,0.03)",
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

            <h1
              style={{
                fontSize: "clamp(52px, 8vw, 96px)",
                lineHeight: 0.98,
                fontWeight: 900,
                margin: "0 0 22px 0",
                letterSpacing: "-2.5px",
                maxWidth: "980px",
              }}
            >
              Pop-up game academy
              <br />
              <span style={{ color: colors.cyan }}>in cities worldwide.</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(22px, 2.3vw, 34px)",
                lineHeight: 1.35,
                fontWeight: 800,
                color: colors.mint,
                margin: "0 0 24px 0",
                maxWidth: "900px",
              }}
            >
              7 days inside video game production.
            </p>

            <p
              style={{
                fontSize: "clamp(19px, 2vw, 24px)",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.84)",
                margin: "0 0 16px 0",
                maxWidth: "920px",
              }}
            >
              Aspire Game Academy is a global, in-person pop-up school taught by AAA industry leaders with real studio backgrounds.
            </p>

            <p
              style={{
                fontSize: "clamp(19px, 2vw, 24px)",
                lineHeight: 1.75,
                color: colors.soft,
                margin: "0 0 34px 0",
                maxWidth: "920px",
              }}
            >
              Students step inside the full game lifecycle, build in teams, run standups, tackle production challenges, and experience how games move from concept to release and live ops.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "24px",
              }}
            >
              <a href={studentFormLink} style={buttonPrimaryStyle}>
                Apply as a Student
              </a>

              <a href="#curriculum" style={buttonSecondaryStyle}>
                View Curriculum
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
                "Pop-up city format",
                "7 consecutive days",
                "10:00 AM to 2:00 PM",
                "Team project",
                "Live ops scenarios",
                "Certificate included",
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
                    Global Pop-Up Program
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
                    Learn it.
                    <br />
                    Build it.
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
                    A fast, immersive week where students work like a studio team and see how production connects every part of game development.
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
                    ["Focus", "Production"],
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
      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>What It Is</div>
          <h2 style={h2Style}>A production-focused game industry immersion</h2>
          <p style={{ ...bodyStyle, color: colors.mint, fontWeight: 800 }}>
            Built to reflect how games are actually planned, built, shipped, and operated.
          </p>
          <p style={bodyStyle}>
            This is not just an introduction to the industry. It is a focused,
            practical intensive designed to show how producers coordinate
            design, art, engineering, QA, and external partners across a real
            game development lifecycle.
          </p>
          <p style={bodyStyle}>
            Students gain exposure to production thinking, prioritization,
            sprint planning, vendor management, release readiness, live ops, and
            communication standards used in modern studios.
          </p>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Studio reality</h3>
            <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>
              Learn how production really works across milestones, delivery,
              risk, handoffs, and team coordination.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Practical thinking</h3>
            <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>
              Move beyond theory into prioritization, execution, communication,
              and decision-making under real constraints.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Career relevance</h3>
            <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>
              Build stronger production awareness, professional language, and
              industry readiness in one concentrated week.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* WHAT STUDENTS WORK ON */}
      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>What Students Work On</div>
          <h2 style={h2Style}>Not just lessons. Real studio-style work.</h2>
          <p style={bodyStyle}>
            Students are not just watching how games are made. They are stepping into the process and working through it together.
          </p>
        </div>

        <div style={gridStyle}>
          {studentWork.map((item) => (
            <div key={item.title} style={cardStyle}>
              <h3 style={cardTitleStyle}>{item.title}</h3>
              <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={dividerStyle} />

      {/* CURRICULUM CREDIT */}
      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Curriculum</div>
          <h2 style={h2Style}>Created with AAA production leadership</h2>
          <p style={bodyStyle}>
            The production-heavy foundation of this program was created by{" "}
            <strong style={{ color: colors.text }}>Fred Dossola</strong> for Aspire Game Academy, bringing real studio production thinking into the structure, pace, and focus of the experience.
          </p>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* CURRICULUM */}
      <section id="curriculum" style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>7-Day Intensive</div>
          <h2 style={h2Style}>Production-Focused Curriculum</h2>
          <p style={{ ...bodyStyle, color: colors.mint, fontWeight: 800 }}>
            From concept to release to live ops, in one focused week.
          </p>
        </div>

        <div style={gridStyle}>
          {curriculumDays.map((item) => (
            <div key={item.day} style={cardStyle}>
              <div
                style={{
                  color: colors.cyan,
                  fontWeight: 800,
                  fontSize: "15px",
                  letterSpacing: "1.6px",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                }}
              >
                {item.day}
              </div>
              <h3 style={{ ...cardTitleStyle, marginBottom: "10px" }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={dividerStyle} />

      {/* OUTCOMES */}
      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Outcome</div>
          <h2 style={h2Style}>By the end of the course, students can</h2>
          <p style={bodyStyle}>
            Students leave with clearer production awareness, stronger team communication, and practical experience connecting planning, delivery, release, and live operations.
          </p>
        </div>

        <div style={gridStyle}>
          {outcomes.map((item) => (
            <div key={item} style={cardStyle}>
              <h3 style={cardTitleStyle}>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <div style={dividerStyle} />

      {/* WHO IT'S FOR */}
      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Who It’s For</div>
          <h2 style={h2Style}>Built for future producers and game team talent</h2>
          <p style={bodyStyle}>
            This program is designed for aspiring producers, coordinators,
            project-minded creatives, career-switchers, and people who want to
            understand how cross-functional teams actually work together to ship
            games.
          </p>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <strong
              style={{ fontSize: "21px", display: "block", marginBottom: "12px" }}
            >
              Aspiring producers
            </strong>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              People drawn to planning, communication, coordination, and
              helping teams move work forward.
            </p>
          </div>
          <div style={cardStyle}>
            <strong
              style={{ fontSize: "21px", display: "block", marginBottom: "12px" }}
            >
              Career-switchers
            </strong>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              People from operations, project management, tech, media, support,
              or adjacent fields who want to move into games.
            </p>
          </div>
          <div style={cardStyle}>
            <strong
              style={{ fontSize: "21px", display: "block", marginBottom: "12px" }}
            >
              Studio-curious talent
            </strong>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              Students and aspiring professionals who want a more realistic view
              of how studios actually function.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* VALUE */}
      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Why It Matters</div>
          <h2 style={h2Style}>A faster way into the real side of game development</h2>
          <p style={bodyStyle}>
            Many people love games without ever seeing how teams actually build, coordinate, release, and support them. Aspire Game Academy helps close that gap in a format that feels current, practical, and exciting.
          </p>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>AAA-aligned</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              Curriculum shaped around real production workflows, not generic
              classroom theory.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Practical exposure</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              Learn prioritization, sprint planning, vendor coordination,
              release readiness, and live ops collaboration.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Premium format</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              One focused week with strong positioning, small cohorts, and
              practical production relevance.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* POP-UP MODEL */}
      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Pop-Up Model</div>
          <h2 style={h2Style}>Built to launch city by city</h2>
          <p style={bodyStyle}>
            Aspire Game Academy is designed as a global pop-up model that can activate in different cities with focused cohorts, local energy, and strong studio-style positioning.
          </p>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Focused format</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              One city. One week. One immersive game production experience.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Professional energy</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              Designed to feel exciting, polished, and studio-aligned from the first touchpoint onward.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Built to scale</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              Easy to replicate as Aspire grows into new cities and new communities.
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
              Includes 7 live in-person training days, studio-style teamwork, practical production exposure, and a certificate of completion.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>What’s Included</h3>
            <p style={{ color: colors.muted, lineHeight: 1.9, margin: 0 }}>
              28 total hours
              <br />
              Live instruction
              <br />
              Team project work
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
            Aspire Game Academy is built for experienced industry professionals who can lead, mentor, and bring real studio knowledge into an exciting pop-up learning environment.
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
              10:00 AM to 2:00 PM daily
              <br />
              10 to 20 students
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Ideal fit</h3>
            <p style={{ color: colors.muted, lineHeight: 1.85, margin: 0 }}>
              Production-minded leaders with real studio experience, strong
              communication, and mentoring ability.
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
            maxWidth: "920px",
            margin: "0 auto 18px auto",
          }}
        >
          Your path into the game industry starts here
        </h2>
        <p
          style={{
            ...bodyStyle,
            margin: "0 auto 34px auto",
            maxWidth: "900px",
          }}
        >
          Join as a student or step in as an instructor. Aspire Game Academy is built to move fast, stay practical, and deliver a game industry experience that feels real from day one.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a href={studentFormLink} style={buttonPrimaryStyle}>
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
