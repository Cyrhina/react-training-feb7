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
        $account->donor_password = $encrypt->doPasswordHash($data["donor_password"]);
        $account->donor_key = trim(filter_var($data["donor_key"], FILTER_SANITIZE_STRING));
        $account->donor_datetime = date("Y-m-d H:i:s"); 
        
        $result = checkNewPassword($account);     
       
        Response::sendResponse(true, "account password created.", []);

    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  