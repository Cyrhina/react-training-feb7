import "./app.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./components/store/StoreContext";
import { devNavUrl } from "./components/helpers/functions-general";
import Employee from "./components/pages/employee/Employee";
import Order from "./components/pages/order/Order";
import Email from "./components/pages/email/Email";
import Sample from "./components/pages/sample/Sample";
import CreateAccount from "./components/pages/login/CreateAccount";
import CreatePassword from "./components/pages/login/CreatePassword";
import WelcomeAboard from "./components/pages/login/WelcomeAboard";
import Login from "./components/pages/login/Login";
import CheckInbox from "./components/pages/login/CheckInbox";
function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Routes>
            <Route
              path={`${devNavUrl}/create-account`}
              element={<CreateAccount />}
            />
            <Route
              path={`${devNavUrl}/create-password`}
              element={<CreatePassword />}
            />
            <Route
              path={`${devNavUrl}/welcome-aboard`}
              element={<WelcomeAboard />}
            />
            <Route path={`${devNavUrl}/login`} element={<Login />} />
            <Route path={`${devNavUrl}/checkinbox`} element={<CheckInbox />} />

            <Route path={`${devNavUrl}/employee`} element={<Employee />} />
            <Route path={`${devNavUrl}/order`} element={<Order />} />
            <Route path={`${devNavUrl}/email`} element={<Email />} />
            <Route path={`${devNavUrl}/sample`} element={<Sample />} />
          </Routes>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
