<?php
    try {
        include_once("../common/package.php");
        include_once("Customer.php");
        include_once("functions-customer.php"); 

        $body = file_get_contents("php://input");
        $data = json_decode($body, true);

        checkInputData($data);    

        $connection = checkConnection();
        $customers = new Customer ($connection);
        $customers->customer_aid  = filter_var($data["customer_aid"], FILTER_SANITIZE_STRING);
        $customers->customer_fullname  = filter_var($data["customer_fullname"], FILTER_SANITIZE_STRING);
        $customers->customer_date  = filter_var($data["customer_date"], FILTER_SANITIZE_STRING);
        $customers->customer_active = 1;
        $customers->customer_datetime = date("Y-m-d H:i:s"); 

        $result = checkUpdate($customers);
        Response::sendResponse(true, "Profile updated.", []);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  