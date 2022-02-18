<?php
    try {
        include_once("../../common/package.php");
        include_once("Users.php");
        include_once("functions-user.php"); 
        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        checkInputData($data);    
        $connection = checkConnection();
        $user = new Users($connection);
        $encrypt = new Encryption();
        $user->users_password = $encrypt->doPasswordHash($data["users_password"]);
        $user->users_key = trim(filter_var($data["users_key"], FILTER_SANITIZE_STRING));
        $user->users_datetime = date("Y-m-d H:i:s"); 
        
        $result = checkNewPassword($user);     
       
        Response::sendResponse(true, "user password created.", []);

    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  