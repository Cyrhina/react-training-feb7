<?php 

function checkConnection() {
        $db = new Database();
        $connection = $db->getConnection();
        if($connection == null) {
            Response::sendResponse(false, "Database connection error.", $connection);
            exit();
        }
        return $connection;
    }

function checkReadAll($object) {
    $result = $object->readAll();
    if($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records.", []);
        exit();
    }
    return $result;
}

function checkReadLimit($object, $start, $total) {
    $result = $object->readLimit($start, $total);
    if($result->num_rows == 0) {
        Response::sendResponse(true, "Empty records.", []);
        exit();
    }
    return $result;
}

function checkReadById($object) {
    $result = $object->readById();
    if($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records.", []);
        exit();
    }
    return $result;
}


function checkInputData($data) {
    if(empty($data)) {
        Response::sendResponse(false, "404: Data not found.", []);
        exit();
    }
}

function checkArchive($object) {
    $result = $object->archive();
    if(!$result) {
        Response::sendResponse(false, "There's a problem processing your request.", []);
        exit();
    }
    return $result;
}

function checkCreate($object) {
    $result = $object->create();
    if(!$result) {
        Response::sendResponse(false, "Create Please check your sql query.", []);
        exit();
    }
    return $result;
}
    
function checkDelete($object) {
    $result = $object->delete();
    if(!$result) {
        Response::sendResponse(false, "Please check your sql query.", []);
        exit();
    }
    return $result;
}


function checkReadEmail($object) {
    $result = $object->isEmailExist();
    if($result->num_rows > 0) {
        Response::sendResponse(false, "Email already exist", []);
        exit();
    }
    return $result;
}

function checkReadKey($object) {
    $result = $object->readKey();
    if($result->num_rows == 0) {
        Response::sendResponse(false, "The link is Invalid.", []);
        exit();
    }
    return $result;
}

function checkUpdate($object) {
    $result = $object->update();
    if(!$result) {
        Response::sendResponse(false, "There's a problem processing your request.", []);
        exit();
    }
    return $result;
}

function checkNewPassword($object) {
    $result = $object->updateNewPassword();
    if(!$result) {
        Response::sendResponse(false, "New Password Please check your sql query.", []);
        exit();
    }
    return $result;
}

function checkUpdateCusId($object) {
    $result = $object->updateCusId();
    if(!$result) {
        Response::sendResponse(false, "Cus ID Please check your sql query.", []);
        exit();
    }
    return $result;
}

function checkForgotPass($object) {
    $result = $object->updateForgotPassword();
    if(!$result) {
        Response::sendResponse(false, "Please check your sql query.", []);
        exit();
    }
    return $result;
}

function getResultData($result) {
    $data = [];
    while($row = $result->fetch_assoc()) {
        extract($row);
        $list = [
            "account_aid" => $account_aid,
            "account_active" => $account_active,
            "account_fname" => $account_fname,
            "account_lname" => $account_lname,
            "account_email" => $account_email,
            "account_key" => $account_key,
            "account_password" => $account_password,
            "account_datetime" => $account_datetime,
        ];
        array_push($data, $list);
    }
    return $data;
}

