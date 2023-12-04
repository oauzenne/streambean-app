import React, { useState } from "react";
import "../../Styles/DashboardPage.css";
import Onboarding from "../../Components/onboardingComponent/Onboarding";
import SBLogo from "../../Images/sb-logo.png";

const SideBarPage = () => {
  const [finishClick, setFinishClick] = React.useState(false);

  const handleFinishClickUpdate = (finishClick) => {
    setFinishClick(finishClick);
  };

return (
  finishClick === false ? (
    <div className="sidebar-container">
      <section className="onboarding-top">
        <text className="onboarding-text">Onboarding Center</text>
      </section>
      <section className="onboarding-middle">
        <Onboarding handleFinishClickUpdate={handleFinishClickUpdate} />
      </section>
      <section className="onboarding-bottom">
        <img src={SBLogo} className="sb-logo" alt="SB Logo" />
      </section>
    </div>
  ) : <div className="hide"/>
);
};

export default SideBarPage;
