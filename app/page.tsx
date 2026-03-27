export default function Home() {
  return (
    <main style={{ padding: "40px", color: "white", background: "#050505", minHeight: "100vh" }}>
      
      <h1 style={{ fontSize: "48px", fontWeight: 800 }}>
        Aspire Game Academy
      </h1>

      <p style={{ fontSize: "20px", marginTop: "20px", maxWidth: "700px" }}>
        A studio-aligned training academy built to prepare real-world game talent in Prince Edward Island.
      </p>

      <div style={{ marginTop: "40px" }}>
        <img 
          src="/aspiregameacademy.png" 
          alt="Aspire Game Academy Logo" 
          style={{ width: "200px" }}
        />
      </div>

      <div style={{ marginTop: "40px" }}>
        <a href="mailto:jessica@aspireagencyglobal.com">
          Apply Now
        </a>
      </div>

    </main>
  );
}
