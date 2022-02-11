<?php
    try {
        include_once("../common/package.php");
        include_once("Profile.php");
        include_once("functions-profile.php"); 

        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);
        $connection = checkConnection();

        $profile = new Profile($connection);

        $result = checkReadAll($profile);
        $data = getResultData($result);
         Response::sendResponse(true, "Profile data found", $data);
    } catch (Error $e) {
        Response::sendResponse(false, "Requests interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  