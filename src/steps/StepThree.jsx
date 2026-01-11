import { useState } from "react";

const orgTypes = ["Private", "Public", "Government", "Non-Profit", "Startup"];
const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
];
const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Nigeria",
  "India",
  "Australia",
  "Brazil",
  "China",
  // Add more countries as needed or use a package for full list
];

export default function StepThree() {
  const [orgName, setOrgName] = useState("");
  const [orgType, setOrgType] = useState("");
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("");

  return (
    <>
      <h3 className="mb-4 text-center-lg-down fhead">
        What is the name of your organization?
      </h3>
      <input
        type="text"
        className="form-control mb-4 p-2 mx-auto mx-lg-0"
        placeholder="Enter organization name"
        value={orgName}
        onChange={(e) => setOrgName(e.target.value)}
        style={{ maxWidth: 600, background: "#e2d8d818" }}
      />

      <div style={{ maxWidth: 600 }} className="mx-auto mx-lg-0">
        <label className="form-label fw-bold">
          What is your organization type?
        </label>
        <select
          className="form-select mb-4 p-2 mx-auto mx-lg-0"
          value={orgType}
          onChange={(e) => setOrgType(e.target.value)}
          style={{ background: "#e2d8d818" }}

          // style={{ maxWidth: 600 }}
        >
          <option value="" disabled>
            Select organization type
          </option>
          {orgTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div style={{ maxWidth: 600 }} className="mx-auto mx-lg-0">
        <label className="form-label fw-bold">
          What's your organization industry?
        </label>
        <select
          className="form-select mb-4 p-2 mx-auto mx-lg-0"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          style={{ background: "#e2d8d818" }}

          // style={{ maxWidth: 600 }}
        >
          <option value="" disabled>
            Select industry
          </option>
          {industries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      <div style={{ maxWidth: 600 }} className="mx-auto mx-lg-0">
        <label className="form-label fw-bold ">Choose your country</label>
        <select
          className="form-select mb-5 p-2 mx-auto mx-lg-0"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          // style={{ maxWidth: 600 }}
          style={{ background: "#e2d8d818" }}
        >
          <option value="" disabled>
            Select country
          </option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
