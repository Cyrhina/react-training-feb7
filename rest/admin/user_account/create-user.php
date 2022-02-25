<?php
    try {
        include_once("../../common/package.php");
        include_once("User.php");
        include_once("functions-user.php"); 
        include_once("../../notification/new-user.php");        
        
        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);               
        $connection = checkConnection();
        checkInputData($data);  
        $users = new User($connection);
        $encrypt = new Encryption();
        
        $users->user_name  = filter_var($data["user_name"], FILTER_SANITIZE_STRING);
        $users->user_date  = filter_var($data["user_date"], FILTER_SANITIZE_STRING);
        $users->user_email  = filter_var($data["user_email"], FILTER_SANITIZE_STRING);
        
        $users->user_key =  $encrypt->doHash(rand());

        $users->user_active  = 1;
        $users->user_datetime = date("Y-m-d H:i:s");  

        $email = checkReadEmail($users);
        
        $result = checkCreate($users);

        $mail = sendEmail($users->user_email, $users->user_key, $users->user_name, $users->user_date);
        Response::sendResponse(true, "Create Costumer account succesful email sent",  $data, $mail);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

    
  