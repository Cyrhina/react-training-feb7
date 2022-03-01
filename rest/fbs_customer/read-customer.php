<?php
    try {
        include_once("../common/package.php");
        include_once("Customer.php");
        include_once("functions-customer.php"); 

        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);
        $connection = checkConnection();

        $customers = new Customer($connection);

        $result = checkReadAll($customers);
        $data = getResultData($result);
         Response::sendResponse(true, "Customer data found", $data);
    } catch (Error $e) {
        Response::sendResponse(false, "Requests interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  