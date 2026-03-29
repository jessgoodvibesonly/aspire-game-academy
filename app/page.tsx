export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(0,255,255,0.12), transparent 25%), radial-gradient(circle at top right, rgba(153,0,255,0.14), transparent 30%), linear-gradient(135deg, #05070d 0%, #090d18 45%, #120a1f 100%)",
        color: "#ffffff",
        padding: "48px 32px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
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

          <div
            style={{
              color: "#72e6ff",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "3px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Aspire Agency Global Inc.
          </div>

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
            Aspire Game Academy
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
            Industry-aligned training built to prepare real-world game talent in Prince Edward Island.
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
            Aspire Game Academy is designed to prepare emerging talent for real opportunities in game development,
            production, design, QA, studio operations, and interactive media.
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
            Built with practical application in mind, the academy connects learning with real workflows, real tools,
            and real-world readiness.
          </p>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #6f63ff 0%, #4e43ff 100%)",
                padding: "18px 34px",
                borderRadius: "12px",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "20px",
                boxShadow: "0 10px 30px rgba(95, 78, 255, 0.35)",
              }}
            >
              Apply Now
            </a>

            <a
              href="#"
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.14)",
                padding: "18px 34px",
                borderRadius: "12px",
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
