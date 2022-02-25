<?php
    try {
        include_once("../../common/package.php");
        include_once("Customer.php");
        include_once("functions-customer.php"); 
        include_once("../../notification/reset-customer-password.php");
        
        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        checkInputData($data);    
        $connection = checkConnection();
        $customer = new Customer($connection);
        $encrypt = new Encryption();

        $customer->signup_email = trim(filter_var($data["signup_email"], FILTER_SANITIZE_STRING));
        $customer->signup_key = $encrypt->doHash(rand());  
        $customer->signup_datetime = date("Y-m-d H:i:s");     
        
        $email = $customer->isEmailActive();

        if($email->num_rows == 0) {
            Response::sendResponse(false, "Email not found.", $email);
            exit();
        }
        $data = getResultData($email);

        $result = checkForgotPass($customer);

        $mail = sendEmail($customer->signup_email, $customer->signup_key, $data[0]["signup_fname"]); 
        Response::sendResponse(true, "Forgot password link successfully sent to your email.", $data, $mail);
        
       
        // Response::sendResponse(true, "Users successfuly created.", $users->last_created_id);

    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  