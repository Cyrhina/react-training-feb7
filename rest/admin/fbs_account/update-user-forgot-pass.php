<?php
    try {
        include_once("../../common/package.php");
        include_once("Account.php");
        include_once("functions-account.php"); 
        include_once("../../notification/reset-password.php");
        
        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        checkInputData($data);    
        $connection = checkConnection();
        $account = new Account($connection);
        $encrypt = new Encryption();

        $account->account_email = trim(filter_var($data["account_email"], FILTER_SANITIZE_STRING));
        $account->account_key = $encrypt->doHash(rand());  
        $account->account_datetime = date("Y-m-d H:i:s");     
        
        $email = $account->isEmailActive();

        if($email->num_rows == 0) {
            Response::sendResponse(false, "Email not found.", $email);
            exit();
        }
        $data = getResultData($email);

        $result = checkForgotPass($account);

        $mail = sendEmail($account->account_email, $account->account_key, $data[0]["account_fname"]); 
        Response::sendResponse(true, "Forgot password link successfully sent to your email.", $data, $mail);
        
       
        // Response::sendResponse(true, "Users successfuly created.", $users->last_created_id);

    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  