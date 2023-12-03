import React from "react";
import "../../../Styles/DashboardPage.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BetaImg from "../../../Images/beta-img.png";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
const quickButtons = [
  {
    text: "Open Room",
    icon: <MeetingRoomOutlinedIcon className="quick-click-icon-room" />,
  },
  {
    text: "View Payments",
    icon: <LocalAtmOutlinedIcon className="quick-click-icon" />,
  },
  {
    text: "Add Contact",
    icon: <PersonAddAltOutlinedIcon className="quick-click-icon" />,
  },
  {
    text: "Ask AI",
    icon: <PsychologyAltOutlinedIcon className="quick-click-icon" />,
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
    subtext: "Beta Minutes",
  },
  {
    text: 50,
    subtext: "AI Credits",
  },
];
const commandCenterMain = () => {
  return (
    <div className="command-div">
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
      <Typography class="metric-text">Monthly Metrics</Typography>

      <section className="metrics-section">
        {metricButtons.map((button) => (
          <Button disabled aria-label="Add" class="metric-button">
            <Typography variant="body2" class="metric-button-text">
              {button.text}
            </Typography>{" "}
            <Typography variant="body2" class="metric-button-text-2">
              {button.subtext}
            </Typography>{" "}
          </Button>
        ))}
      </section>
      <section className="link-section">
        <Button class="link-button">
          meet.streambean.ai/TheManifestCodex{" "}
          <ContentCopyOutlinedIcon className="link-icon" />{" "}
        </Button>
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

export default commandCenterMain;
