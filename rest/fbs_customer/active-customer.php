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

        $customers->customer_aid  = filter_var($data["id"], FILTER_SANITIZE_STRING);
        $customers->customer_active = 0;
        $customers->customer_datetime = date("Y-m-d H:i:s"); 

        $result = checkActive($customers);
        Response::sendResponse(true, "customers deactived.", []);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }
