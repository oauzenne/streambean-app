import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Graphic from "../../Images/onboarding-graphic.jpg";
import "./Onboarding.css";

const steps = [
  {
    label: "Create Account",
    description: `Welcome to the Stream Bean AI crew! Excited to have 'ya!`,
  },
  {
    label: "Set Up Payments",
    description:
      "Head over to the payments tab and connect your Stripe account to accept in-meeting payments.",
  },
  {
    label: "Host a Meeting",
    description: `Copy your meeting link and send it over to a lead. When ready, click the "Open Room" button to launch your meeting!`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  return (
    <section>
      <Box sx={{ maxWidth: 400 }} className="onboarding-section">
        <img src={Graphic} className="onboarding-graphic" />
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }>
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}>
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </section>
  );
}
