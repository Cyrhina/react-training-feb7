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

    // redirect to other page after donor signup
    if (store.isSignup) {
      dispatch(setIsSignup(false));
      navigate(`${devNavUrl}/checkinbox`);
    }

    // redirect to other page after donor signup
    if (store.isPassCreated) {
      dispatch(setIsPassCreated(false));
      navigate(`${devNavUrl}/welcome-aboard`);
    }

    // if (store.isEmail) {
    //   dispatch(setIsEmail(false));
    // }

    // // other delete modal will be closed when used
    // if (store.isDelete) {
    //   dispatch(setIsDelete(false));
    //   store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
    // }

    // redirect to other page after login
    // if (store.isLogin) {
    //   setStorageRoute(data.data, data.mail);
    //   dispatch(setIsLogin(false));
    //   checkRoleToRedirect(navigate);
    // }
  }
};
