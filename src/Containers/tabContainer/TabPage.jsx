import React from "react";
import SBLogo from "../../Images/green-logo.png";
import "../../Styles/DashboardPage.css";
import AdbIcon from "@mui/icons-material/Adb";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from '@mui/material/Link';
import CircleIcon from '@mui/icons-material/Circle';

const buttons = [
  {
    text: "Command Center",
    icon: <AdbIcon className="button-icon" />,
  },
  {
    text: "AI Assistant",
    icon: <AdbIcon className="button-icon" />,
  },
  {
    text: "Payments",
    icon: <AdbIcon className="button-icon" />,
  },
  {
    text: "Contacts",
    icon: <AdbIcon className="button-icon" />,
  },
  {
    text: "Settings",
    icon: <AdbIcon className="button-icon" />,
  },
  {
    text: "Report a Bug",
    icon: <AdbIcon className="button-icon" />,
  },
];

const TabPage = () => {
  return (
    <div className="tab-container">
      <section>
        <img src={SBLogo} className="logo" alt="streambean logo" />
        <h3 className="username">Olivia Young</h3>
        <h4 className="companyname">The Manifest Codex</h4>
      </section>

      <section className="button-section">
        {buttons.map((button) => (
          <Button aria-label="Add" class="rounded-rectangle-button">
            {" "}
            {button.icon}{" "}
            <Typography variant="body2" class="button-text">
              {button.text}
            </Typography>{" "}
          </Button>
        ))}
      </section>

      <section>
        <div className="logout-section">
          <Button>
            <LogoutIcon className="logout-icon" />{" "}
            <Typography class="logout-text">Log Out</Typography>
          </Button>
        </div>
        <div className="copyright-section">
          <CopyrightIcon className="copyright-icon" />{" "}
          <Typography class="copyright-text">2023 Stream Bean AI</Typography>
        </div>
        <div>
          <Link class="tab-link">Privacy</Link> <CircleIcon className="circle-icon"/>
          <Link class="tab-link">Terms</Link> <CircleIcon className="circle-icon"/>
          <Link class="tab-link">Contact</Link>
        </div>
      </section>
    </div>
  );
};

export default TabPage;
