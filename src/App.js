import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Containers/dashboardContainer/DashboardPage.jsx";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
