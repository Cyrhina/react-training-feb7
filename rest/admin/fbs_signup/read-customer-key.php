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

        $customer->signup_key = trim(filter_var($data["val1"], FILTER_SANITIZE_STRING));
        $result = checkReadKey($customer);
        $data = getResultData($result);
        Response::sendResponse(true, "accounts key data found.", $data);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  