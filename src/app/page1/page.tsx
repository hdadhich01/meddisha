"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page1() {
  const [insuranceNumber, setInsuranceNumber] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [insuranceCompleted, setInsuranceCompleted] = useState(false);
  const [fileCompleted, setFileCompleted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleInsuranceSubmit = async () => {
    if (!insuranceNumber.trim()) return;

    setIsSubmitting(true);
    setLoadingStep(0);
    setShowSuccess(false);

    const steps = [
      "Finding Insurance Provider",
      "You have UnitedHealthCare",
      "Importing Benefits & Coverage (SBC)",
      "Imported SBC!",
    ];

    // Go through each step with delays
    for (let i = 0; i < steps.length; i++) {
      setLoadingStep(i);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    setShowSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setLoadingStep(0);
    setShowSuccess(false);
    setInsuranceCompleted(true);
  };

  const handleFileSubmit = async () => {
    if (!selectedFile) return;

    setFileCompleted(true);
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoadingStep(0);
    setShowSuccess(false);

    const steps = [
      "Finding Insurance Provider",
      "You have UnitedHealthCare",
      "Importing Benefits & Coverage (SBC)",
      "Imported SBC!",
    ];

    // Go through each step with delays
    for (let i = 0; i < steps.length; i++) {
      setLoadingStep(i);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    setShowSuccess(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setLoadingStep(0);
    setShowSuccess(false);
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
            href="/"
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
            Let&apos;s get started with your medical information
          </p>
        </div>

        {/* Form Card */}
        <div className="card">
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Insurance Number */}
            <div>
              <label
                htmlFor="insurance"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#374151",
                  marginBottom: "0.5rem",
                }}
              >
                Patient&apos;s Insurance Number
              </label>
              <input
                type="text"
                id="insurance"
                value={insuranceNumber}
                onChange={(e) => setInsuranceNumber(e.target.value)}
                placeholder="Enter your insurance number"
                className="input-field"
                disabled={insuranceCompleted}
                style={{
                  opacity: insuranceCompleted ? 0.4 : 1,
                  backgroundColor: insuranceCompleted
                    ? "#f3f4f6"
                    : "transparent",
                  color: insuranceCompleted ? "#9ca3af" : "inherit",
                  cursor: insuranceCompleted ? "not-allowed" : "text",
                }}
              />
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#6b7280",
                  marginTop: "0.25rem",
                }}
              >
                This information is for demonstration purposes only
              </p>

              {/* Loading Status - Above Button */}
              {isSubmitting && (
                <div
                  style={{
                    marginTop: "0.75rem",
                    padding: "0.75rem",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.5rem",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <svg
                    className="animate-spin"
                    style={{
                      height: "1rem",
                      width: "1rem",
                      color: "#0C5367",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      style={{ opacity: 0.25 }}
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      style={{ opacity: 0.75 }}
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "#0C5367",
                      fontWeight: "500",
                    }}
                  >
                    {loadingStep === 0 && "Finding Insurance Provider"}
                    {loadingStep === 1 && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <span>You have</span>
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/UnitedHealthcare_%28logo%29.svg/2560px-UnitedHealthcare_%28logo%29.svg.png"
                          alt="UnitedHealthCare"
                          width={100}
                          height={40}
                          style={{
                            height: "1rem",
                            width: "auto",
                          }}
                        />
                      </div>
                    )}
                    {loadingStep === 2 && "Importing Benefits & Coverage (SBC)"}
                    {loadingStep === 3 && "Imported SBC!"}
                  </span>
                </div>
              )}

              {!insuranceCompleted ? (
                <button
                  type="button"
                  onClick={handleInsuranceSubmit}
                  disabled={!insuranceNumber.trim() || isSubmitting}
                  className="btn-primary"
                  style={{
                    marginTop: "0.75rem",
                    width: "100%",
                    opacity: !insuranceNumber.trim() || isSubmitting ? 0.5 : 1,
                    cursor:
                      !insuranceNumber.trim() || isSubmitting
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  {isSubmitting ? "Loading..." : "Verify Insurance"}
                </button>
              ) : (
                <div
                  style={{
                    marginTop: "0.75rem",
                    padding: "0.75rem",
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#16a34a",
                      marginRight: "0.5rem",
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
                  <span style={{ fontSize: "0.875rem", color: "#15803d" }}>
                    Loaded!
                  </span>
                </div>
              )}
            </div>

            {/* File Upload */}
            <div>
              <label
                htmlFor="prescription"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#374151",
                  marginBottom: "0.5rem",
                }}
              >
                Doctor Prescribed Routine / Details
              </label>
              <div
                style={{
                  border: "2px dashed #d1d5db",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                  textAlign: "center",
                  transition: "border-color 0.2s",
                  opacity: fileCompleted ? 0.4 : 1,
                  backgroundColor: fileCompleted ? "#f3f4f6" : "transparent",
                  cursor: fileCompleted ? "not-allowed" : "pointer",
                }}
              >
                <input
                  type="file"
                  id="prescription"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  style={{ display: "none" }}
                  disabled={fileCompleted}
                />
                <label
                  htmlFor="prescription"
                  style={{
                    cursor: fileCompleted ? "not-allowed" : "pointer",
                    opacity: fileCompleted ? 0.6 : 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <svg
                      style={{
                        width: "3rem",
                        height: "3rem",
                        color: "#9ca3af",
                        margin: "0 auto",
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#374151",
                        }}
                      >
                        {selectedFile
                          ? selectedFile.name
                          : "Click to upload or drag and drop"}
                      </p>
                      <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                        PDF, DOC, DOCX, JPG, PNG up to 10MB
                      </p>
                    </div>
                  </div>
                </label>
              </div>

              {selectedFile && !fileCompleted && (
                <div
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.75rem",
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <svg
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                        color: "#16a34a",
                        marginRight: "0.5rem",
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
                    <span style={{ fontSize: "0.875rem", color: "#15803d" }}>
                      File selected: {selectedFile.name} (
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </div>
                </div>
              )}

              {!fileCompleted ? (
                <button
                  type="button"
                  onClick={handleFileSubmit}
                  disabled={!selectedFile}
                  className="btn-primary"
                  style={{
                    marginTop: "0.75rem",
                    width: "100%",
                    opacity: !selectedFile ? 0.5 : 1,
                    cursor: !selectedFile ? "not-allowed" : "pointer",
                  }}
                >
                  Upload File
                </button>
              ) : (
                <div
                  style={{
                    marginTop: "0.75rem",
                    padding: "0.75rem",
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#16a34a",
                      marginRight: "0.5rem",
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
                  <span style={{ fontSize: "0.875rem", color: "#15803d" }}>
                    File uploaded successfully
                  </span>
                </div>
              )}
            </div>

            {/* Next Button - Only show when both completed */}
            {insuranceCompleted && fileCompleted && (
              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <Link
                  href="/page2"
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
                </Link>
              </div>
            )}
          </form>

          {/* Back Button */}
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <Link
              href="/"
              style={{
                color: "#0C5367",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "0.875rem",
            marginTop: "2rem",
          }}
        >
          <p>
            Your information is secure and will be processed according to our
            privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}
