<?php
    try {
        include_once("../../common/package.php");
        include_once("Users.php");
        include_once("functions-user.php"); 
        include_once("../../notification/new-account.php");        
        
        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);               
        $connection = checkConnection();
        checkInputData($data);  
        $account = new Users($connection);
        $encrypt = new Encryption();
        
        $user->users_name  = filter_var($data["users_name"], FILTER_SANITIZE_STRING);
        $user->users_email  = filter_var($data["users_email"], FILTER_SANITIZE_STRING);
        $user->users_key =  $encrypt->doHash(rand());
        $user->users_active  = 1;
        $user->users_datetime = date("Y-m-d H:i:s");  

        $email = checkReadEmail($user);
        
        $result = checkCreate($user);

        $mail = sendEmail($user->users_email, $user->users_key, $user->users_name);
        Response::sendResponse(true, "Create account successful and email send",  $data, $mail);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  