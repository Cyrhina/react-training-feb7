import fetchApi from "./fetchApi";

import {
  baseUrl,
  devApiUrl,
  devNavUrl,
  doList,
  doLoadmore,
} from "./functions-general";

import {
  setSuccess,
  setMessage,
  setError,
  setSave,
  setIsConfirm,
  setIsAdd,
  setIsSignup,
  setIsPassCreated,
  setIsLoginSuccess,
  setIsForgotPassSuccess,
  setIsEmailcheck,
  setIsForgotPass,
  setIsCostumerCreate,
  setIsCostumerCreatedPass,
  setIsCostumerForgotEmail,
  setIsCostumerForgotSuccess,
  setIsUserCreate,
  setIsUserCreatedPass,
  setIsUserForgotEmail,
  setIsUserForgotSuccess,
} from "../store/StoreAction";
// import { checkRoleToRedirect } from "../pages/login/login-functions";

export const fetchData = async (
  //parameters
  setLoading,
  endpoint,
  fd,
  setResult,
  successMsg,
  errorMsg,
  dispatch,
  store,
  successModal,
  isLoadMore,
  navigate = null // props optional
) => {
  setLoading !== null && setLoading(true);

  const data = await fetchApi(devApiUrl + endpoint, fd, dispatch);
  console.log(data);

  // used for result set by read api
  isLoadMore && setResult !== null && doLoadmore(data, setResult);
  !isLoadMore && setResult !== null && doList(data, setResult);

  // if result data is undefined
  if (typeof data === "undefined") {
    console.log("undefined");
    dispatch(setError(true));
    dispatch(setMessage("API / Network Error"));
    setLoading !== null && setLoading(false);
    return;
  }

  // if result data is empty and status is false
  if (!data.status) {
    console.log(data.message);
    setLoading !== null && setLoading(false);
    dispatch(setError(true));
    dispatch(setMessage(data.message));
  }

  // if result data is not empty and status is true
  if (data.status) {
    console.log("Fetch success");
    setLoading !== null && setLoading(false);

    // add modal will be closed when used
    if (store.isAdd) {
      dispatch(setIsAdd(false));
      //this will refresh table list
      store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    }

    // delete modal will be closed when used
    if (store.isConfirm) {
      dispatch(setIsConfirm(false));
      store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    }
    // success modal will be closed when used
    if (successModal) {
      dispatch(setSuccess(true));
      dispatch(setMessage(successMsg));
    }

    //LOGIN
    // redirect to other page after login
    if (store.isLoginSuccess) {
      dispatch(setIsLoginSuccess(false));
      navigate(`${devNavUrl}/employee`);
    }
    // redirect to other page after signup ng new account
    if (store.isSignup) {
      dispatch(setIsSignup(false));
      navigate(`${devNavUrl}/createcheck`);
    }

    // redirect to other page after mag create ng password
    if (store.isEmailcheck) {
      dispatch(setIsEmailcheck(false));
      navigate(`${devNavUrl}/forgotpasscheck`);
    }

    // redirect to other page after mag create ng password
    if (store.isPassCreated) {
      dispatch(setIsPassCreated(false));
      navigate(`${devNavUrl}/createsuccess`);
    }

    // redirect to other page after giving email for changing password
    if (store.isForgotPass) {
      dispatch(setIsForgotPass(false));
      navigate(`${devNavUrl}/forgotpasscheck`);
    }
    // redirect to other page after creating new password
    if (store.isForgotPassSuccess) {
      dispatch(setIsForgotPassSuccess(false));
      navigate(`${devNavUrl}/forgotpasssuccess`);
    }

    //LOGIN ANOTHER SAMPLE 2
    // redirect to other page after signup ng new account
    if (store.isCostumerCreate) {
      dispatch(setIsCostumerCreate(false));
      navigate(`${devNavUrl}/sentemail`);
    }

    // redirect to other page after GUMAWA NG PASSWORD
    if (store.isCostumerCreatedPass) {
      dispatch(setIsCostumerCreatedPass(false));
      navigate(`${devNavUrl}/customer-newpasscreated`);
    }

    // redirect to other page pag merong nag match na email
    if (store.isCostumerForgotEmail) {
      dispatch(setIsCostumerForgotEmail(false));
      navigate(`${devNavUrl}/customer-forgotemail`);
    }

    // redirect to other page after makapag gawa ng bagong password
    if (store.isCostumerForgotSuccess) {
      dispatch(setIsCostumerForgotSuccess(false));
      navigate(`${devNavUrl}/customer-newpasscreated`);
    }

    //LOGIN ANOTHER SAMPLE 3
    // redirect to other page after signup ng new account
    if (store.isUserCreate) {
      dispatch(setIsUserCreate(false));
      navigate(`${devNavUrl}/usercreate-email`);
    }

    // redirect to other page after GUMAWA NG PASSWORD
    if (store.isUserCreatedPass) {
      dispatch(setIsUserCreatedPass(false));
      navigate(`${devNavUrl}/usercreated`);
    }

    // redirect to other page pag merong nag match na email
    if (store.isUserForgotEmail) {
      dispatch(setIsUserForgotEmail(false));
      navigate(`${devNavUrl}/userforgot-email`);
    }

    // redirect to other page after makapag gawa ng bagong password
    if (store.isUserForgotSuccess) {
      dispatch(setIsUserForgotSuccess(false));
      navigate(`${devNavUrl}/usernewpass`);
    }
    // if (store.isEmail) {
    //   dispatch(setIsEmail(false));
    // }

    // // other delete modal will be closed when used
    // if (store.isDelete) {
    //   dispatch(setIsDelete(false));
    //   store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    // }

    // // redirect to other page after login
    // if (store.isLogin) {
    //   setStorageRoute(data.data, data.mail);
    //   dispatch(setIsLogin(false));
    //   checkRoleToRedirect(navigate);
    // }
  }
};
