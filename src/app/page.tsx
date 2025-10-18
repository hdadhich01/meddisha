"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header Navigation */}
      <header
        className="animate-fadeInUp"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(12, 83, 103, 0.1)",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#0C5367",
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
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <button
            className="btn-secondary animate-shimmer"
            style={{
              fontSize: "1rem",
              padding: "0.75rem 1.5rem",
            }}
          >
            Book a Demo
          </button>
          <Link
            href="/page1"
            style={{
              fontSize: "1rem",
              padding: "0.75rem 1.5rem",
              textDecoration: "none",
              background: "linear-gradient(135deg, #E16308 0%, #ff7a1a 100%)",
              color: "white",
              fontWeight: "600",
              borderRadius: "2rem",
              transition: "all 0.3s ease",
              boxShadow:
                "0 8px 25px rgba(225, 99, 8, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
              position: "relative",
              overflow: "hidden",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
              display: "inline-block",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 12px 35px rgba(225, 99, 8, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(225, 99, 8, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)";
            }}
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Main Content - Centered */}
      <main
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        {/* Large MedDisha Title */}
        <div
          className="animate-fadeInUp"
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <h1
            style={{
              fontSize: "5rem",
              fontWeight: "900",
              color: "white",
              marginBottom: "1rem",
              lineHeight: "1",
              textShadow: "0 4px 8px rgba(0,0,0,0.3)",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Med
            <span
              style={{
                color: "#E16308",
                position: "relative",
                display: "inline-block",
                marginLeft: "0.5rem",
                minWidth: "5rem",
                textAlign: "left",
              }}
            >
              <span
                className="animate-obfuscate"
                style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
              >
                Disha
              </span>
              <span
                className="animate-obfuscate-hindi"
                style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
              >
                दिशा
              </span>
              <span style={{ visibility: "hidden" }}>Disha</span>
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              color: "white",
              fontWeight: "300",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Medical transparency platform for patients
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4rem",
            maxWidth: "60rem",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {/* Left Side - Content */}
          <div
            className="animate-fadeInLeft"
            style={{ flex: "1", minWidth: "0", textAlign: "center" }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "white",
                marginBottom: "1rem",
                lineHeight: "1.2",
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                textAlign: "center",
              }}
            >
              Current medical routine not cutting it?
            </h2>
            <p
              style={{
                color: "white",
                lineHeight: "1.6",
                fontSize: "1.125rem",
                marginBottom: "2rem",
                textShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              Clinical trials, experimental treatments, and cutting-edge
              therapies. We help you get into them faster with a clear, cheap,
              and doable plan. Your medical journey, your choice.
            </p>

            {/* Key Points - One Line */}
            <div
              className="animate-fadeInUp"
              style={{
                animationDelay: "0.2s",
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                marginBottom: "2rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    background:
                      "linear-gradient(135deg, #E16308 0%, #ff7a1a 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(225, 99, 8, 0.3)",
                  }}
                >
                  <svg
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      color: "white",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                >
                  Clinical Trials
                </span>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    background:
                      "linear-gradient(135deg, #0C5367 0%, #1a6b7a 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(12, 83, 103, 0.3)",
                  }}
                >
                  <svg
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      color: "white",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                >
                  Fast Access
                </span>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    background:
                      "linear-gradient(135deg, #E16308 0%, #0C5367 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(225, 99, 8, 0.3)",
                  }}
                >
                  <svg
                    style={{
                      width: "0.75rem",
                      height: "0.75rem",
                      color: "white",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                >
                  Clear Plans
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
