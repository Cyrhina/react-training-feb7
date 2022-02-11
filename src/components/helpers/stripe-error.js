import { setError, setMessage } from "../../store/StoreAction";

export function checkStripeError(error, dispatch) {
  dispatch(setError(true));
  // 4000000000000002
  error.decline_code === "generic_decline" &&
    dispatch(setMessage(error.message));

  // 4242424242424241
  error.code === "incorrect_number" && dispatch(setMessage(error.message));

  // 4000000000000069
  error.code === "expired_card" && dispatch(setMessage(error.message));

  // 4000000000000127
  error.code === "incorrect_cvc" && dispatch(setMessage(error.message));

  // 4000000000000119
  error.code === "processing_error" && dispatch(setMessage(error.message));

  // 4000000000009979
  error.decline_code === "stolen_card" && dispatch(setMessage(error.message));

  // 4000000000009987
  error.decline_code === "lost_card" && dispatch(setMessage(error.message));

  // 4000000000009995
  error.decline_code === "insufficient_funds" &&
    dispatch(setMessage(error.message));

  error.code === "invalid_expiry_month" && dispatch(setMessage(error.message));
  error.code === "invalid_expiry_year" && dispatch(setMessage(error.message));
  error.code === "invalid_cvc" && dispatch(setMessage(error.message));
  error.code === "card_declined" && dispatch(setMessage(error.message));

  error.type === "invalid_request_error" &&
    dispatch(setMessage(`API Error - ${error.message}`));
}
