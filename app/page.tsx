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

  const instructorFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSdL3eUQqETiIFCaD_wtzKdZSNOTmiEC835jVFSsc8J8SNZGnA/viewform";

  const pageStyle = {
    minHeight: "100vh",
    background: `
      radial-gradient(circle at 10% 10%, rgba(0,255,255,0.12), transparent 24%),
      radial-gradient(circle at 90% 12%, rgba(141,91,255,0.14), transparent 26%),
      radial-gradient(circle at 50% 100%, rgba(72,30,120,0.18), transparent 40%),
      linear-gradient(135deg, ${colors.bg0} 0%, ${colors.bg1} 46%, ${colors.bg2} 100%)
    `,
    color: colors.text,
    padding: "0 clamp(14px, 4vw, 24px) 100px clamp(14px, 4vw, 24px)",
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
    padding: "clamp(56px, 8vw, 78px) 0",
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
    lineHeight: 1.72,
    color: colors.muted,
    margin: "0 0 18px 0",
    maxWidth: "920px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "28px",
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
    minWidth: "220px",
    textAlign: "center",
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
    minWidth: "220px",
    textAlign: "center",
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

  const quickFacts = [
    "7 Days",
    "In Person",
    "AAA-Led",
    "Certificate Included",
    "Small Team Project",
  ];

  const studentWork = [
    {
      title: "Work like a team",
      text: "Learn how roles connect across production, QA, communication, and delivery.",
    },
    {
      title: "Run standups",
      text: "Practice alignment, blockers, priorities, and team momentum.",
    },
    {
      title: "Build a small project",
      text: "Work through a mini production cycle and create something to present by the end of the week.",
    },
    {
      title: "Learn live ops reality",
      text: "Get exposed to events, updates, player flows, and modern game operations.",
    },
  ];

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
    "Build and present a small team project",
    "Run standups and production check-ins",
    "Track scope, blockers, and priorities",
    "Respond to release and live ops scenarios",
    "Communicate like a real studio team",
  ];


  const responsiveStyles = `
    @media (max-width: 980px) {
      .hero-section {
        padding-top: 32px !important;
        padding-bottom: 56px !important;
      }

      .hero-grid {
        grid-template-columns: minmax(0, 1fr) !important;
        gap: 28px !important;
      }

      .hero-panel {
        max-width: 680px;
        margin: 0 auto;
      }

      .tuition-grid {
        grid-template-columns: minmax(0, 1fr) !important;
      }
    }

    @media (max-width: 640px) {
      .page-root {
        padding-bottom: 72px !important;
      }

      .logo-wrap {
        width: 110px !important;
        height: 110px !important;
        margin-bottom: 20px !important;
      }

      .cta-row a {
        width: 100%;
      }

      .metrics-grid {
        grid-template-columns: minmax(0, 1fr) !important;
      }
    }
  `;

  const builtFor = [
    "Future producers",
    "Aspiring QA and Dev QA talent",
    "Technical creatives",
    "Career starters and career shifters",
    "People looking for a faster path into games",
  ];

  return (
    <main className="page-root" style={pageStyle}>
      <style>{responsiveStyles}</style>
      <section
        className="hero-section"
        style={{
          ...containerStyle,
          paddingTop: "56px",
          paddingBottom: "84px",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(320px, 0.9fr)",
            gap: "44px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              className="logo-wrap"
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
                fontSize: "clamp(50px, 8vw, 94px)",
                lineHeight: 0.96,
                fontWeight: 900,
                margin: "0 0 22px 0",
                letterSpacing: "-2.5px",
                maxWidth: "980px",
              }}
            >
              Break into the
              <br />
              <span style={{ color: colors.cyan }}>game industry in 7 days.</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(21px, 2.2vw, 30px)",
                lineHeight: 1.38,
                fontWeight: 800,
                color: colors.mint,
                margin: "0 0 18px 0",
                maxWidth: "920px",
              }}
            >
              Learn how modern game teams actually work across production, QA, live ops, and delivery — and build a small team project during the week.
            </p>

            <p
              style={{
                fontSize: "clamp(18px, 1.9vw, 23px)",
                lineHeight: 1.72,
                color: "rgba(255,255,255,0.84)",
                margin: "0 0 32px 0",
                maxWidth: "920px",
              }}
            >
              A global, in-person pop-up academy built by Aspire Agency Global Inc.
            </p>

            <div
              className="cta-row"
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "24px",
              }}
            >
              <a href={studentFormLink} style={buttonPrimaryStyle}>
                Join the First Cohort
              </a>

              <a href={instructorFormLink} style={buttonSecondaryStyle}>
                Apply to Teach
              </a>
            </div>

            <div
              className="facts-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "8px",
              }}
            >
              {quickFacts.map((item) => (
                <div key={item} style={statPillStyle}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="hero-panel"
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
                    Aspire PODS Connection
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
                    Train closer to the real industry through the same production mindset behind Aspire PODS.
                  </p>
                </div>

                <div
                  className="metrics-grid"
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

      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Why It’s Different</div>
          <h2 style={h2Style}>Train closer to the real industry</h2>
          <p style={{ ...bodyStyle, color: colors.mint, fontWeight: 800 }}>
            Aspire Game Academy is connected to the same production mindset behind Aspire PODS.
          </p>
          <p style={bodyStyle}>
            Small, structured teams are how modern games stay aligned across production, QA, communication, and delivery. This academy is built to give students a real feel for how that world works.
          </p>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Built for modern studios</h3>
            <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>
              Learn how teams coordinate, communicate, and move work forward in real production environments.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Faster than traditional pathways</h3>
            <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>
              Get a focused industry immersion in one week instead of months of disconnected theory.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Closer to real opportunities</h3>
            <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>
              Designed to help students understand where they fit and how to move toward real game industry roles.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>What You’ll Actually Do</div>
          <h2 style={h2Style}>More than just listening</h2>
          <p style={bodyStyle}>
            This is a practical, team-based experience where students work through a mini production cycle and build a small project together during the week.
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

      <section id="curriculum" style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Inside the 7 Days</div>
          <h2 style={h2Style}>Production-focused curriculum</h2>
          <p style={{ ...bodyStyle, color: colors.mint, fontWeight: 800 }}>
            A practical week designed to move from concept to release to live ops.
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

      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Outcome</div>
          <h2 style={h2Style}>By the end of the week, students can</h2>
          <p style={bodyStyle}>
            Students leave with clearer production awareness, stronger team communication, and something tangible to present from the week.
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

      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Built For</div>
          <h2 style={h2Style}>For people who want real industry context fast</h2>
        </div>

        <div style={gridStyle}>
          {builtFor.map((item) => (
            <div key={item} style={cardStyle}>
              <h3 style={cardTitleStyle}>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={sectionStyle}>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <span>
              Los Angeles, CA · San Francisco, CA · Las Vegas, NV · Chicago, IL · Austin, TX · St. Petersburg, FL · Charlottetown, Canada · Ottawa, Canada · Across England · Across France · Amsterdam, Netherlands ·
            </span>
            <span>
              Los Angeles, CA · San Francisco, CA · Las Vegas, NV · Chicago, IL · Austin, TX · St. Petersburg, FL · Charlottetown, Canada · Ottawa, Canada · Across England · Across France · Amsterdam, Netherlands ·
            </span>
          </div>
        </div>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Pop-Up Locations 2026</div>
          <h2 style={h2Style}>Pop-up cohorts will be announced by city</h2>
          <p style={bodyStyle}>
            Aspire Game Academy is launching as a pop-up model, with future cohorts planned in select cities. Join the first cohort and be first to hear when locations open.
          </p>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Early access</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              Be first to receive cohort details, launch updates, and city announcements.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Limited spots</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              Each cohort is designed to stay focused, practical, and high-touch.
            </p>
          </div>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Built to scale</h3>
            <p style={{ color: colors.muted, lineHeight: 1.7, margin: 0 }}>
              The model is designed to expand city by city while keeping the quality high.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Tuition</div>
          <h2 style={h2Style}>Simple and clear</h2>
        </div>

        <div
          className="tuition-grid"
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
              $1,997 USD
            </div>
            <p style={{ color: colors.muted, lineHeight: 1.75, margin: 0 }}>
              Includes 7 live in-person training days, a small team project, practical production exposure, and a certificate of completion.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>What’s Included</h3>
            <p style={{ color: colors.muted, lineHeight: 1.9, margin: 0 }}>
              28 total hours
              <br />
              Live instruction
              <br />
              Small team project
              <br />
              Certificate included
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Teach With Aspire</div>
          <h2 style={h2Style}>Lead a cohort</h2>
          <p style={bodyStyle}>
            Aspire Game Academy is built for experienced industry professionals who can lead, mentor, and bring real studio knowledge into a fast, exciting pop-up learning environment.
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
              Strong communicators with real studio experience and a practical teaching mindset.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

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
          Join the first cohort
        </h2>
        <p
          style={{
            ...bodyStyle,
            margin: "0 auto 34px auto",
            maxWidth: "860px",
          }}
        >
          Limited spots. Early applicants will be first to receive cohort details, launch updates, and city announcements.
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
            Join the First Cohort
          </a>

          <a href={instructorFormLink} style={buttonSecondaryStyle}>
            Apply to Teach
          </a>
        </div>
      </section>
    </main>
  );
}
