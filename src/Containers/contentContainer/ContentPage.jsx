import React from "react";
import "../../Styles/DashboardPage.css";

const ContentPage = () => {
  return (
    <div className="content-container">
      <section className="top-section">
        <div className="top-left">
          <h2 className="greeting">Hello, Olivia</h2>
          <h3 className="welcome">Welcome to your Command Center.</h3>
        </div>

        <div className="top-right">
          <h2 className="dollar-amount">$0</h2>
          <h3 className="total-text">Total Monthly Sales</h3>
        </div>
      </section>

      <section className="button-section"></section>
    </div>
  );
};

export default ContentPage;
