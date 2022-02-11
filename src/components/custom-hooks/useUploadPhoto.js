import React from "react";
import { setError, setMessage } from "../../store/StoreAction";
import { devApiUrl, fetchFormData } from "../helpers/functions-general";

const useUploadPhoto = (url, dispatch) => {
  const [photo, setPhoto] = React.useState(null);

  const uploadPhoto = async () => {
    if (photo) {
      const fd = new FormData();
      fd.append("photo", photo);

      const data = await fetchFormData(devApiUrl + url, fd, dispatch);

      console.log(data);
    }
  };

  const handleChangePhoto = (e) => {
    console.log(e.target.files[0]);

    if (!e.target.files[0]) {
      setPhoto("");
      dispatch(setError(false));
      // dispatch(setErrorMessage(""));
      return;
    }

    const img = e.target.files[0];
    console.log(img);
    if (img.size > 60000) {
      console.log(1);
      dispatch(setError(true));
      dispatch(
        setMessage("Profile photo is too big. It should be less than 60Kb.")
      );
    } else {
      dispatch(setError(false));
      console.log("set photo");
      setPhoto(img);
    }
  };

  return { uploadPhoto, handleChangePhoto, photo };
};

export default useUploadPhoto;
