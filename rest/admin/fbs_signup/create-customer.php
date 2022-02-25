<?php
    try {
        include_once("../../common/package.php");
        include_once("Customer.php");
        include_once("functions-customer.php"); 
        include_once("../../notification/new-customer.php");        
        
        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);               
        $connection = checkConnection();
        checkInputData($data);  
        $customer = new Customer($connection);
        $encrypt = new Encryption();
        
        $customer->signup_fullname  = filter_var($data["signup_fullname"], FILTER_SANITIZE_STRING);
        $customer->signup_email  = filter_var($data["signup_email"], FILTER_SANITIZE_STRING);
        
        $customer->signup_key =  $encrypt->doHash(rand());

        $customer->signup_active  = 1;
        $customer->signup_datetime = date("Y-m-d H:i:s");  

        $email = checkReadEmail($customer);
        
        $result = checkCreate($customer);

        $mail = sendEmail($customer->signup_email, $customer->signup_key, $customer->signup_fullname);
        Response::sendResponse(true, "Create Costumer account succesful email sent",  $data, $mail);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

    
  