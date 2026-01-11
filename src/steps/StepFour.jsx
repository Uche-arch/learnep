import { useState } from "react";

export default function StepFour() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      header: "Customize Portal",
      text: "Brand your LMS",
      icon: "bi-palette", // represents design/customization
    },
    {
      header: "Create Courses",
      text: "Develop learning content",
      icon: "bi-journal-text", // represents writing or course content
    },
    {
      header: "Explore Dashboard",
      text: "Add team members to collaborate with you.",
      icon: "bi-speedometer2", // represents dashboard / analytics
    },
  ];


  return (
    <>
      <h2 className="mb-2 text-center-lg-down">You are Done!</h2>
      <p className="mb-4 text-center-lg-down text-secondary">Welcome onboard</p>

      <h4 className="mb-3 text-center-lg-down">
        What would you like to do first?
      </h4>

      <div
        className="cards-container d-flex gap-4 my-4"
        style={{ maxWidth: 800, flexWrap: "wrap", justifyContent: "center" }}
      >
        {cards.map((card, idx) => {
          const isSelected = selectedCard === idx;
          return (
            <div
              key={idx}
              onClick={() => setSelectedCard(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedCard(idx);
              }}
              className="card-item border rounded px-2 py-5 text-center"
              style={{
                cursor: "pointer",
                backgroundColor: isSelected ? "#b5fab5" : "transparent",
                // backgroundColor: isSelected ? "#d4edda" : "transparent",
                // borderColor: isSelected ? "#198754" : "#ddd",
                // boxShadow: isSelected ? "0 0 10px #198754" : "none",
                transition: "all 0.3s ease",
                flex: "1 1 200px", // base width for flex items
                maxWidth: "calc(33% - 1rem)", // 3 per row on large screens with gaps
                minWidth: 200, // prevent shrinking too small
              }}
            >
              {/* Icon */}
              <i
                className={`bi ${card.icon}`}
                style={{
                  fontSize: 25,
                  color: isSelected ? "#19c027" : "#6c757d",
                }}
              />
              <h5>{card.header}</h5>
              <p className="mb-0 text-secondary">{card.text}</p>
            </div>
          );
        })}
      </div>

      <div
        className="d-flex align-items-center p-2 rounded mb-5 mb-lg-0"
        style={{ backgroundColor: "#fff3cd", maxWidth: 900 }}
      >
        <div className="me-3" style={{ fontSize: 30, color: "#856404" }}>
          {/* Using Bootstrap info icon */}
          <i className="bi bi-info-circle-fill"></i>
        </div>
        <div>
          <h5>Let's walk you through your portal</h5>
          <p className="mb-0 text-secondary">
            Navigate your portal seamlessly with the help of our,{" "}
            <span className="text-success text-decoration-underline" style={{cursor: "pointer"}}>
              Learnep Wizard
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
