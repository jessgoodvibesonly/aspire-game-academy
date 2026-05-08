export default function Home() {
  const colors = {
    bg0: "#04060c",
    bg1: "#0a0f1a",
    bg2: "#140a22",
    cardBorder: "rgba(255,255,255,0.12)",
    text: "#ffffff",
    muted: "rgba(255,255,255,0.78)",
    soft: "rgba(255,255,255,0.62)",
    cyan: "#72e6ff",
    mint: "#b8ffe8",
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

  const containerStyle = { maxWidth: "1200px", margin: "0 auto" } as const;
  const sectionStyle = { maxWidth: "1200px", margin: "0 auto", padding: "clamp(56px, 8vw, 78px) 0" } as const;
  const dividerStyle = {
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
    margin: "0 auto",
    maxWidth: "1200px",
  } as const;

  const smallLabelStyle = { color: colors.cyan, fontSize: "14px", fontWeight: 800, letterSpacing: "3px", marginBottom: "18px", textTransform: "uppercase" as const };
  const h2Style = { fontSize: "clamp(34px, 4vw, 54px)", lineHeight: 1.06, fontWeight: 800, margin: "0 0 18px 0", letterSpacing: "-1.5px" };
  const bodyStyle = { fontSize: "clamp(18px, 1.8vw, 22px)", lineHeight: 1.72, color: colors.muted, margin: "0 0 18px 0", maxWidth: "920px" };

  const cardStyle = {
    background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
    border: `1px solid ${colors.cardBorder}`,
    borderRadius: "22px",
    padding: "26px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.02) inset",
    backdropFilter: "blur(8px)",
  } as const;

  const buttonPrimaryStyle = {
    display: "inline-block", background: "linear-gradient(135deg, #6f63ff 0%, #4b43ff 100%)", padding: "18px 30px", borderRadius: "14px", color: "#ffffff",
    textDecoration: "none", fontWeight: 800, fontSize: "18px", boxShadow: "0 14px 34px rgba(95, 78, 255, 0.34)", border: "1px solid rgba(255,255,255,0.10)", minWidth: "220px", textAlign: "center",
  } as const;

  const buttonSecondaryStyle = {
    display: "inline-block", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.14)", padding: "18px 30px", borderRadius: "14px",
    color: "#ffffff", textDecoration: "none", fontWeight: 700, fontSize: "18px", backdropFilter: "blur(6px)", minWidth: "220px", textAlign: "center",
  } as const;

  const badgeTracks = [
    {
      title: "Production Systems",
      instructor: "Fred Dossola",
      focus: "How games actually ship",
      curriculum: [
        "Game production fundamentals (Agile, Scrum, sprint planning)",
        "Building production pipelines",
        "Cross-team communication (design, engineering, art)",
        "Risk management and milestone tracking",
        "Live production simulation (real studio scenarios)",
      ],
      outcome: "Students understand how to manage and ship a game in a real production environment.",
      badge: "ASPIRE BADGE: PRODUCTION SYSTEMS",
    },
    {
      title: "Game Design",
      instructor: "John Myers",
      focus: "How games feel and function",
      curriculum: ["Core gameplay loop design", "Player experience and engagement", "Systems design and iteration", "Balancing mechanics and progression", "Collaborative design workflows"],
      outcome: "Students learn how to design systems that are fun, functional, and shippable.",
      badge: "ASPIRE BADGE: GAME DESIGN",
    },
    {
      title: "Technical Foundations",
      instructor: "Aydan Aliyeva",
      focus: "How real-time systems work",
      curriculum: ["Unreal Engine 5 fundamentals", "Real-time systems and performance", "Environment and level design basics", "Technical workflows used in studios", "Understanding pipelines from a technical perspective"],
      outcome: "Students gain the technical foundation needed to work inside real-time production environments.",
      badge: "ASPIRE BADGE: TECHNICAL FOUNDATIONS",
    },
    {
      title: "Interactive Systems",
      instructor: "Zachary Kosma",
      focus: "How products and systems scale",
      curriculum: ["XR and interactive system design", "Unity fundamentals and workflows", "Monetization strategy basics", "QA and testing workflows", "Product thinking for games and experiences"],
      outcome: "Students understand how to build interactive systems that are scalable and commercially viable.",
      badge: "ASPIRE BADGE: INTERACTIVE SYSTEMS",
    },
  ];

  const responsiveStyles = `
    .badge-tracks-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:24px; }
    @media (max-width: 980px) {
      .hero-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 28px !important; }
      .badge-tracks-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 640px) { .cta-row a { width: 100%; } .metrics-grid { grid-template-columns:minmax(0,1fr)!important; } }
  `;

  return (
    <main style={pageStyle}>
      <style>{responsiveStyles}</style>

      <section style={{ ...containerStyle, paddingTop: "56px", paddingBottom: "84px" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(320px, 0.9fr)", gap: "44px", alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "clamp(50px, 8vw, 94px)", lineHeight: 0.96, fontWeight: 900, margin: "0 0 22px 0" }}>Global Pop-Up AAA<br /><span style={{ color: colors.cyan }}>Game Academy</span></h1>
            <p style={{ fontSize: "clamp(21px, 2.2vw, 30px)", lineHeight: 1.38, fontWeight: 800, color: colors.mint, margin: "0 0 18px 0" }}>Real-world game industry training led by working professionals.</p>
            <p style={{ ...bodyStyle, marginBottom: "32px" }}>Choose one focused Aspire Badge Track and build practical experience through structured cohort sessions that mirror how studio teams plan, collaborate, and deliver.</p>
            <div className="cta-row" style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
              <a href={studentFormLink} style={buttonPrimaryStyle}>Join the First Cohort</a>
              <a href={instructorFormLink} style={buttonSecondaryStyle}>Apply to Teach</a>
            </div>
          </div>

          <div style={{ borderRadius: "30px", padding: "26px", background: "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))", border: "1px solid rgba(255,255,255,0.12)" }}>
            <img src="/Aspire-hero.png" alt="Aspire Game Academy yellow astronaut at a computer" style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px", marginBottom: "16px" }} />
            <div className="metrics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "14px" }}>
              {[["Format", "In-person cohort"], ["Options", "3-Day or 7-Day"], ["Tracks", "4 structured paths"], ["Outcome", "1 Aspire Badge"],].map(([label, value]) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: "16px", padding: "16px" }}>
                  <div style={{ color: colors.soft, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "6px" }}>{label}</div>
                  <div style={{ color: colors.text, fontSize: "20px", fontWeight: 800 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={sectionStyle}>
        <div>
          <div style={smallLabelStyle}>CHOOSE YOUR TRACK</div>
          <h2 style={h2Style}>Choose Your Aspire Badge Track</h2>
          <p style={bodyStyle}>Each Aspire Badge represents a focused learning track aligned with real roles inside game studios. Students choose a path and build practical experience through structured, instructor-led sessions.</p>
        </div>

        <div className="badge-tracks-grid" style={{ marginTop: "26px" }}>
          {badgeTracks.map((track) => (
            <article key={track.title} style={cardStyle}>
              <div style={{ color: colors.cyan, fontSize: "12px", fontWeight: 800, letterSpacing: "1.3px", textTransform: "uppercase", marginBottom: "8px" }}>{track.badge}</div>
              <h3 style={{ margin: "0 0 8px 0", fontSize: "28px", fontWeight: 800 }}>{track.title}</h3>
              <p style={{ margin: "0 0 16px 0", color: "rgba(200, 240, 255, 0.85)", fontWeight: 600 }}>Led by {track.instructor}</p>
              <p style={{ margin: "0 0 8px 0", fontWeight: 800 }}>Focus</p>
              <p style={{ margin: "0 0 14px 0", color: colors.muted }}>{track.focus}</p>
              <p style={{ margin: "0 0 8px 0", fontWeight: 800 }}>Curriculum</p>
              <ul style={{ margin: "0 0 14px 18px", color: colors.muted, lineHeight: 1.6 }}>{track.curriculum.map((item) => <li key={item}>{item}</li>)}</ul>
              <p style={{ margin: "0 0 8px 0", fontWeight: 800 }}>Outcome</p>
              <p style={{ margin: 0, color: colors.muted }}>{track.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <div style={dividerStyle} />

      <section style={sectionStyle}>
        <div>
          <div style={smallLabelStyle}>PROGRAM STRUCTURE</div>
          <h2 style={h2Style}>Clear format. Clear path. Clear outcome.</h2>
          <p style={bodyStyle}>The academy is delivered in compact in-person cohorts with guided sessions, team collaboration, and live project exercises. You select one track, train in that discipline, and complete the program with a defined badge outcome. See the Badge Tracks section above for full curriculum details.</p>
        </div>
      </section>
    </main>
  );
}
