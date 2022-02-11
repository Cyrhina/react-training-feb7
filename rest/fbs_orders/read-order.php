<?php
    try {
        include_once("../common/package.php");
        include_once("Order.php");
        include_once("functions-order.php"); 

        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);
        $connection = checkConnection();

        $order = new Order($connection);

        $result = checkReadAll($order);
        $data = getResultData($result);
         Response::sendResponse(true, "Order data found", $data);
    } catch (Error $e) {
        Response::sendResponse(false, "Requests interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  