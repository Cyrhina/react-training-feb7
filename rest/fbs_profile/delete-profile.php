<?php
try{
    include_once("../common/package.php");
        include_once("Profile.php");
        include_once("functions-profile.php"); 

        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        $connection = checkConnection();
        checkInputData($data);  
        
        $profile = new Profile ($connection);
        $profile->profile_aid = filter_var($data["id"], FILTER_SANITIZE_STRING);  
        $result = checkDelete($profile);
        Response::sendResponse(true, "Profile successfuly deleted.",[]);      
    } catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  