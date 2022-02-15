<?php
    try {
        include_once("../../common/package.php");
        include_once("Account.php");
        include_once("functions-account.php"); 
        include_once("../../notification/new-account.php");        
        
        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);               
        $connection = checkConnection();
        checkInputData($data);  
        $account = new Account($connection);
        $encrypt = new Encryption();
        
        $account->donor_fname  = filter_var($data["donor_fname"], FILTER_SANITIZE_STRING);
        $account->donor_lname  = filter_var($data["donor_lname"], FILTER_SANITIZE_STRING);
        $account->donor_email  = filter_var($data["donor_email"], FILTER_SANITIZE_STRING);
        $account->donor_cus_id  = filter_var($data["donor_cus_id"], FILTER_SANITIZE_STRING);
        
        $account->donor_password = $encrypt->doPasswordHash($data["donor_password"]);
        $account->donor_key =  $encrypt->doHash(rand());

        $account->donor_active  = 1;
        $account->donor_created = date("Y-m-d");  
        $account->donor_datetime = date("Y-m-d H:i:s");  

        $email = checkReadEmail($account);
        
        $result = checkCreate($account);

        $mail = sendEmail($account->donor_email, $account->donor_key, $account->donor_fname);
        Response::sendResponse(true, "Create password link successfully sent to your email.",  $data, $mail);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  