"use client";

import Link from "next/link";

export default function Page3() {
  const clinicalTrials = [
    {
      id: "NCT06662890",
      title: "Post-Bypass Enhanced Recovery Protocol",
      description:
        "A comprehensive study evaluating novel medication combinations and rehabilitation protocols to improve recovery outcomes following coronary artery bypass surgery.",
      phase: "Phase III",
      status: "Recruiting",
      location: "Cardiac Surgery Centers",
      duration: "18 months",
      eligibility: "Adults 18-75 with recent CABG surgery",
      benefits:
        "Access to advanced recovery protocols and next-generation cardiac medications",
    },
    {
      id: "NCT05512345",
      title: "Next-Generation Antiplatelet Therapy for Heart Patients",
      description:
        "Investigating a new class of antiplatelet medications that may provide superior protection against blood clots with reduced bleeding risk compared to current standard treatments.",
      phase: "Phase II",
      status: "Recruiting",
      location: "Cardiology Research Centers",
      duration: "24 months",
      eligibility: "Post-bypass patients with suboptimal medication response",
      benefits:
        "Potential for better blood clot prevention with fewer side effects",
    },
    {
      id: "NCT07789012",
      title: "Personalized Cardiac Medication Optimization",
      description:
        "Using genetic testing and AI-driven analysis to identify the most effective medication combinations for individual heart patients, particularly those who haven't responded well to standard treatments.",
      phase: "Phase II",
      status: "Recruiting",
      location: "Precision Medicine Clinics",
      duration: "12 months",
      eligibility:
        "Heart patients with medication intolerance or poor response",
      benefits:
        "Tailored medication plan based on your unique genetic profile and medical history",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <Link href="/page2" style={{ textDecoration: "none" }}>
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Med
            <span
              style={{
                color: "#E16308",
                position: "relative",
                display: "inline-block",
                marginLeft: "0.25rem",
              }}
            >
              <span
                className="animate-obfuscate"
                style={{ position: "absolute", top: 0, left: 0 }}
              >
                Disha
              </span>
              <span
                className="animate-obfuscate-hindi"
                style={{ position: "absolute", top: 0, left: 0 }}
              >
                दिशा
              </span>
              <span style={{ visibility: "hidden" }}>Disha</span>
            </span>
          </h1>
        </Link>
        <p style={{ fontSize: "1.125rem", color: "white" }}>
          Clinical Trials Matched for You
        </p>
      </div>

      {/* Clinical Trials Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "1400px",
          marginBottom: "2rem",
        }}
      >
        {clinicalTrials.map((trial, index) => (
          <div
            key={trial.id}
            style={{
              background: "white",
              borderRadius: "1rem",
              padding: "2rem",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e2e8f0",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0, 0, 0, 0.1)";
            }}
          >
            {/* Trial Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "#0C5367",
                    marginBottom: "0.5rem",
                    lineHeight: "1.3",
                  }}
                >
                  {trial.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    fontWeight: "600",
                    fontFamily: "monospace",
                  }}
                >
                  {trial.id}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "0.25rem",
                }}
              >
                <span
                  style={{
                    background: "#E16308",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "1rem",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  {trial.phase}
                </span>
                <span
                  style={{
                    background: "#10b981",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "1rem",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  {trial.status}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "0.95rem",
                color: "#374151",
                lineHeight: "1.6",
                marginBottom: "1.5rem",
              }}
            >
              {trial.description}
            </p>

            {/* Trial Details */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#6b7280",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.25rem",
                  }}
                >
                  Location
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  {trial.location}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#6b7280",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.25rem",
                  }}
                >
                  Duration
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  {trial.duration}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#6b7280",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.25rem",
                  }}
                >
                  Eligibility
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  {trial.eligibility}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#6b7280",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.25rem",
                  }}
                >
                  Benefits
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  {trial.benefits}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <button
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #E16308 0%, #ff7a1a 100%)",
                color: "white",
                fontWeight: "600",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.75rem",
                border: "none",
                cursor: "pointer",
                fontSize: "0.875rem",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(225, 99, 8, 0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(225, 99, 8, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(225, 99, 8, 0.3)";
              }}
            >
              Learn More & Apply
            </button>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div style={{ textAlign: "center" }}>
        <Link
          href="/page2"
          style={{
            display: "inline-block",
            color: "#0C5367",
            fontSize: "0.875rem",
            fontWeight: "500",
            textDecoration: "none",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            border: "1px solid #0C5367",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#0C5367";
            e.currentTarget.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#0C5367";
          }}
        >
          ← Back to Previous Step
        </Link>
      </div>
    </div>
  );
}
