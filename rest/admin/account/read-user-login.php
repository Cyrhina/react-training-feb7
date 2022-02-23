<?php
// Using try catch block there is an error using the "use" keyword for JWT namespace
// use JWT
use \Firebase\JWT\JWT;
    try {
        require '../../jwt/vendor/autoload.php';  
        include_once("../../common/package.php");
        include_once("Users.php");
        include_once("functions-user.php"); 
        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        checkInputData($data);    
        $connection = checkConnection();
        $user = new Users($connection);

        $user->users_email = trim(filter_var($data["users_email"], FILTER_SANITIZE_STRING));
        $password = trim(filter_var($data["users_password"], FILTER_SANITIZE_STRING));

        $key = "jwt_admin_ko_ito";

        $result = $user->readLogin();
        if($result->num_rows == 0) {
            Response::sendResponse(false, "Invalid email. Please use a registered one.", $result->fetch_assoc());
            exit();
        }

        $row = $result->fetch_assoc();
        extract($row);
        if(password_verify($password, $users_password)){
            $payload = array(
                "iss" => "localhost", // A string containing the name or identifier of the issuer application.
                "aud" => "pat",
                "iat" => time(),  // timestamp of token issuing.
                // "nbf" => time() + 1, // Timestamp of when the token should start being considered valid
                // "exp" => time() + 3600, // Timestamp of when the token should cease to be valid.
                "data" => array("email" => $users_email, "data" => $row), // App payload
            );            
            $jwt = JWT::encode($payload, $key);

           
            Response::sendResponse(true, "Access granted.", $jwt, $row);
            // Response::sendResponse(true, "Access granted.", $row);
        }else {
            Response::sendResponse(false, "Access denied.", null);
        }
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  