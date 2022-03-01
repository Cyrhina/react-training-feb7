<?php
    try {
        include_once("../common/package.php");
        include_once("Customer.php");
        include_once("functions-customer.php"); 

        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        $connection = checkConnection();
        checkInputData($data);  
        
        $customers = new Customer ($connection);
        $customers->customer_aid = filter_var($data["id"], FILTER_SANITIZE_STRING);  
        $result = checkDelete($customers);
        Response::sendResponse(true, "customer successfuly deleted.",[]);      
    } catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  