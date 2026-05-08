import Image from "next/image";
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
    "Global Pop-Ups",
    "3-Day or 7-Day",
    "In-Person",
    "Instructor-Led",
    "Studio Workflows",
    "Aspire Badges",
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

  const programBadges = [
    {
      title: "Production",
      text: "Planning, priorities, team communication, delivery structure, and how work moves across a studio.",
    },
    {
      title: "Game Design",
      text: "Player experience, mechanics, systems thinking, feedback, and iteration.",
    },
    {
      title: "QA + DevQA",
      text: "Testing, bug reporting, build validation, release readiness, and technical quality.",
    },
    {
      title: "Live Ops",
      text: "Events, updates, player flows, retention, support, and post-launch operations.",
    },
    {
      title: "Game Art",
      text: "Visual direction, asset creation, production-ready artwork, and creative collaboration.",
    },
    {
      title: "Technical Foundations",
      text: "Engines, tools, workflows, technical problem-solving, and interactive systems.",
    },
  ];

  const outcomes = [
    {
      title: "Production Thinking",
      text: "Understand how work is planned, prioritized, and delivered across teams.",
    },
    {
      title: "Game Design Awareness",
      text: "Build and iterate on player experiences, systems, and mechanics.",
    },
    {
      title: "Quality & DevQA Skills",
      text: "Test builds, report issues clearly, and support release readiness.",
    },
    {
      title: "Live Ops Understanding",
      text: "Respond to events, updates, player flows, and post-launch realities.",
    },
    {
      title: "Creative Production Output",
      text: "Contribute to visual assets and collaborative production workflows.",
    },
    {
      title: "Technical Confidence",
      text: "Work within engines, tools, and systems that power game development.",
    },
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

      .instructors-grid {
        grid-template-columns: 1fr !important;
      }

      .instructor-card {
        grid-template-columns: 1fr !important;
      }

      .instructor-image-wrap {
        width: 100% !important;
        max-height: 300px !important;
        height: 300px !important;
        margin: 0 auto !important;
      }
    }

    @media (max-width: 980px) and (min-width: 641px) {
      .instructors-grid {
        grid-template-columns: 1fr !important;
      }

      .instructor-card {
        grid-template-columns: 220px minmax(0, 1fr) !important;
      }

      .instructor-image-wrap {
        width: 220px !important;
        height: 280px !important;
      }
    }


      .instructors-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 32px;
        margin-top: 28px;
      }

      .instructor-card {
        position: relative;
        display: grid;
        grid-template-columns: 230px minmax(0, 1fr);
        gap: 18px;
        align-items: stretch;
        height: auto;
        min-height: 0;
        max-height: none;
        padding: clamp(24px, 2.5vw, 28px);
        border-radius: 22px;
        background: rgba(10, 8, 35, 0.82);
        border: 1px solid rgba(145, 125, 255, 0.55);
        box-shadow: 0 14px 38px rgba(0, 0, 0, 0.45), 0 0 22px rgba(186, 93, 255, 0.26), 0 0 30px rgba(92, 212, 255, 0.2);
        overflow: visible;
        transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
      }

      .instructor-card:hover {
        border-color: rgba(221, 156, 255, 0.8);
        box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5), 0 0 26px rgba(204, 115, 255, 0.45), 0 0 36px rgba(85, 205, 255, 0.35);
        transform: translateY(-4px);
      }

      .instructor-image-wrap {
        position: relative;
        width: 230px;
        height: 300px;
        overflow: hidden;
        border-radius: 16px;
        border: 1px solid rgba(121, 217, 255, 0.6);
        box-shadow: 0 0 0 1px rgba(178, 120, 255, 0.3), 0 0 18px rgba(85, 204, 255, 0.22), 0 0 24px rgba(176, 103, 255, 0.2);
      }

      .instructor-image-wrap::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(160deg, rgba(190, 98, 255, 0.18), rgba(86, 200, 255, 0.07));
        pointer-events: none;
      }

      .instructor-image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        transform: scale(1);
        transition: transform 0.3s ease;
      }

      .instructor-card:hover .instructor-image {
        transform: scale(1.02);
      }

      .fred-callout {
        z-index: 3;
        width: fit-content;
        padding: 5px 10px;
        border-radius: 999px;
        border: 1px solid rgba(125, 227, 255, 0.75);
        background: linear-gradient(135deg, rgba(32, 175, 255, 0.28), rgba(153, 76, 255, 0.32));
        box-shadow: 0 0 14px rgba(106, 219, 255, 0.45), 0 0 28px rgba(162, 91, 255, 0.28);
        color: rgba(232, 249, 255, 0.96);
        line-height: 1.2;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.4px;
        text-transform: uppercase;
      }

      .instructor-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: 0;
        height: 100%;
        padding-bottom: 28px;
      }

      .instructor-main {
        display: flex;
        flex-direction: column;
        gap: 16px;
        min-width: 0;
      }

      .instructor-divider {
        height: 1px;
        background: linear-gradient(90deg, rgba(132, 215, 255, 0.05), rgba(132, 215, 255, 0.5), rgba(195, 118, 255, 0.05));
        margin: 0;
      }

      .instructor-bio {
        margin: 0;
        font-size: 1rem;
        line-height: 1.7;
        color: rgba(255,255,255,0.82);
        max-width: 62ch;
      }

      .instructor-badge-wrap {
        margin-top: auto;
        padding-top: 16px;
      }

      .aspire-badge-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border-radius: 999px;
        background: linear-gradient(135deg, rgba(195, 108, 255, 0.98), rgba(69, 188, 255, 0.98));
        border: 1px solid rgba(222, 184, 255, 0.8);
        box-shadow: 0 0 18px rgba(189, 120, 255, 0.56), 0 0 30px rgba(84, 200, 255, 0.45);
        padding: 8px 14px;
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 0.3px;
        color: #f9f6ff;
      }

  `;

  const builtFor = [
    "Future producers",
    "Aspiring QA and Dev QA talent",
    "Technical creatives",
    "Career starters and career shifters",
    "People looking for a faster path into games",
  ];

  const globalInstructors = [
    {
      name: "Fred Dossola",
      role: "Senior Games Producer | Production Systems Specialist",
      location: "UK & France",
      specialty: "Game production, agile workflows, team leadership, pipeline design, AAA development",
      bio: "Senior Games Producer with 11 years of AAA experience across Sony, Cloud Imperium Games, Black Forest Games, and beyond. Fred has worked on titles including Uncharted 4, The Last of Us Part II, and Star Citizen, and helps teams build production systems that support great work without burnout.",
      badge: "ASPIRE BADGE: PRODUCTION",
      image: "/Fred.png",
      imageAlt: "Fred Dossola",
    },
    {
      name: "John Myers",
      role: "Game Creator | Game Design Specialist",
      location: "Los Angeles, USA",
      specialty: "Game design, gameplay systems, team collaboration, production pipelines, mentorship",
      bio: "Experienced game creator with a degree in Game Design and over six years of industry experience across indie startups and large-scale studios. John brings practical insight into how strong games are built, shipped, and supported by healthy creative teams.",
      badge: "ASPIRE BADGE: GAME DESIGN",
      image: "/johnmyers.png",
      imageAlt: "John Myers",
    },
    {
      name: "Aydan Aliyeva",
      role: "Unreal Authorized Instructor | Real-Time Technology Specialist",
      location: "Utrecht, Netherlands",
      specialty: "Unreal Engine 5, real-time systems, environment design, technical workflows, interactive experiences",
      bio: "Unreal Authorized Instructor focused on helping creators understand the systems behind real-time experiences. Aydan specializes in Unreal Engine 5, environment design, technical workflows, and industry-level production standards.",
      badge: "ASPIRE BADGE: TECHNICAL FOUNDATIONS",
      image: "/aydan.png",
      imageAlt: "Aydan Aliyeva",
    },
    {
      name: "Zachary Kosma",
      role: "Creative Technologist | XR & Product Systems",
      location: "Las Vegas / Los Angeles, USA",
      specialty: "XR, Unity, product systems, monetization strategy, QA, indie game development",
      bio: "Creative technologist and games leader with experience across education, indie development, XR, QA, Unity, and product strategy. Zachary helps developers build interactive experiences that are playable, scalable, and commercially thoughtful.",
      badge: "ASPIRE BADGE: INTERACTIVE SYSTEMS",
      image: "/zachary.png",
      imageAlt: "Zachary Kosma",
    },
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
            <h1
              style={{
                fontSize: "clamp(50px, 8vw, 94px)",
                lineHeight: 0.96,
                fontWeight: 900,
                margin: "0 0 22px 0",
                letterSpacing: "-2.5px",
                maxWidth: "980px",
                textShadow:
                  "0 0 16px rgba(114,230,255,0.25), 0 0 34px rgba(141,91,255,0.22)",
              }}
            >
              Global Pop-Up AAA
              <br />
              <span style={{ color: colors.cyan }}>Game Academy</span>
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
              Real-world AAA game industry training led by working professionals.
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
              Aspire Game Academy brings hands-on production, QA, design, live ops, art, and technical training to cities around the world through immersive pop-up learning experiences.
              <br />
              <br />
              Train in the same workflows, tools, and thinking used inside AAA game studios.
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
                      color: "#ffcf45",
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    Global Cohort Experience
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
                    <br />
                    Badge it.
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
                    Students complete real-world AAA-style challenges, build practical skills, and earn Aspire Badges across production, game design, QA + DevQA, live ops, game art, and technical foundations.
                  </p>
                </div>

                <div
                  style={{
                    width: "100%",
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow: "0 0 28px rgba(255, 207, 69, 0.24)",
                  }}
                >
                  <img
                    src="/Aspire-hero.png"
                    loading="eager"
                    decoding="async"
                    alt="Aspire Game Academy yellow astronaut at a computer"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
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
                    ["Format", "Pop-Up Academy"],
                    ["Options", "3-Day or 7-Day"],
                    ["Focus", "Real Studio Workflows"],
                    ["Outcome", "Aspire Badges"],
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
          <div style={smallLabelStyle}>WHY IT’S DIFFERENT</div>
          <h2 style={h2Style}>Students don’t just learn games. They move through the production pipeline.</h2>
          <p style={{ ...bodyStyle, color: colors.mint, fontWeight: 800 }}>
            Aspire Game Academy is built around six real-world production tracks that reflect how modern studios actually build, ship, operate, and evolve games.
          </p>
          <p style={bodyStyle}>
            Students work in focused teams across Production, Game Design, QA + DevQA, Live Ops, Game Art, and Technical Foundations. Each badge represents a practical studio function, helping students understand where they fit, how teams collaborate, and how creative work becomes a shipped experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            {
              title: "Production",
              text: "Planning, coordination, delivery cycles, team communication, and how work moves across a studio.",
            },
            {
              title: "Game Design",
              text: "Player experience, mechanics, systems thinking, iteration, feedback, and creative problem-solving.",
            },
            {
              title: "QA + DevQA",
              text: "Testing, bug reporting, build validation, technical quality, and how teams protect the player experience.",
            },
            {
              title: "Live Ops",
              text: "Ongoing updates, events, player support, retention, community rhythm, and post-launch operations.",
            },
            {
              title: "Game Art",
              text: "Visual storytelling, asset creation, style direction, production-ready artwork, and creative collaboration.",
            },
            {
              title: "Technical Foundations",
              text: "Game engines, tools, workflows, technical problem-solving, and the systems behind interactive experiences.",
            },
          ].map((track) => (
            <div key={track.title} style={cardStyle}>
              <div
                style={{
                  color: colors.cyan,
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "1.6px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                ASPIRE BADGE TRACK
              </div>
              <h3 style={cardTitleStyle}>{track.title}</h3>
              <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>{track.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>WHAT YOU’LL ACTUALLY DO</div>
          <h2 style={h2Style}>Move through the real game production pipeline</h2>
          <p style={bodyStyle}>
            Students work through practical studio-style challenges across six Aspire Badge tracks: Production, Game Design, QA + DevQA, Live Ops, Game Art, and Technical Foundations. Instead of just listening, they learn how modern game teams plan, build, test, launch, support, and improve creative work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            {
              title: "Production",
              text: "Plan the work, organize priorities, communicate across roles, and understand how a project moves from idea to delivery.",
            },
            {
              title: "Game Design",
              text: "Shape player experience, build mechanics, test ideas, respond to feedback, and improve the game through iteration.",
            },
            {
              title: "QA + DevQA",
              text: "Find issues, report clearly, validate builds, protect quality, and understand how QA connects directly to development.",
            },
            {
              title: "Live Ops",
              text: "Explore events, updates, player flows, retention, support, and what happens after a game goes live.",
            },
            {
              title: "Game Art",
              text: "Create visual assets, understand style direction, collaborate with production, and learn how art supports gameplay.",
            },
            {
              title: "Technical Foundations",
              text: "Work with engines, tools, workflows, technical problem-solving, and the systems that support interactive experiences.",
            },
          ].map((track) => (
            <div key={track.title} style={cardStyle}>
              <div
                style={{
                  color: colors.cyan,
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "1.6px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                ASPIRE BADGE TRACK
              </div>
              <h3 style={cardTitleStyle}>{track.title}</h3>
              <p style={{ margin: 0, color: colors.muted, lineHeight: 1.7 }}>{track.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>CURRICULUM</div>
          <h2 style={h2Style}>Built around real production systems — not theory</h2>
          <p style={bodyStyle}>
            The Aspire Game Academy curriculum is structured around six real-world production tracks: Production, Game Design, QA + DevQA, Live Ops, Game Art, and Technical Foundations. Each track reflects how modern studios actually build, ship, operate, and evolve games.
          </p>
          <p style={bodyStyle}>
            Students don’t just learn concepts — they experience how work flows between roles, how decisions are made under pressure, and how creative ideas become finished products.
          </p>
          <p style={bodyStyle}>
            This structure replaces traditional lecture-based learning with a system that mirrors real production environments, giving students clarity, confidence, and practical experience across the full game development pipeline.
          </p>
        </div>
      </section>

      <div style={dividerStyle} />

      <section id="curriculum" style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>INSIDE THE PROGRAM</div>
          <h2 style={h2Style}>A flexible badge-based learning experience</h2>
          <p style={{ ...bodyStyle, color: colors.mint, fontWeight: 800 }}>
            Students move through practical studio-style challenges across six Aspire Badge tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {programBadges.map((item) => (
            <div key={item.title} style={cardStyle}>
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
          <div style={smallLabelStyle}>OUTCOME</div>
          <h2 style={h2Style}>Students leave with real production capability</h2>
          <p style={bodyStyle}>
            Through the Aspire Badge system, students develop practical experience across production, design, QA + DevQA, live operations, art, and technical foundations. The focus is on how work actually happens inside modern game teams — not just learning concepts, but applying them in real scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {outcomes.map((item) => (
            <div key={item.title} style={cardStyle}>
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

      <section style={{ ...sectionStyle, maxWidth: "1500px", paddingTop: "80px", paddingBottom: "80px", position: "relative", overflow: "hidden", borderRadius: "26px", background: "radial-gradient(circle at 12% 15%, rgba(80, 213, 255, 0.16), transparent 26%), radial-gradient(circle at 90% 10%, rgba(204, 92, 255, 0.16), transparent 28%), linear-gradient(135deg, rgba(4, 10, 32, 0.92), rgba(20, 8, 46, 0.9))" }}>
        <div style={sectionIntroStyle}>
          <div style={{ ...smallLabelStyle, color: "rgba(138, 222, 255, 0.95)" }}>MEET THE</div>
          <h2 style={{ ...h2Style, marginBottom: "14px", fontSize: "clamp(44px, 7vw, 86px)", fontWeight: 900 }}> 
            <span style={{ background: "linear-gradient(92deg, #ff66ce 0%, #b97cff 48%, #6ed8ff 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>GLOBAL INSTRUCTORS</span>
          </h2>
          <p style={bodyStyle}>
            A growing network of experienced game industry instructors bringing real studio knowledge into Aspire Game Academy cohorts around the world.
          </p>
        </div>

        <div className="instructors-grid">
          {globalInstructors.map((instructor) => (
            <article key={instructor.name} className="instructor-card">
              <div className="instructor-image-wrap">
                <Image src={instructor.image} alt={instructor.name} width={640} height={440} className="instructor-image" />
              </div>

              <div className="instructor-content">
                <div className="instructor-main">
                  {instructor.name === "Fred Dossola" ? (
                    <div className="fred-callout">
                      LIVE COHORT<br />OXFORD • JUNE 12–14
                    </div>
                  ) : null}
                  <h3 style={{ margin: 0, fontSize: "clamp(26px, 2.6vw, 32px)", fontWeight: 800, textShadow: "0 0 16px rgba(125, 219, 255, 0.24)" }}>{instructor.name}</h3>
                  <p style={{ margin: 0, color: "rgba(197, 237, 255, 0.72)", fontWeight: 600 }}>{instructor.location}</p>
                  <p style={{ margin: 0, lineHeight: 1.6, color: "rgba(255,255,255,0.95)", fontWeight: 700, fontSize: "17px" }}>{instructor.role}</p>
                  <p style={{ margin: 0, lineHeight: 1.65, color: "rgba(214, 236, 255, 0.92)" }}><strong style={{ fontWeight: 800 }}>Specialty:</strong> <span style={{ fontWeight: 500 }}>{instructor.specialty}</span></p>
                  <div className="instructor-divider" />
                  <p className="instructor-bio">{instructor.bio}</p>
                </div>
                <div className="instructor-badge-wrap">
                  <span className="aspire-badge-pill">✦ {instructor.badge}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p style={{ ...bodyStyle, marginTop: "20px", color: colors.soft, fontSize: "16px", maxWidth: "none", textAlign: "center" }}>
          More global instructors are being added as new city cohorts open.
        </p>

        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <a href={instructorFormLink} style={buttonPrimaryStyle}>
            Apply to Teach with Aspire Game Academy
          </a>
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
                marginBottom: "8px",
                letterSpacing: "-1px",
              }}
            >
              $1,985 USD
            </div>
            <p
              style={{
                color: "rgba(220, 252, 255, 0.72)",
                fontSize: "14px",
                lineHeight: 1.6,
                textAlign: "center",
                margin: "0 0 14px 0",
              }}
            >
              Limited cohort — 10 to 20 students per city
            </p>
            <p style={{ color: colors.muted, lineHeight: 1.75, margin: "0 0 18px 0" }}>
              Train inside real game production systems with direct exposure to how modern
              teams plan, build, test, launch, and operate games. The experience is
              structured around Aspire Badge tracks, giving students practical,
              portfolio-ready experience across multiple disciplines.
            </p>
            <div style={{ textAlign: "center", marginBottom: "12px" }}>
              <a
                href={studentFormLink}
                style={{
                  ...buttonPrimaryStyle,
                  background: "linear-gradient(135deg, #44d8ff 0%, #3587ff 100%)",
                  boxShadow: "0 14px 34px rgba(68, 216, 255, 0.34)",
                }}
              >
                Apply Now
              </a>
            </div>
            <p
              style={{
                color: "rgba(220, 252, 255, 0.74)",
                fontSize: "14px",
                lineHeight: 1.6,
                textAlign: "center",
                margin: "0 0 8px 0",
              }}
            >
              Built around real production workflows. Not theory.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>What’s Included</h3>
            <p style={{ color: colors.muted, lineHeight: 1.9, margin: 0 }}>
              • Live instruction from AAA industry professionals
              <br />
              • Aspire Badge tracks (Production, Design, QA + DevQA, Live Ops, Art,
              Technical)
              <br />
              • Real production workflows (not theory)
              <br />
              • Team-based production experience
              <br />
              • Portfolio-ready project work
              <br />
              • Certificate of completion
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>TEACH WITH ASPIRE</div>
          <h2 style={h2Style}>Lead a badge track</h2>
          <p style={bodyStyle}>
            Aspire Game Academy is built for experienced industry professionals who can lead, mentor, and guide students through real production workflows. Instructors don’t just teach — they lead one of the Aspire Badge tracks, helping students understand how modern teams actually operate.
          </p>
        </div>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Instructor Model</h3>
            <p style={{ color: colors.muted, lineHeight: 1.85, margin: 0 }}>
              70 / 30 revenue split per student
              <br />
              70% to instructor
              <br />
              30% to Aspire Game Academy
              <br />
              Simple, scalable compensation tied to cohort performance
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Program Format</h3>
            <p style={{ color: colors.muted, lineHeight: 1.85, margin: 0 }}>
              Flexible delivery options
              <br />
              3-day intensive or 7-day cohort formats
              <br />
              Designed around badge tracks and real production workflows
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Ideal Instructor</h3>
            <p style={{ color: colors.muted, lineHeight: 1.85, margin: 0 }}>
              Experienced game industry professionals who can lead a badge track, mentor students, and bring real studio workflows into a high-energy, practical learning environment
            </p>
          </div>
        </div>
      </section>

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
            margin: "0 auto 24px auto",
            maxWidth: "920px",
          }}
        >
          <div
            style={{
              ...smallLabelStyle,
              fontSize: "11px",
              letterSpacing: "2px",
              marginBottom: "10px",
              color: "rgba(114,230,255,0.76)",
            }}
          >
            GLOBAL POP-UP LOCATIONS
          </div>
          <div className="marquee-wrapper" style={{ opacity: 0.82 }}>
            <div className="marquee-track">
              <span>
                Los Angeles, CA · San Francisco, CA · Las Vegas, NV · Chicago, IL · Austin, TX · St. Petersburg, FL · Charlottetown, Canada · Ottawa, Canada · Across England · Across France · Amsterdam, Netherlands ·
              </span>
              <span>
                Los Angeles, CA · San Francisco, CA · Las Vegas, NV · Chicago, IL · Austin, TX · St. Petersburg, FL · Charlottetown, Canada · Ottawa, Canada · Across England · Across France · Amsterdam, Netherlands ·
              </span>
            </div>
          </div>
        </div>
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
