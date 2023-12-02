import React from "react";
import SBLogo from "../../Images/green-logo.png";
import "../../Styles/DashboardPage.css";
import AdbIcon from "@mui/icons-material/Adb";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from "@mui/material/Link";
import CircleIcon from "@mui/icons-material/Circle";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const buttons = [
  {
    text: "Command Center",
    icon: <DashboardOutlinedIcon className="button-icon" />,
  },
  {
    text: "AI Assistant",
    icon: <SmartToyOutlinedIcon className="button-icon" />,
  },
  {
    text: "Payments",
    icon: <MonetizationOnOutlinedIcon className="button-icon" />,
  },
  {
    text: "Contacts",
    icon: <ImportContactsOutlinedIcon className="button-icon" />,
  },
  {
    text: "Settings",
    icon: <SettingsOutlinedIcon className="button-icon" />,
  },
  {
    text: "Report a Bug",
    icon: <BugReportOutlinedIcon className="button-icon" />,
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

      <section className="logout-container">
        <div className="logout-section">
          <Button class="logout-button">
            <Typography class="logout-text">Log Out</Typography>
            <LogoutIcon className="logout-icon" />{" "}
          </Button>
        </div>
        <div className="copyright-section">
          <CopyrightIcon className="copyright-icon" />{" "}
          <Typography class="copyright-text">2023 Stream Bean AI</Typography>
        </div>
        <div>
          <Link class="tab-link">Privacy</Link>{" "}
          <CircleIcon className="circle-icon" />
          <Link class="tab-link">Terms</Link>{" "}
          <CircleIcon className="circle-icon" />
          <Link class="tab-link">Contact</Link>
        </div>
      </section>
    </div>
  );
};

export default TabPage;
