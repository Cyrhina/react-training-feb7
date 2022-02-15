import "./app.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./components/store/StoreContext";
import { devNavUrl } from "./components/helpers/functions-general";
import Employee from "./components/pages/employee/Employee";
import Order from "./components/pages/order/Order";
import Email from "./components/pages/email/Email";
import Sample from "./components/pages/sample/Sample";
import CreateAccount from "./components/pages/login/CreateAccount";
function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Routes>
            <Route path={`${devNavUrl}/login`} element={<CreateAccount />} />
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
