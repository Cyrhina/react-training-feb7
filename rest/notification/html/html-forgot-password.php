<?php

    function getHtmlForgotPassword($key, $name, $ROOT_DOMAIN) {
        $html = '<div
            style="
            font-family: Arial, Helvetica, sans-serif;
            background-color: #e9e9e9;
            width: 100%;
            height: 100%;
            position: relative;
            "
        >
            <div
            style="
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 360px;
                text-align: center;
                margin: 0 auto;
                padding: 100px 0;
            "
            >
            <div
                style="
                background-color: #fff;
                padding: 30px;
                line-height: 1.4;
                margin-bottom: 30px;
                "
            >
                <div style="text-align: left; margin-bottom: 20px">
                <figure>
                    <img
                    src="https://fca.edu.ph/wp-content/uploads/2020/07/logo.png"
                    alt="fca Logo"
                    style="width: 80%; display: block; margin: 0 auto"
                    />
                </figure>
                <h1 style="text-align: center">Password Reset</h1>
                <p>Hi ' . $name . '!</p>
                <p>
                    It looks like you need to reset your password. Your secret is safe
                    with us.
                </p>
                <p>
                    If you did not request a password change, then just ignore this
                    message.
                </p>
                <a
                    href="' . $ROOT_DOMAIN . '/create-password?key=' . $key . '"
                    style="
                    padding: 8px 16px;
                    background-color: #408b24;
                    color: #fff;
                    border-radius: 5px;
                    text-decoration: none;
                    width: 50%;
                    display: block;
                    margin: 30px auto 0;
                    text-align: center;
                    "
                    >Reset Password</a
                >
                <p style="margin-top: 20px">
                    Or, paste this link into your browser: <strong style="word-wrap: break-word">' . $ROOT_DOMAIN . '/create-password?key=' . $key . '</strong>
                </p>
                </div>
            </div>
        
            <div style="text-align: center; position: relative">
                <small
                style="
                    position: absolute;
                    top: 40px;
                    left: 50%;
                    transform: translateX(-50%);
                    line-height: 1.4;
                    font-size: 10px;
                    width: 100%;
                "
                >
                &copy; ' . date("Y") . ' Frontline Christian Academy, All Right Reserved<br />Frontline
                Christian Academy, Baloc Road, Brgy. San Ignacio <br />
                San Pablo City, Laguna. Philippines 4000
                </small>
            </div>
            </div>
        </div>';
        return $html;
    }