<?php
    try {
        include_once("../common/package.php");
        include_once("Email.php");
        include_once("functions-email.php"); 
        
        $body = file_get_contents("php://input");

       
        $data = json_decode($body, true);
               
        $connection = checkConnection();
        checkInputData($data);  

        $email = new Email($connection);
        $email->email_name  = filter_var($data["email_name"], FILTER_SANITIZE_STRING);
        $email->email_email  = filter_var($data["email_email"], FILTER_SANITIZE_STRING);
        $email->email_datetime = date("Y-m-d H:i:s");  
        
        $result = checkCreate($email);

        Response::sendResponse(true, "New Email created", $result);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  