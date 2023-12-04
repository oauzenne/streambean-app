const initialState = {
  showContainer: "commandCenterMainContainer",
};

export const containerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_COMMAND":
      return { ...state, showContainer: "commandCenterMainContainer" };
    case "SHOW_AI":
      return { ...state, showContainer: "aiAssistantContainer" };
    case "SHOW_PAYMENTS":
      return { ...state, showContainer: "paymentsContainer" };
    case "SHOW_CONTACTS":
      return { ...state, showContainer: "contactsContainer" };
    case "SHOW_SETTINGS":
      return { ...state, showContainer: "settingsContainer" };
    case "SHOW_REPORT_BUG":
      return { ...state, showContainer: "reportBugContainer" };
     case "SHOW_MEETING":
      return { ...state, showContainer: "meetingRoomContainer" };
    default:
      return state;
  }
};
