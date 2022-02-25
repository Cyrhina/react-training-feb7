<?php
    try {
        include_once("../../common/package.php");
        include_once("User.php");
        include_once("functions-user.php"); 

        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        checkInputData($data);    
        $connection = checkConnection();
        $users = new User($connection);
        $encrypt = new Encryption();

        $users->user_password = $encrypt->doPasswordHash($data["user_password"]);
        $users->user_key = trim(filter_var($data["user_key"], FILTER_SANITIZE_STRING));
        $users->user_datetime = date("Y-m-d H:i:s"); 
        
        $result = checkNewPassword($users);     
       
        Response::sendResponse(true, "users password created.", []);

    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  