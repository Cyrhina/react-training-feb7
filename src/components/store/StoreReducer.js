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

    //LOGIN
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

    case "IS_LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: action.payload,
      };

    case "IS_EMAILCHECK":
      return {
        ...state,
        isEmailcheck: action.payload,
      };

    case "IS_FORGOT_PASS":
      return {
        ...state,
        isForgotPass: action.payload,
      };

    case "IS_FORGOT_PASS_SUCCESS":
      return {
        ...state,
        isForgotPassSuccess: action.payload,
      };
    //SAMPLE #2 LOGIN
    case "IS_COSTUMER_CREATE":
      return {
        ...state,
        isCostumerCreate: action.payload,
      };

    case "IS_COSTUMER_CREATED_PASS":
      return {
        ...state,
        isCostumerCreatedPass: action.payload,
      };

    case "IS_COSTUMER_FORGOT_EMAIL":
      return {
        ...state,
        isCostumerForgotEmail: action.payload,
      };

    case "IS_COSTUMER_FORGOT_SUCCESS":
      return {
        ...state,
        isCostumerForgotSuccess: action.payload,
      };

    //SAMPLE #3 LOGIN
    case "IS_USER_CREATE":
      return {
        ...state,
        isUserCreate: action.payload,
      };

    case "IS_USER_CREATED_PASS":
      return {
        ...state,
        isUserCreatedPass: action.payload,
      };

    case "IS_USER_FORGOT_EMAIL":
      return {
        ...state,
        isUserForgotEmail: action.payload,
      };

    case "IS_USER_FORGOT_SUCCESS":
      return {
        ...state,
        isUserForgotSuccess: action.payload,
      };

    default:
      return state;
  }
};
