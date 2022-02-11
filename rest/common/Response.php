<?php
    class Response {
        public static function sendResponse($status, $message, $data, $mail = null) {
            echo json_encode(
                array(
                    "status" => $status, 
                    "message" => $message, 
                    "data" => $data,
                    "mail" => $mail
                )
            );
        }
    }