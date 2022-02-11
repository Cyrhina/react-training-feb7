import React from "react";
import { setError, setMessage } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import fetchApi from "../helpers/fetchApi";
import { fetchData } from "../helpers/fetchData";
import { devApiUrl } from "../helpers/functions-general";
import { checkStripeError } from "../helpers/stripe-error";

const useStripeLoadAll = (url) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getData();
  }, [store.isSave]);

  const getData = async () => {
    setLoading(true);
    const data = await fetchApi(devApiUrl + url);
    console.log(data);

    // if result data is undefined
    if (typeof data === "undefined") {
      dispatch(setError(true));
      dispatch(setMessage("API / Network Error"));
      setLoading(false);
      return;
    }

    if (data.type === "good") {
      setResult(data);
      setLoading(false);
    } else {
      console.log("Error");
      // Show error message
      checkStripeError(data.error, dispatch);
      setLoading(false);
    }
  };

  return {
    loading,
    result,
  };
};

export default useStripeLoadAll;
