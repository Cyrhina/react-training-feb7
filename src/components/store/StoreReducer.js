export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "MESSAGE":
      return {
        ...state,
        message: action.payload,
      };

    case "SUCCESS":
      return {
        ...state,
        success: action.payload,
      };

    case "SAVE":
      return {
        ...state,
        isSave: action.payload,
      };

    case "CONFIRM":
      return {
        ...state,
        isConfirm: action.payload,
      };
    case "IS_ADD":
      return {
        ...state,
        isAdd: action.payload,
      };

    case "IS_SEARCH":
      return {
        ...state,
        isSearch: action.payload,
      };

    case "START_INDEX":
      return {
        ...state,
        startIndex: action.payload,
      };

    case "IS_DONATE":
      return {
        ...state,
        isDonate: action.payload,
      };

    case "IS_SPONSOR":
      return {
        ...state,
        isSponsor: action.payload,
      };

    case "IS_SIGNUP":
      return {
        ...state,
        isSignup: action.payload,
      };

    case "IS_PASSCREATED":
      return {
        ...state,
        isPassCreated: action.payload,
      };

    case "IS_LOGINSUCCESS":
      return {
        ...state,
        isLogin: action.payload,
      };

    case "IS_EMAILCHECK":
      return {
        ...state,
        isEmailcheck: action.payload,
      };

    case "IS_FORGOTPASSSUCCESS":
      return {
        ...state,
        isForgotPassSuccess: action.payload,
      };

    default:
      return state;
  }
};
