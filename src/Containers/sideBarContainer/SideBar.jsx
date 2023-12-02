import React from "react";
import "../../Styles/DashboardPage.css";
import Onboarding from "../../Components/onboardingComponent/Onboarding";
import SBLogo from "../../Images/sb-logo.png";

const SideBarPage = () => {
  return (
    <div className="sidebar-container">
      <section className="onboarding-top">
        <text className="onboarding-text">Onboarding Center</text>
      </section>
      <section className="onboarding-middle">
        <Onboarding />
      </section>
      <section className="onboarding-bottom">
        <img src={SBLogo} className="sb-logo" />
      </section>
    </div>
  );
};

export default SideBarPage;
