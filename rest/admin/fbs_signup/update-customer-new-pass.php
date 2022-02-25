<?php
    try {
        include_once("../../common/package.php");
        include_once("Customer.php");
        include_once("functions-customer.php"); 

        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        checkInputData($data);    
        $connection = checkConnection();
        $customer = new Customer($connection);
        $encrypt = new Encryption();

        $customer->signup_password = $encrypt->doPasswordHash($data["signup_password"]);
        $customer->signup_key = trim(filter_var($data["signup_key"], FILTER_SANITIZE_STRING));
        $customer->signup_datetime = date("Y-m-d H:i:s"); 
        
        $result = checkNewPassword($customer);     
       
        Response::sendResponse(true, "Customer password created.", []);

    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  