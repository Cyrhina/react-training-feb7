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
        $user->user_key = trim(filter_var($data["val1"], FILTER_SANITIZE_STRING));
        $result = checkReadKey($user);
        $data = getResultData($result);
        Response::sendResponse(true, "account key data found.", $data);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  