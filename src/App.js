import "./app.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./components/store/StoreContext";
import { devNavUrl } from "./components/helpers/functions-general";
import Employee from "./components/pages/employee/Employee";
import Order from "./components/pages/order/Order";
import Email from "./components/pages/email/Email";
import Sample from "./components/pages/sample/Sample";
// import CreateAccount from "./components/pages/login/creat-account/CreateAccount";
// import CreateCheck from "./components/pages/login/creat-account/CreateCheck";
// import CreatePass from "./components/pages/login/creat-account/CreatePass";
// import CreateSuccess from "./components/pages/login/creat-account/CreateSuccess";
import Login from "./components/pages/try-login/Login";
import TryCreateAccount from "./components/pages/try-login/creat-account/TryCreateAccount";
import TryCreatePass from "./components/pages/try-login/creat-account/TryCreatePass";
import TryCreateSuccess from "./components/pages/try-login/creat-account/TryCreateSuccess";
import TryCreateCheck from "./components/pages/try-login/creat-account/TryCreateCheck";
import TryForgotPass from "./components/pages/try-login/forgot-pass/TryForgotPass";
import TryForgotPassCheck from "./components/pages/try-login/forgot-pass/TryForgotPassCheck";
import TryForgotPassSuccess from "./components/pages/try-login/forgot-pass/TryForgotPassSuccess";
import TryForgotPassCreate from "./components/pages/try-login/forgot-pass/TryForgotPassCreate";
function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Routes>
            <Route path={`${devNavUrl}/login`} element={<Login />} />
            <Route
              path={`${devNavUrl}/createaccount`}
              element={<TryCreateAccount />}
            />
            <Route
              path={`${devNavUrl}/create-password`}
              element={<TryCreatePass />}
            />
            <Route
              path={`${devNavUrl}/createsuccess`}
              element={<TryCreateSuccess />}
            />
            <Route
              path={`${devNavUrl}/createcheck`}
              element={<TryCreateCheck />}
            />
            <Route
              path={`${devNavUrl}/forgotpass`}
              element={<TryForgotPass />}
            />
            <Route
              path={`${devNavUrl}/forgotpasssuccess`}
              element={<TryForgotPassSuccess />}
            />
            <Route
              path={`${devNavUrl}/forgotpasscheck`}
              element={<TryForgotPassCheck />}
            />
            <Route
              path={`${devNavUrl}/forgotpasscreate`}
              element={<TryForgotPassCreate />}
            />
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
