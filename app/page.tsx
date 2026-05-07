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

  const globalInstructors = [
    {
      name: "Fred Dossola",
      role: "Senior Games Producer | Production Systems Specialist",
      location: "UK & France",
      languages: "English, Spanish",
      specialties: "Game production, agile workflows, team leadership, pipeline design, AAA development",
      bio: "I am a Senior Games Producer with 11 years of AAA experience across Sony, Cloud Imperium Games, Black Forest Games, and beyond, shipping titles like Uncharted 4, The Last of Us Part II, and Star Citizen. I grew up in the 80s playing arcade cabinets and Atari at home, and that love for games never went away, it just turned into a career. Today I specialize in building production systems and team cultures that help studios ship great work without burning out teams. When I'm not performing production heroics, I'm probably still playing games, watching anime, or diving into something equally nerdy.",
      courseFocus: "Production leadership, agile workflows, and real-world game development operations. Students will learn how to manage teams, structure production pipelines, and ship games efficiently while maintaining healthy, high-performing team environments.",
      badge: "Aspire Badge: Production",
      image: "/Fred.png",
      imageAlt: "Fred Dossola",
    },
    {
      name: "John Myers",
      role: "Game Creator | Game Design Specialist",
      location: "Los Angeles, USA",
      languages: "English",
      specialties: "Game design, gameplay systems, team collaboration, production pipelines, mentorship",
      bio: "I am an experienced game creator with a degree in Game Design and over six years of industry experience spanning both indie startups and large-scale studios. I’ve worked across diverse teams, platforms, and production pipelines, giving me a well-rounded perspective on how great games are built and shipped. I’m passionate about the medium of play and love sharing practical, real-world insights with others. I’m especially driven by mentorship, collaboration, and helping foster strong, supportive creative communities where developers at all levels can grow and succeed.",
      courseFocus: "Game design foundations, gameplay systems, and real-world production workflows, from concept to playable experience. Students will learn how to think like a game creator, collaborate effectively within a team, and turn ideas into functional, engaging gameplay.",
      badge: "Aspire Badge: Game Design",
      image: "/johnmyers.png",
      imageAlt: "John Myers",
    },
    {
      name: "Aydan Aliyeva",
      role: "Unreal Authorized Instructor | Real-Time Technology Specialist",
      location: "Utrecht, Netherlands",
      languages: "English",
      specialties: "Unreal Engine 5, real-time systems, environment design, technical workflows, interactive experiences",
      bio: "I am an Unreal Authorized Instructor dedicated to helping creators build the technical foundation needed to bring ambitious ideas to life. My focus goes beyond simply teaching tools — I guide developers in understanding the underlying systems that power real-time experiences. I specialize in Unreal Engine 5, from skeletal mesh systems to immersive environment design, with a strong emphasis on industry-level standards and workflows. Through mentorship with organizations like IGDA and collaboration on serious game projects, I support developers in building the confidence and technical depth required to innovate in a rapidly evolving real-time landscape.",
      courseFocus: "Unreal Engine 5 fundamentals, real-time systems, and technical workflows for modern game development. Students will learn how to build, optimize, and understand core systems including environments, assets, and interactive elements while working within industry-standard pipelines.",
      badge: "Aspire Badge: Technical Foundations",
      image: "/aydan.png",
      imageAlt: "Aydan Aliyeva",
    },
    {
      name: "Zachary Kosma",
      role: "Creative Technologist | XR & Product Systems",
      location: "Las Vegas / Los Angeles, USA",
      languages: "English",
      specialties: "XR, Unity, product systems, monetization strategy, QA, indie game development",
      bio: "Zachary Kosma is a creative technologist and games leader with a background spanning education, indie game development, XR, QA, Unity, and monetization strategy. His work sits at the intersection of creativity, technology, product thinking, and real-time development. He helps developers understand how to build engaging interactive experiences while also thinking strategically about the systems, audiences, and decisions that support them. With experience across technical development, education, QA, and product strategy, Zachary brings a practical, future-focused perspective to students who want to build games and immersive experiences that are playable, scalable, and commercially thoughtful.",
      courseFocus: "XR prototyping, Unity foundations, product systems, and monetization strategy for modern interactive experiences. Students will learn how to shape an idea into a playable prototype, understand the systems behind engagement and revenue, and make technical and strategic decisions that support long-term viability.",
      badge: "Aspire Badge: Technical Foundations",
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
              Learn how real games are built, shipped, and operated — directly from industry professionals. Includes live instruction, a small team project, real production exposure, and a certificate of completion.
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
              Built by AAA industry professionals. Not theory. Real production.
            </p>
            <p
              style={{
                color: "rgba(220, 252, 255, 0.62)",
                fontSize: "13px",
                lineHeight: 1.5,
                textAlign: "center",
                margin: 0,
              }}
            >
              First cohort launching now
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>What’s Included</h3>
            <p style={{ color: colors.muted, lineHeight: 1.9, margin: 0 }}>
              • Live instruction (AAA-led)
              <br />
              • Small team production project
              <br />
              • Aspire Badge (verified industry credential)
              <br />
              • Real production workflows (not theory)
              <br />
              • Portfolio-ready experience
              <br />
              • Certificate of completion
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
              70 / 30 revenue split per student
              <br />
              70% to instructor
              <br />
              30% to Aspire Game Academy
              <br />
              Simple, scalable compensation
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Program schedule</h3>
            <p style={{ color: colors.muted, lineHeight: 1.85, margin: 0 }}>
              Two flexible format options
              <br />
              3-day intensive: 9:00 AM to 5:00 PM
              <br />
              7-day cohort: 10:00 AM to 2:00 PM
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Ideal fit</h3>
            <p style={{ color: colors.muted, lineHeight: 1.85, margin: 0 }}>
              Experienced game industry professionals who can lead, mentor, and teach practical studio workflows in a high-energy learning environment.
            </p>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={sectionStyle}>
        <div style={sectionIntroStyle}>
          <div style={smallLabelStyle}>Global Faculty</div>
          <h2 style={h2Style}>Meet the Global Instructors</h2>
          <p style={bodyStyle}>
            Meet a growing network of experienced game industry instructors bringing global studio perspective into each Aspire cohort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {globalInstructors.map((instructor) => (
            <div key={instructor.name} className="flex flex-col">
              <div className="bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/10 h-full flex flex-col">
                {instructor.image ? (
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={400}
                    height={500}
                    className="w-full h-[400px] object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full h-[400px] grid place-items-center text-white/75 font-bold tracking-wider uppercase text-xs text-center p-4">
                    Photo Placeholder
                  </div>
                )}

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-1">{instructor.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{instructor.location}</p>
                  <p className="text-xs text-purple-300 mb-3">
                    {instructor.languages.split(",").map((language) => language.trim()).join(" • ")}
                  </p>
                  <p className="text-sm text-gray-200 leading-relaxed mb-2">{instructor.role}</p>
                  <p className="text-sm text-gray-200 leading-relaxed mb-2">
                    <strong>Specialty Areas:</strong> {instructor.specialties}
                  </p>
                  <p className="text-sm text-gray-200 leading-relaxed flex-grow">{instructor.bio}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mt-2 mb-0">
                    <strong>Course Focus:</strong> {instructor.courseFocus}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block text-xs bg-purple-600/80 text-white px-3 py-1 rounded-full">
                      {instructor.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            ...bodyStyle,
            fontSize: "16px",
            marginTop: "18px",
            color: colors.soft,
            maxWidth: "none",
          }}
        >
          More global instructors are being added as new city cohorts open.
        </p>

        <div
          style={{
            marginTop: "26px",
            display: "grid",
            gap: "10px",
            textAlign: "center",
          }}
        >
          {[
            ["Fred Dossola", "How Games Ship"],
            ["John Myers", "How Games Feel"],
            ["Aydan Aliyeva", "How Games Work"],
            ["Zachary Kosma", "How Games Scale"],
          ].map(([name, focus]) => (
            <p
              key={name}
              style={{
                margin: 0,
                color: "rgba(224, 255, 255, 0.92)",
                textShadow: "0 0 10px rgba(95, 220, 255, 0.34)",
                letterSpacing: "0.2px",
                lineHeight: 1.55,
              }}
            >
              <strong style={{ fontWeight: 800 }}>{name}</strong> → {focus}
            </p>
          ))}
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
