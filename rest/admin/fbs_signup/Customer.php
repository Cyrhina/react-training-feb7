<?php
    class Customer {
        public $signup_aid ;
        public $signup_active ;
        public $signup_key ;
        public $signup_fullname ;
        public $signup_email ;
        public $signup_password ;
        public $signup_datetime ;

        public $connection ;
        public $tblCustomer;

        public function __construct($db) {
            $this->connection = $db;
            $this->tblCustomer = "fbs_signup";
        }

        public function create() {
            $sql = "insert into {$this->tblCustomer} ";     
            $sql .= "( signup_active, ";      
            $sql .= "signup_key, ";     
            $sql .= "signup_fullname, "; 
            $sql .= "signup_email, "; 
            $sql .= "signup_password, "; 
            $sql .= "signup_datetime ) values ( ";
            $sql .= "'{$this->signup_active}', ";
            $sql .= "'{$this->signup_key}', ";
            $sql .= "'{$this->signup_fullname}', ";
            $sql .= "'{$this->signup_email}', ";
            $sql .= "'{$this->signup_password}', ";
            $sql .= "'{$this->signup_datetime}' ) ";
            
            $result = $this->connection->query($sql);
            return $result;
        }

        // update for new password
        public function updateNewPassword() {
            $sql = "update {$this->tblCustomer} set ";
            $sql .= "signup_key = '', ";
            $sql .= "signup_password = '{$this->signup_password}', ";
            $sql .= "signup_active = 1, ";
            $sql .= "signup_datetime = '{$this->signup_datetime}' ";

            $sql .= "where signup_key = '{$this->signup_key}' ";
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;

            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        // update cus id
        public function updateCusId() {
            $sql = "update {$this->tblCustomer} set ";
            $sql .= "signup_cus_id = '{$this->signup_cus_id}', ";
            $sql .= "signup_datetime = '{$this->signup_datetime}' ";

            $sql .= "where signup_email = '{$this->signup_email}' ";
            $sql .= "and signup_active = 1 ";
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;

            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        // update forgot password
        public function updateForgotPassword() {
            $sql = "update {$this->tblCustomer} set ";
            $sql .= "signup_key = '{$this->signup_key}', ";
            $sql .= "signup_datetime = '{$this->signup_datetime}' ";

            $sql .= "where signup_email = '{$this->signup_email}' ";
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;

            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        // read key 
        public function readKey() {
            $sql = "select * from {$this->tblCustomer} ";
            $sql .= "where signup_key = '{$this->signup_key}' ";
            $result = $this->connection->query($sql);
            return $result;
        }

        // login
        public function readLogin() {
            $sql = "select * from {$this->tblCustomer} ";
            $sql .= "where signup_email = '{$this->signup_email}' ";
            $sql .= "and signup_active = 1 ";
            $result = $this->connection->query($sql);            
            return $result;
        }

        public function archive() {
            $sql = "update {$this->tblCustomer} set ";
            $sql .= "signup_active = '0', ";
            $sql .= "signup_datetime = '{$this->signup_datetime}' ";
            $sql .= "where signup_aid  = '{$this->signup_aid}' ";
            
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;
    
            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        public function isEmailExist() {
            $sql = "select * from {$this->tblCustomer} ";
            $sql .= "where signup_email = '{$this->signup_email}' ";
            $result = $this->connection->query($sql);
            return $result;
        }  

        public function isEmailActive() {
            $sql = "select * from {$this->tblCustomer} ";
            $sql .= "where signup_email = '{$this->signup_email}' ";
            $sql .= "and signup_active = 1 ";
            $result = $this->connection->query($sql);
            return $result;
        }

    }