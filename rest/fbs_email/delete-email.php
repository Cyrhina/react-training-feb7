<?php
    try {
        include_once("../common/package.php");
        include_once("Email.php");
        include_once("functions-email.php"); 

        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        $connection = checkConnection();
        checkInputData($data);  
        $email = new Email ($connection);
        $email->email_aid = filter_var($data["id"], FILTER_SANITIZE_STRING);  
        $result = checkDelete($email);
        Response::sendResponse(true, "Email successfuly deleted.",[]);      
    } catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  