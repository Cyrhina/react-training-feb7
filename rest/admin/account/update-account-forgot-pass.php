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
        $account->donor_email = trim(filter_var($data["donor_email"], FILTER_SANITIZE_STRING));
        $account->donor_key = $encrypt->doHash(rand());  
        $account->donor_datetime = date("Y-m-d H:i:s");     
        
        $email = $account->isEmailActive();

        if($email->num_rows == 0) {
            Response::sendResponse(false, "Email not found.", $email);
            exit();
        }
        $data = getResultData($email);

        $result = checkForgotPass($account);

        $mail = sendEmail($account->donor_email, $account->donor_key, $data[0]["donor_fname"]);
        Response::sendResponse(true, "Forgot password link successfully sent to your email.", $data, $mail);
        
       
        // Response::sendResponse(true, "Users successfuly created.", $users->last_created_id);

    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  