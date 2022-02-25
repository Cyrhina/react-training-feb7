export const setError = (val) => {
  return {
    type: "ERROR",
    payload: val,
  };
};

export const setMessage = (val) => {
  return {
    type: "MESSAGE",
    payload: val,
  };
};

export const setSuccess = (val) => {
  return {
    type: "SUCCESS",
    payload: val,
  };
};

export const setSave = (val) => {
  return {
    type: "SAVE",
    payload: val,
  };
};

export const setIsConfirm = (val) => {
  return {
    type: "CONFIRM",
    payload: val,
  };
};

//#4 check if is_add is on reducer - go to reducer
export const setIsAdd = (val) => {
  return {
    type: "IS_ADD",
    payload: val,
  };
};

export const setIsSearch = (val) => {
  return {
    type: "IS_SEARCH",
    payload: val,
  };
};

export const setStartIndex = (val) => {
  return {
    type: "START_INDEX",
    payload: val,
  };
};

export const setIsDonate = (val) => {
  return {
    type: "IS_DONATE",
    payload: val,
  };
};

export const setIsSponsor = (val) => {
  return {
    type: "IS_SPONSOR",
    payload: val,
  };
};

//logins
export const setIsSignup = (val) => {
  return {
    type: "IS_SIGNUP",
    payload: val,
  };
};

export const setIsPassCreated = (val) => {
  return {
    type: "IS_PASSCREATED",
    payload: val,
  };
};

export const setIsLoginSuccess = (val) => {
  return {
    type: "IS_LOGIN_SUCCESS",
    payload: val,
  };
};

export const setIsEmailcheck = (val) => {
  return {
    type: "IS_EMAILCHECK",
    payload: val,
  };
};

export const setIsForgotPass = (val) => {
  return {
    type: "IS_FORGOT_PASS",
    payload: val,
  };
};

export const setIsForgotPassSuccess = (val) => {
  return {
    type: "IS_FORGOT_PASS_SUCCESS",
    payload: val,
  };
};
//SAMPLE #2 LOGIN
export const setIsCostumerCreate = (val) => {
  return {
    type: "IS_COSTUMER_CREATE",
    payload: val,
  };
};

export const setIsCostumerCreatedPass = (val) => {
  return {
    type: "IS_COSTUMER_CREATED_PASS",
    payload: val,
  };
};

export const setIsCostumerForgotEmail = (val) => {
  return {
    type: "IS_COSTUMER_FORGOT_EMAIL",
    payload: val,
  };
};

export const setIsCostumerForgotSuccess = (val) => {
  return {
    type: "IS_COSTUMER_FORGOT_SUCCESS",
    payload: val,
  };
};
//SAMPLE #3 LOGIN
export const setIsUserCreate = (val) => {
  return {
    type: "IS_USER_CREATE",
    payload: val,
  };
};

export const setIsUserCreatedPass = (val) => {
  return {
    type: "IS_USER_CREATED_PASS",
    payload: val,
  };
};

export const setIsUserForgotEmail = (val) => {
  return {
    type: "IS_USER_FORGOT_EMAIL",
    payload: val,
  };
};

export const setIsUserForgotSuccess = (val) => {
  return {
    type: "IS_USER_FORGOT_SUCCESS",
    payload: val,
  };
};
