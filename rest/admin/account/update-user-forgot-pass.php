<?php
    try {
        include_once("../../common/package.php");
        include_once("Users.php");
        include_once("functions-user.php"); 
        include_once("../../notification/reset-password.php");

        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        checkInputData($data);    
        $connection = checkConnection();
        $user = new Users($connection);
        $encrypt = new Encryption();
        
        $user->users_email = trim(filter_var($data["users_email"], FILTER_SANITIZE_STRING));
        $user->users_key = $encrypt->doHash(rand());  
        $user->users_datetime = date("Y-m-d H:i:s");     
        
        $email = $user->isEmailActive();

        if($email->num_rows == 0) {
            Response::sendResponse(false, "Email not found.", $email);
            exit();
        }
        $data = getResultData($email);

        $result = checkForgotPass($user);

        $mail = sendEmail($user->users_email, $user->users_key, $data[0]["users_fname"]);
        Response::sendResponse(true, "Forgot password link successfully sent to your email.", $data, $mail);
        
       
        // Response::sendResponse(true, "Users successfuly created.", $users->last_created_id);

    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  