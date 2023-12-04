import React, { useState } from "react";
import TabContainer from "../tabContainer/TabPage";
import ContentContainer from "../contentContainer/ContentPage";
import SideBarContainer from "../sideBarContainer/SideBar";

import "../../Styles/DashboardPage.css";

const DashboardPage = (props) => {
  const [onboardingStatus, setOnboardingStatus] = React.useState(false);

  const setStatus = (onboardingStatus) => {
    setOnboardingStatus(onboardingStatus);
  };

  return (
    <div className="dashboard-container">
      <TabContainer onboardingStatus={onboardingStatus} />
      <ContentContainer onboardingStatus={onboardingStatus} />
      <SideBarContainer onboardingStatus={setStatus} />
    </div>
  );
};

export default DashboardPage;
