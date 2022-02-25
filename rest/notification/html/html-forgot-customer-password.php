<?php

function getHtmlForgotCustomerPassword($key, $name, $ROOT_DOMAIN) {
    $html = '<section
style="
height: 100%;
color: #191516;
font-size: 62.5%;
background-color: #f5faff;
padding: 6rem 3rem 1rem 1rem;
font-family: poppins, sans-serif;
"
>
<section>
<div
  style="
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    max-width: 350px;
    border-radius: 15px;
    background-color: #fff;
  "
>
  <div style="color: #191516; width: 100%; margin: 0 auto">
    <div
      style="
        max-width: 250px;
        width: 100%;
        margin: 0 auto;
        height: 70px;
        padding-top: 1rem;
        font-weight: bold;
        text-transform: uppercase;
      "
    >
      <header
      style="text-align:center;">
      <img style="width: 100%;" src="https://demo.frontlinebusiness.com.ph/dev/bts/bts-logo-black.png" alt="logo" />
      </header>
    </div>
    <div style="width: 100%; margin: 0 auto; text-align: center">
      <h2 style="font-weight: bold; font-size: 1.8rem; line-height: 1.8rem; color: #191516;">
        <!-- Verify Email-->
       Reset Password 
      </h2>
    </div>
    <div style="margin: 0 auto; width: 80%">
      <p style="font-size: 1rem; margin-top: 2rem; color: #707070">
        Hi ' . $name . '!
      </p>
      <p style="margin: 1rem 0; font-size: 1rem; color: #707070">
        To get started you need to create a password.
      </p>
      <div style="
            text-align: center;">
      <a
        href="' . $ROOT_DOMAIN . '/customer-newpass?key=' . $key . '"
        style="
        padding: 0.5rem;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid #f25848;
        background-color: #f25848;
        color: #fff;
        font-size: 0.8rem;
        text-decoration: none;"
      >
        Create New Password
      </a>
      </div>
      <p style="margin: 1rem 0; font-size: 1rem">
        Or paste this link to your browser:<span
          style="word-wrap: break-word"
          >' . $ROOT_DOMAIN . '/customer-newpass?key=' . $key . '</span
        >
        <br />
       
      </p>
    </div>
  </div>
</div>
</section>
<footer
style="
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  color: #707070;
  font-size: 0.7rem;
  text-align: center;
  z-index: 9999999;
"
>
<div>
  <p>
    &copy;' . date("Y") . '
    Frontline Business Solution. ALL RIGHT RESERVED<br />
    Frontline Bus. Solutions, Baloc, Road Brgy San Ignacio<br />
    San Pablo City, Laguna, Philippines 4000
  </p>

  <div
    style="
      max-width: 180px;
      width: 100%;
      height: 50px;
      margin: 0 auto;
      font-weight: bold;
      text-transform: uppercase;
    "
  >
    <div>
     
    <img style="width: 100%; opacity:0.5;" src="https://demo.frontlinebusiness.com.ph/dev/bts/bts-logo-black.png" alt="logo" />
    </div>

  </div>
</div>
</footer>
</section>';
    return $html;
}