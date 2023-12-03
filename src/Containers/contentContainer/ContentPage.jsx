import React from "react";
import "../../Styles/DashboardPage.css";
import MainCommandCenter from "../../Containers/subContainers/commandCenterMainContainer/commandCenterMain.jsx";
import { useSelector } from "react-redux";
import AIAssistant from "../../Containers/subContainers/aiAssistantContainer/AIAssistantPage.jsx";

const ContentPage = () => {
  const showContainer = useSelector((state) => state.container.showContainer);
  console.log(showContainer);
  return (
    <div className="content-container">
      {showContainer === "commandCenterMainContainer" && <MainCommandCenter />}
      {showContainer === "aiAssistantContainer" && <AIAssistant />}
    </div>
  );
};

export default ContentPage;
