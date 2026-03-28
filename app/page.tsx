export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%" }}>
        
        {/* LOGO */}
        <img
          src="/aspiregameacademylogo.png"
          alt="Aspire Game Academy Logo"
          style={{
            width: "120px",
            marginBottom: "30px",
          }}
        />

        {/* TITLE */}
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 700,
            marginBottom: "20px",
            lineHeight: "1.1",
          }}
        >
          Aspire Game Academy
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: "20px",
            color: "#aaa",
            marginBottom: "40px",
          }}
        >
          A studio-aligned training academy built to prepare real-world game talent in Prince Edward Island.
        </p>

        {/* BUTTON */}
        <a
          href="#"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #6a5cff, #4b3cff)",
            padding: "14px 28px",
            borderRadius: "10px",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Apply Now
        </a>
      </div>
    </main>
  );
}
