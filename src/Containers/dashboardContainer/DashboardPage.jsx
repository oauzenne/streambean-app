import React from "react";
import TabContainer from "../tabContainer/TabPage";
import ContentContainer from "../contentContainer/ContentPage";
import SideBarContainer from "../sideBarContainer/SideBar";

import "../../Styles/DashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <TabContainer />
      <ContentContainer />
      <SideBarContainer />
    </div>
  );
};

export default DashboardPage;
