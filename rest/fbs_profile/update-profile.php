<?php
    try {
        include_once("../common/package.php");
        include_once("Profile.php");
        include_once("functions-profile.php"); 

        $body = file_get_contents("php://input");
        $data = json_decode($body, true);

        checkInputData($data);    

        $connection = checkConnection();
        $profile = new Profile ($connection);
        $profile->profile_aid  = filter_var($data["profile_aid"], FILTER_SANITIZE_STRING);
        $profile->profile_fname  = filter_var($data["profile_fname"], FILTER_SANITIZE_STRING);
        $profile->profile_lname  = filter_var($data["profile_lname"], FILTER_SANITIZE_STRING);
        $profile->profile_datetime = date("Y-m-d H:i:s"); 

        $result = checkUpdate($profile);
        Response::sendResponse(true, "Profile updated.", []);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  