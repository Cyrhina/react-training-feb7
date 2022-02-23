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
        
        $account->account_fname  = filter_var($data["account_fname"], FILTER_SANITIZE_STRING);
        $account->account_lname  = filter_var($data["account_lname"], FILTER_SANITIZE_STRING);
        $account->account_email  = filter_var($data["account_email"], FILTER_SANITIZE_STRING);
        
        $account->account_key =  $encrypt->doHash(rand());

        $account->account_active  = 1;
        $account->account_datetime = date("Y-m-d H:i:s");  

        $email = checkReadEmail($account);
        
        $result = checkCreate($account);

        $mail = sendEmail($account->account_email, $account->account_key, $account->account_fname, $account->account_lname);
        Response::sendResponse(true, "Create account succesful email sent",  $data, $mail);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

// new gmail for phpmailer
    //cyc92781@gmail.com
    //cy123123

    
  