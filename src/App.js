import "./app.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./components/store/StoreContext";
import { devNavUrl } from "./components/helpers/functions-general";
import Order from "./components/pages/frontend/Order";
import Sample from "./components/pages/frontend/Sample";
import Email from "./components/pages/frontend/Email";
import Employee from "./components/pages/frontend/Employee";
// import CreateAccount from "./components/pages/signup/logincreat-account/CreateAccount";
// import CreateCheck from "./components/pages/signup/signup/login/creat-account/CreateCheck";
// import CreatePass from "./components/pages/signup/login/creat-account/CreatePass";
// import CreateSuccess from "./components/pages/signup/login/creat-account/CreateSuccess";
import Login from "./components/pages/signup/try-login/Login";
import TryCreateAccount from "./components/pages/signup/try-login/creat-account/TryCreateAccount";
import TryCreatePass from "./components/pages/signup/try-login/creat-account/TryCreatePass";
import TryCreateSuccess from "./components/pages/signup/try-login/creat-account/TryCreateSuccess";
import TryCreateCheck from "./components/pages/signup/try-login/creat-account/TryCreateCheck";
import TryForgotPass from "./components/pages/signup/try-login/forgot-pass/TryForgotPass";
import TryForgotPassCheck from "./components/pages/signup/try-login/forgot-pass/TryForgotPassCheck";
import TryForgotPassSuccess from "./components/pages/signup/try-login/forgot-pass/TryForgotPassSuccess";
import TryForgotPassCreate from "./components/pages/signup/try-login/forgot-pass/TryForgotPassCreate";
import Customer from "./components/pages/signup/customer-signup/Customer";
import CustomerCreate from "./components/pages/signup/customer-signup/creat-account/CustomerCreate";
import CustomerCheckEmail from "./components/pages/signup/customer-signup/creat-account/CustomerCheckEmail";
import CustomerCreatePass from "./components/pages/signup/customer-signup/creat-account/CustomerCreatePass";
import CustomerCreated from "./components/pages/signup/customer-signup/creat-account/CustomerCreated";
import CostumerForgotPass from "./components/pages/signup/customer-signup/forgot-pass/CostumerForgotPass";
import CustomerForgotEmail from "./components/pages/signup/customer-signup/forgot-pass/CustomerForgotEmail";
import CustomerNewPass from "./components/pages/signup/customer-signup/forgot-pass/CustomerNewPass";
import CustomerNewPassCreated from "./components/pages/signup/customer-signup/forgot-pass/CustomerNewPassCreated";
import User from "./components/pages/signup/user/User";
import CreateUser from "./components/pages/signup/user/creat-account/CreateAccount";
import UserCreateCheck from "./components/pages/signup/user/creat-account/CreateCheck";
import UserCreatePass from "./components/pages/signup/user/creat-account/CreatePass";
import CreateSuccess from "./components/pages/signup/user/creat-account/CreateSuccess";
import UserForgotPass from "./components/pages/signup/user/forgot-pass/UserForgotPass";
import UserForgotPassCheck from "./components/pages/signup/user/forgot-pass/UserForgotPassCheck";
import UserForgotPassCreate from "./components/pages/signup/user/forgot-pass/UserForgotPassCreate";
import UserForgotPassSuccess from "./components/pages/signup/user/forgot-pass/UserForgotPassSuccess";
import SampleCustomer from "./components/pages/frontend/SampleCustomer";
function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          <Routes>
            {/* Login1 */}
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

            {/* login2 */}
            <Route path={`${devNavUrl}/customer`} element={<Customer />} />
            <Route
              path={`${devNavUrl}/customercreate`}
              element={<CustomerCreate />}
            />
            <Route
              path={`${devNavUrl}/sentemail`}
              element={<CustomerCheckEmail />}
            />
            <Route
              path={`${devNavUrl}/customer-create-pass`}
              element={<CustomerCreatePass />}
            />
            <Route
              path={`${devNavUrl}/customer-created`}
              element={<CustomerCreated />}
            />
            <Route
              path={`${devNavUrl}/customer-forgotpass`}
              element={<CostumerForgotPass />}
            />
            <Route
              path={`${devNavUrl}/customer-forgotemail`}
              element={<CustomerForgotEmail />}
            />
            <Route
              path={`${devNavUrl}/customer-newpass`}
              element={<CustomerNewPass />}
            />
            <Route
              path={`${devNavUrl}/customer-newpasscreated`}
              element={<CustomerNewPassCreated />}
            />

            {/* Login3 */}
            <Route path={`${devNavUrl}/user`} element={<User />} />
            <Route path={`${devNavUrl}/usercreate`} element={<CreateUser />} />
            <Route
              path={`${devNavUrl}/usercreate-email`}
              element={<UserCreateCheck />}
            />
            <Route
              path={`${devNavUrl}/usercreate-pass`}
              element={<UserCreatePass />}
            />
            <Route
              path={`${devNavUrl}/usercreated`}
              element={<CreateSuccess />}
            />
            <Route
              path={`${devNavUrl}/userforgotpass`}
              element={<UserForgotPass />}
            />
            <Route
              path={`${devNavUrl}/userforgot-email`}
              element={<UserForgotPassCheck />}
            />
            <Route
              path={`${devNavUrl}/userforgot-pass`}
              element={<UserForgotPassCreate />}
            />
            <Route
              path={`${devNavUrl}/usernewpass`}
              element={<UserForgotPassSuccess />}
            />

            {/* tables */}
            <Route path={`${devNavUrl}/employee`} element={<Employee />} />
            <Route path={`${devNavUrl}/order`} element={<Order />} />
            <Route path={`${devNavUrl}/email`} element={<Email />} />
            <Route path={`${devNavUrl}/sample`} element={<Sample />} />
            <Route
              path={`${devNavUrl}/sample-costumer`}
              element={<SampleCustomer />}
            />
          </Routes>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
