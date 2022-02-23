<?php
class Database {
    private $host;
    private $databaseName;
    private $username;
    private $password;
    public function getConnection() {
        
        // LOCAL NI MON
            $databaseName = "fbs_training_v2"; 
            $username = "root"; 
            $password = ""; 

            // $databaseName = "dbr1f28oywgmml"; 
            // $username = "frontli5_fbs"; 
            // $password = "6o~q%}%U^&67"; 

        // // Production
        // $databaseName = "db_fca_students"; 
        // $username = "ugxv5milyju80"; 
        // $password = "Tr2Na,+kI9c$"; 
        $mysqli = new mysqli($host, $username, $password, $databaseName);
        if($mysqli->connect_error) {
            $mysqli = null;
        }
        return $mysqli;
    }
}