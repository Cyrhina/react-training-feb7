<?php
    try {
        include_once("../../common/package.php");
        include_once("Account.php");
        include_once("functions-account.php"); 
        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        checkInputData($data);    
        $connection = checkConnection();
        $account = new Account($connection);
        $encrypt = new Encryption();
        $account->account_password = $encrypt->doPasswordHash($data["account_password"]);
        $account->account_key = trim(filter_var($data["account_key"], FILTER_SANITIZE_STRING));
        $account->account_datetime = date("Y-m-d H:i:s"); 
        
        $result = checkNewPassword($account);     
       
        Response::sendResponse(true, "user password created.", []);

    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  