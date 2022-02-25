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
        $account->donor_cus_id = filter_var($data["donor_cus_id"], FILTER_SANITIZE_STRING);
        $account->donor_email = filter_var($data["donor_email"], FILTER_SANITIZE_STRING);
        $account->donor_datetime = date("Y-m-d H:i:s"); 
        
        $result = checkUpdateCusId($account);     
       
        Response::sendResponse(true, "Cus ID updated.", []);

    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  