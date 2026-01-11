import { useState } from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";

const steps = [
  "Priority with Learnep",
  "Account Info",
  "Organization Details",
  "Completed",
];
const steptext = [
  "Select your 3 main goals",
  "Setup your account info",
  "Tell us about your company",
  "Your account is created",
];

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* ================= LEFT SIDE – STEPS (DESKTOP ONLY) ================= */}
        <div className="col-lg-4 d-none d-lg-flex border-end p-4 bg-primary flex-column justify-content-center relative">
          <h2
            className="bg-white px-2 py-0 align-self-start ms-4 mb-5"
            style={{
              borderTopRightRadius: "1rem",
              borderTopLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            <span className="text-success">learn</span>
            <span className="text-primary">ep</span>
          </h2>

          <ul className="list-group d-flex flex-column gap-4">
            {steps.map((step, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === currentStep;
              const isCompleted = stepNumber < currentStep;

              return (
                <li
                  key={step}
                  className="list-group-item border-0 bg-transparent d-flex align-items-center"
                >
                  <div
                    className={`step-circle d-flex align-items-center justify-content-center  
            ${isActive ? "active" : ""} 
            ${isCompleted ? "completed" : ""}`}
                  >
                    {isCompleted ? (
                      <i
                        className="bi bi-check-lg text-success"
                        style={{ fontSize: "1.5rem" }}
                      />
                    ) : (
                      stepNumber
                    )}
                  </div>

                  <div className="ms-3">
                    <h5
                      className="mb-1 text-white"
                      style={{ fontWeight: "400" }}
                    >
                      {step}
                    </h5>
                    <p className="text-white mb-0">{steptext[index]}</p>{" "}
                    {/* <- Use index here */}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="col-12 col-lg-8 d-flex flex-column justify-content-lg-center">
          {/* ================= MOBILE STEPS ================= */}

          {/* ================= MOBILE / MD STEPS ================= */}
          {/* ================= MOBILE / MD STEPS ================= */}
          <div className="d-lg-none ">
            {/* ================= LOGO – Always at the top ================= */}
            <div
              className="position-fixed top-0 start-0 w-100 bg-white border-bottom py-3 px-3"
              style={{ zIndex: 1030 }}
            >
              <h1 className="mb-0">
                <span className="text-success">learn</span>
                <span className="text-primary">ep</span>
              </h1>
            </div>

            {/* ================= STEP CONTENT ================= */}
            <div
              className="step-container d-flex flex-column align-items-center pb-3"
              style={{ paddingTop: "80px" }}
            >
              {/* STEPS */}
              <div className="d-flex align-items-center justify-content-center w-100 px-4 mb-4">
                {steps.map((_, index) => {
                  const stepNumber = index + 1;
                  const isActive = stepNumber === currentStep;
                  const isCompleted = stepNumber < currentStep;

                  return (
                    <div
                      key={index}
                      className="d-flex align-items-center flex-fill justify-content-center"
                    >
                      {/* CIRCLE */}
                      <div
                        className={`step-circle small d-flex align-items-center justify-content-center
              ${isActive ? "active" : ""}
              ${isCompleted ? "completed" : ""}
            `}
                      >
                        {isCompleted ? (
                          <i className="fas fa-check text-success"></i>
                        ) : (
                          stepNumber
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* STEP TITLE + TEXT */}
              <div className="text-center px-3">
                <h4 className="mb-1">{steps[currentStep - 1]}</h4>
                <p className="mb-2">{steptext[currentStep - 1]}</p>
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="w-100 ps-lg-5 px-3">
            <div className=" mx-auto mx-lg-0" style={{ maxWidth: "700px" }}>
              {currentStep === 1 && <StepOne />}
              {currentStep === 2 && <StepTwo />}
              {currentStep === 3 && <StepThree />}
              {currentStep === 4 && <StepFour />}
            </div>
          </div>

          {/* ================= BUTTONS ================= */}
          {currentStep !== steps.length && (
            <div className="d-flex justify-content-between my-4 px-lg-5 px-3">
              {currentStep !== 1 && (
                <button
                  className="btn d-flex align-items-center gap-2"
                  onClick={() => setCurrentStep((s) => s - 1)}
                  style={{ background: "#98f398", color: "#097429" }}
                >
                  <i className="bi bi-caret-left-fill"></i>
                  Previous
                </button>
              )}

              <button
                style={{ background: "#5fe743" }}
                className={`btn d-flex align-items-center  gap-2 px-4 ${
                  currentStep === 1 ? "ms-auto" : ""
                }`}
                onClick={() => setCurrentStep((s) => s + 1)}
              >
                Next
                <i className="bi bi-caret-right-fill"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
