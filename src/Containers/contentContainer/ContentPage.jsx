import React from "react";
import "../../Styles/DashboardPage.css";
import MainCommandCenter from "../../Containers/subContainers/commandCenterMainContainer/commandCenterMain.jsx";
import { useSelector } from "react-redux";
import AIAssistant from "../../Containers/subContainers/aiAssistantContainer/AIAssistantPage.jsx";
import Contacts from "../../Containers/subContainers/contactsContainer/ContactsPage.jsx";
import Payments from "../../Containers/subContainers/paymentsContainer/PaymentsPage.jsx";
import ReportBug from "../../Containers/subContainers/reportBugContainer/ReportBugPage.jsx";
import Settings from "../../Containers/subContainers/settingsContainer/SettingsPage.jsx";


const ContentPage = () => {
  const showContainer = useSelector((state) => state.container.showContainer);
  console.log(showContainer);
  return (
    <div className="content-container">
      {showContainer === "commandCenterMainContainer" && <MainCommandCenter />}
      {showContainer === "aiAssistantContainer" && <AIAssistant />}
      {showContainer === "contactsContainer" && <Contacts />}
      {showContainer === "paymentsContainer" && <Payments />}
      {showContainer === "reportBugContainer" && <ReportBug />}
      {showContainer === "settingsContainer" && <Settings />}
    </div>
  );
};

export default ContentPage;
