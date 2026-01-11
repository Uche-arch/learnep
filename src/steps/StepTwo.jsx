import { useState } from "react";

const userRanges = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1001-5000",
  "5001-10000",
  "10000+",
];

const interests = [
  "Learning new skills",
  "Career growth",
  "Networking",
  "Certification",
  "Personal development",
];

export default function StepTwo() {
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedInterest, setSelectedInterest] = useState("");

  return (
    <>
      <h3 className="mb-4 text-center-lg-down">
        How many users will be onboarded on your portal?
      </h3>

      {/* Buttons grid */}
      <div
        className="d-grid gap-3 mb-5 mx-auto mx-lg-0"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          // marginBottom: "3rem",
          maxWidth: 600,
        }}
      >
        {userRanges.map((range, index) => {
          const isSelected = selectedRange === index;
          return (
            <button
              key={range}
              type="button"
              onClick={() => setSelectedRange(index)}
              className={`btn ${
                isSelected ? "border-success" : "border-dark text-dark"
              }`}
              style={{
                padding: "1rem",
                fontWeight: "400",
                borderWidth: "1px",
                // backgroundColor: isSelected ? "#d4edda" : "transparent",
                backgroundColor: isSelected ? "#b5fab5" : "transparent",
              }}
            >
              {range}
            </button>
          );
        })}
      </div>

      {/* Dropdown */}
      <div style={{ maxWidth: 600 }} className="mb-5 mx-auto mx-lg-0">
        <label htmlFor="interest" className="form-label fw-bold mb-2">
          What are your interests with Learnep LMS?
        </label>
        <select
          style={{background: "#e2d8d818"}}
          id="interest"
          className="form-select"
          value={selectedInterest}
          onChange={(e) => setSelectedInterest(e.target.value)}
        >
          <option value="" disabled>
            Select
          </option>
          {interests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
