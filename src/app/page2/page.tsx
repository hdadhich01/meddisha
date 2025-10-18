"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page2() {
  const [patientInput, setPatientInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    "Ingesting your insurance...",
    "Ingesting your medical condition",
    "Ingesting your medical routine / treatments",
    "Putting it all together",
    "Indexing NIH for possible trials",
  ];

  const handleNextClick = () => {
    setIsLoading(true);
    setLoadingStep(0);

    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            window.location.href = "/page3";
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div style={{ maxWidth: "32rem", margin: "0 auto", width: "100%" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Link
            href="/page1"
            style={{ display: "inline-block", marginBottom: "1rem" }}
          >
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
            What are your complaints / insights into your current treatment?
          </p>
        </div>

        {/* Input Card */}
        <div className="card">
          <div style={{ padding: "2rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#374151",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Tell us!
            </h2>

            <div style={{ marginBottom: "2rem" }}>
              <textarea
                value={patientInput}
                onChange={(e) => setPatientInput(e.target.value)}
                placeholder="I feel like my treatment could go faster / I feel like it could be cheaper / my treatment isn't working....."
                style={{
                  width: "100%",
                  margin: "0 auto",
                  display: "block",
                  padding: "1rem",
                  border: "2px solid #e2e8f0",
                  borderRadius: "0.75rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  resize: "vertical",
                  minHeight: "120px",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#0C5367";
                  e.target.style.boxShadow = "0 0 0 3px rgba(12, 83, 103, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e2e8f0";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Loading Display */}
            {isLoading && (
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "1rem",
                    minHeight: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  {loadingStep === 0 && (
                    <>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/UnitedHealthcare_%28logo%29.svg/2560px-UnitedHealthcare_%28logo%29.svg.png"
                        alt="UHC"
                        style={{
                          height: "1.5rem",
                          width: "auto",
                          filter:
                            "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
                        }}
                      />
                    </>
                  )}
                  {loadingStep === 4 && (
                    <>
                      <img
                        src="https://cdn.creazilla.com/cliparts/7826906/nih-2012-logo-arrow-clipart-xl.png"
                        alt="NIH"
                        style={{
                          height: "1.5rem",
                          width: "auto",
                          filter:
                            "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
                        }}
                      />
                    </>
                  )}
                  {loadingSteps[loadingStep]}
                </div>
                <div
                  style={{
                    width: "200px",
                    height: "4px",
                    backgroundColor: "#e2e8f0",
                    borderRadius: "2px",
                    margin: "0 auto",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${
                        ((loadingStep + 1) / loadingSteps.length) * 100
                      }%`,
                      height: "100%",
                      background:
                        "linear-gradient(135deg, #E16308 0%, #ff7a1a 100%)",
                      transition: "width 1s ease",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Next Button - Only show when text is entered and not loading */}
            {patientInput.trim() && !isLoading && (
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <button
                  onClick={handleNextClick}
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(135deg, #E16308 0%, #ff7a1a 100%)",
                    color: "white",
                    fontWeight: "600",
                    padding: "0.75rem 2rem",
                    borderRadius: "2rem",
                    textDecoration: "none",
                    boxShadow:
                      "0 8px 25px rgba(225, 99, 8, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    fontSize: "1rem",
                    border: "none",
                    cursor: "pointer",
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
                  Next →
                </button>
              </div>
            )}

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link
                href="/page1"
                style={{
                  display: "inline-block",
                  color: "#0C5367",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
              >
                ← Back to Page 1
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
