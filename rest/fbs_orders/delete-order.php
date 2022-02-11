<?php
    try {
        include_once("../common/package.php");
        include_once("Order.php");
        include_once("functions-order.php"); 

        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        $connection = checkConnection();
        checkInputData($data);  
        $order = new Order ($connection);
        $order->order_aid = filter_var($data["id"], FILTER_SANITIZE_STRING);  
        $result = checkDelete($order);
        Response::sendResponse(true, "Order successfuly deleted.",[]);      
    } catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  