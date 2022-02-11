import { setError, setMessage } from "../../store/StoreAction";
import fetchApi from "./fetchApi";
import { devApiUrl } from "./functions-general";
import { checkStripeError } from "./stripe-error";

export async function checkProducts(itemEdit, values, dispatch, setLoading) {
  const data = await fetchApi(
    itemEdit
      ? devApiUrl + "/server/stripe/products/update-product.php"
      : devApiUrl + "/server/stripe/products/create-product.php",
    values
  );
  console.log(data);

  // if result data is undefined
  if (typeof data === "undefined") {
    dispatch(setError(true));
    dispatch(setMessage("API / Network Error"));
    setLoading(false);
    return;
  }

  if (data.type === "good" || data.deleted) {
    return data;
  } else {
    console.log("Error");
    // Show error message
    checkStripeError(data.error, dispatch);
    setLoading(false);
  }
}
