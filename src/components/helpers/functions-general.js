//LOCAL NI MON
export const devApiUrl = "http://localhost/fbs/react-training-feb7/rest";

// development url
//export const devApiUrl = "https://fca.edu.ph/dev-app/rest";
export const devBaseUrl = "https://fca.edu.ph/sample";
export const devNavUrl = "/sample";

// production url
// export const devApiUrl = "https://fca.edu.ph/app/rest";
// export const devBaseUrl = "https://fca.edu.ph/app";

// Copyright year
export const copyrightYear = () => {
  return new Date().getFullYear();
};

// get today date
export const getTodayDate = () => {
  var today = new Date();

  return (
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2)
  );
};

// get school year
export const getSchoolYear = () => {
  const d = new Date();
  const year1 = d.getFullYear();
  const year2 = d.getFullYear() + 1;

  return `${year1}-${year2}`;
};

// accept only numbers
export const handleNumOnly = (e) => {
  if (e.charCode < 48 || e.charCode > 57) {
    e.preventDefault();
  }
};

// do load more
export const doLoadmore = (data, setResult) => {
  if (data.data === null || !data.status) {
    setResult([]);
  } else {
    setResult((prevState) => [...prevState, ...data.data]);
  }
};

// do list
export const doList = (data, setResult) => {
  if (data.data === null || !data.status) {
    setResult([]);
  } else {
    setResult(data.data);
    //setResult([]);
  }
};

// get the url id parameter
export const getUrlParam = (id) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // const param = urlParams.get(id);
  // return param;
  return urlParams;
};

// fetch for uploading photo or file
export const fetchFormData = (url, fd = {}) => {
  const data = fetch(url, {
    method: "post",
    body: fd,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error(error + " api endpint error");
    });
  return data;
};
