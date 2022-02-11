<?php
    try {
        include_once("../common/package.php");
        include_once("Email.php");
        include_once("functions-email.php"); 

        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);
        $connection = checkConnection();

        $email = new Email($connection);

        $result = checkReadAll($email);
        $data = getResultData($result);
         Response::sendResponse(true, "Email data found", $data);
    } catch (Error $e) {
        Response::sendResponse(false, "Requests interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  