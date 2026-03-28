export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#ffffff",
        padding: "80px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* LOGO */}
        <img
          src="/aspiregameacademy.png"
          alt="Aspire Game Academy Logo"
          style={{
            width: "120px",
            marginBottom: "30px",
          }}
        />

        {/* TITLE */}
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Aspire Game Academy
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: "20px",
            color: "#cccccc",
            marginBottom: "40px",
            lineHeight: "1.6",
          }}
        >
          A studio-aligned training academy built to prepare real-world game
          talent in Prince Edward Island.
        </p>

        {/* BUTTON */}
        <a
          href="#"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            background: "#4f46e5",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Apply Now
        </a>
      </div>
    </main>
  );
}
