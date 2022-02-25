import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  error: false,
  message: "",
  success: false,
  isSave: false,
  isConfirm: false,
  isAdd: false,
  isSearch: false,
  startIndex: 0,
  isDonate: false,
  isSponsor: false,
  isLoginSuccess: false,
  isSignup: false,
  isEmailcheck: false,
  isPassCreated: false,
  isForgotPass: false,
  isForgotPassSuccess: false,
  isCostumerCreate: false,
  isCostumerCreatedPass: false,
  isCostumerForgotEmail: false,
  isCostumerForgotSuccess: false,
  isUserCreate: false,
  isUserCreatedPass: false,
  isUserForgotEmail: false,
  isUserForgotSuccess: false,
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
