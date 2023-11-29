import React from "react";
import "../../Styles/DashboardPage.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import BetaImg from "../../Images/beta-img.png";

const quickButtons = [
  {
    text: "Open Room",
    icon: <AdbIcon className="quick-click-icon-room" />,
  },
  {
    text: "View Payments",
    icon: <AdbIcon className="quick-click-icon" />,
  },
  {
    text: "Add Contact",
    icon: <AdbIcon className="quick-click-icon" />,
  },
  {
    text: "Ask AI",
    icon: <AdbIcon className="quick-click-icon" />,
  },
];

const metricButtons = [
  {
    text: 0,
    subtext: "Sales",
  },
  {
    text: 37,
    subtext: "Meetings",
  },
  {
    text: 191,
    subtext: "Beta Meetings",
  },
  {
    text: 50,
    subtext: "AI Credits",
  },
];

const ContentPage = () => {
  return (
    <div className="content-container">
      <section className="top-section">
        <div className="top-left">
          <h2 className="greeting">Hello, Olivia</h2>
          <h3 className="welcome">Welcome to your Command Center</h3>
        </div>

        <div className="top-right">
          <h2 className="dollar-amount">$0</h2>
          <h3 className="total-text">Total Monthly Sales</h3>
        </div>
      </section>

      <section className="quick-button-section">
        {quickButtons.map((button) =>
          button.text === "Open Room" ? (
            <Button aria-label="Add" class="quick-click-button-room">
              {" "}
              {button.icon}{" "}
              <Typography variant="body2" class="quick-button-text-room">
                {button.text}
              </Typography>{" "}
            </Button>
          ) : (
            <Button aria-label="Add" class="quick-click-button">
              {" "}
              {button.icon}{" "}
              <Typography variant="body2" class="quick-button-text">
                {button.text}
              </Typography>{" "}
            </Button>
          )
        )}
      </section>
      <Typography className="metric-text">Monthly Metrics</Typography>

      <section className="metrics-section">
        {metricButtons.map((button) => (
          <Button aria-label="Add" class="metric-button">
            <Typography variant="body2" class="metric-button-text">
              {button.text}
            </Typography>{" "}
            <Typography variant="body2" class="metric-button-text-2">
              {button.subtext}
            </Typography>{" "}
          </Button>
        ))}
      </section>
      <section className="patent-notice">
        <Typography>
          Patent and Trademark Notice: This notice serves as a warning that this
          website is the subject of one or more pending patent applications and
          trademarks. Unauthorized use, reproduction, or distribution of any
          part of this website, its content, or its features related to our
          Software-based artificial intelligence sales enablement system may
          result in legal action, including the pursuit of damages and
          injunctive relief.
        </Typography>
      </section>
      <section className="beta-section">
        <img src={BetaImg} className="beta-img" />
      </section>
    </div>
  );
};

export default ContentPage;
