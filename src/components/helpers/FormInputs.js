import React from "react";
import { useField } from "formik";
import { FaExclamationCircle } from "react-icons/fa";

export const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="error">
        <label className="label" htmlFor={props.id || props.name}>
          {label}
        </label>
        {meta.touched && meta.error ? (
          <span className="error--msg">{meta.error}</span>
        ) : null}
      </div>

      <div>
        {meta.touched && meta.error ? (
          <div className="error__main">
            <input {...field} {...props} />
          </div>
        ) : (
          <input {...field} {...props} />
        )}
      </div>
    </>
  );
};

export const InputTextLogin = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {meta.touched && meta.error ? (
        <div className="error-label">
          <input className="error-input" {...field} {...props} />
          <label className="">{label}</label>
        </div>
      ) : (
        <div className="t-color">
          <input {...field} {...props} />
          <label>{label}</label>
        </div>
      )}
      {meta.touched && meta.error ? (
        <div className="error-msg">
          <FaExclamationCircle />
          <span>{meta.error}</span>
        </div>
      ) : null}
    </>
  );
};

export const InputFileUpload = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} className="file-upload" />

      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};

export const InputSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
      />

      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};

export const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea {...field} {...props}></textarea>
      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};

// OCT18 END

export const MyRadio = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input {...field} {...props} />
      <label htmlFor={props.id || props.name}>{label}</label>

      {/* {meta.touched && meta.error ? (
        <p className="error-msg">{meta.error}</p>
      ) : null} */}
    </>
  );
};

export const MyRadioError = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {meta.touched && meta.error ? (
        <span className="error--msg">{meta.error}</span>
      ) : null}
    </>
  );
};

export const MyCheckbox = ({ label, open, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-show" : null}
      />
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      {/* <span htmlFor={props.id || props.name}>{label}</span> */}
      {meta.touched && meta.error ? (
        <span className="error-msg error-show">{meta.error}</span>
      ) : null}
    </>
  );
};
