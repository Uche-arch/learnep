import { useState } from "react";

const goals = [
  "Train employees",
  "Train customers",
  "Train partners",
  "Provide training services",
  "Set courses",
  "Teach students",
  "Others",
];

export default function StepOne() {
  // Store selected goals and order of selection
  const [selected, setSelected] = useState([]); // array of indices, max length 3

  const toggleSelect = (index) => {
    if (selected.includes(index)) {
      // Remove if already selected
      setSelected(selected.filter((i) => i !== index));
    } else {
      // Add if less than 3 selected
      if (selected.length < 3) {
        setSelected([...selected, index]);
      }
    }
  };

  // Helper to get selection order number
  const getOrderNumber = (index) => {
    return selected.indexOf(index) + 1; // 1-based order
  };

  return (
    <>
      <h4 className="mb-3 text-dark text-center-lg-down fhead">
        What are your three main goals with Learnep LMS?
      </h4>
      <p className="text-secondary mb-4 text-center-lg-down">
        Select goals based on your priority, the first choice being your top priority.
      </p>

      <div
        className=" mx-auto mx-lg-0"
        style={{
          maxWidth: 600,
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
        }}
      >
        {goals.map((goal, index) => {
          const isSelected = selected.includes(index);
          const orderNumber = getOrderNumber(index);

          return (
            <div
              key={goal}
              onClick={() => toggleSelect(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleSelect(index);
              }}
              className="position-relative border ps-0 ps-lg-4 py-4 goal-item text-center text-lg-start font  "
              style={{
                width: "calc(33.33% - 13.33px)", // default 3 per row
                boxSizing: "border-box",
                cursor: "pointer",
                userSelect: "none",
                backgroundColor: isSelected ? "#b5fab5" : "transparent",
                // textAlign: "left",
                marginBottom: 20,
                // boxShadow: isSelected ? "0 0 8px 2px #32CD32" : "none",
                // border: isSelected ? "1px solid #32CD32" : "none",
                // borderColor: isSelected ? "#32CD32" : "#dee2e6",
              }}
            >
              {goal}

              {isSelected && (
                <div
                  style={{
                    position: "absolute",
                    bottom: -10,
                    right: -10,
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    backgroundColor: "#0d6efd",
                    color: "black",
                    // fontWeight: "bold",
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                    userSelect: "none",
                  }}
                >
                  {orderNumber}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
