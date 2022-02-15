<?php
    // Using try catch block there is an error using the "use" keyword for JWT namespace
    // use JWT
    use \Firebase\JWT\JWT;
    try {  
        require '../../jwt/vendor/autoload.php';  
        include_once("../../common/package.php");
        include_once("Account.php");
        include_once("functions-account.php"); 
        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        checkInputData($data);    
        // Response::sendResponse(false, "404: Data not found.", $data["empNumber"]);
        $connection = checkConnection();
        $account = new Account($connection);
        $token = trim(filter_var($data["token"], FILTER_SANITIZE_STRING));
        $account->donor_aid = trim(filter_var($data["idNumber"], FILTER_SANITIZE_STRING));

        
        $key = "jwt_admin_ko_ito";

        if(!empty($token)){
            try {
                $decoded = JWT::decode($token, $key, array('HS256'));
                $account->donor_email = $decoded->data->email;
                // $email = $users->isEmailExist();
                $email = $account->readLogin();
                if($email->num_rows <= 0) {
                    Response::sendResponse(false, "Account is invalid", $account->donor_email);
                    exit();
                }
                Response::sendResponse(true, "Access granted.",  $email->fetch_assoc());
            }catch (Exeption $ex){
                Response::sendResponse(false, "Catch No token found.", $ex);
            }            
        }else {
            Response::sendResponse(false, "No token found.", $token);
        }
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  