<?php
    try {
        include_once("../../common/package.php");
        include_once("User.php");
        include_once("functions-user.php"); 
        include_once("../../notification/reset-userpassword.php");
        
        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        checkInputData($data);    
        $connection = checkConnection();
        $users = new User($connection);
        $encrypt = new Encryption();

        $users->user_email = trim(filter_var($data["user_email"], FILTER_SANITIZE_STRING));
        $users->user_key = $encrypt->doHash(rand());  
        $users->user_datetime = date("Y-m-d H:i:s");     
        
        $email = $users->isEmailActive();

        if($email->num_rows == 0) {
            Response::sendResponse(false, "Email not found.", $email);
            exit();
        }
        $data = getResultData($email);

        $result = checkForgotPass($users);

        $mail = sendEmail($users->user_email, $users->user_key, $data[0]["user_fname"]); 
        Response::sendResponse(true, "Forgot password link successfully sent to your email.", $data, $mail);
        
       
        // Response::sendResponse(true, "Users successfuly created.", $users->last_created_id);

    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  