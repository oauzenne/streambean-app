import React from "react";
import "../../Styles/DashboardPage.css";
import MainCommandCenter from "../../Containers/subContainers/commandCenterMainContainer/CommandCenterMain.jsx";
import { useSelector } from "react-redux";
import AIAssistant from "../../Containers/subContainers/aiAssistantContainer/AIAssistantPage.jsx";
import Contacts from "../../Containers/subContainers/contactsContainer/ContactsPage.jsx";
import Payments from "../../Containers/subContainers/paymentsContainer/PaymentsPage.jsx";
import ReportBug from "../../Containers/subContainers/reportBugContainer/ReportBugPage.jsx";
import Settings from "../../Containers/subContainers/settingsContainer/SettingsPage.jsx";
import MeetingRoom from "../../Containers/subContainers/meetingRoomContainer/MeetingRoomPage.jsx";

const ContentPage = (props) => {
  const showContainer = useSelector((state) => state.container.showContainer);
  return (
    <div
      className={
        props.onboardingStatus === false
          ? "content-container"
          : "content-container-large"
      }>
      {showContainer === "commandCenterMainContainer" && <MainCommandCenter />}
      {showContainer === "aiAssistantContainer" && <AIAssistant />}
      {showContainer === "contactsContainer" && <Contacts />}
      {showContainer === "paymentsContainer" && <Payments />}
      {showContainer === "reportBugContainer" && <ReportBug />}
      {showContainer === "settingsContainer" && <Settings />}
      {showContainer === "meetingRoomContainer" && <MeetingRoom />}
    </div>
  );
};

export default ContentPage;
