<?php
    class User {
        public $user_aid ;
        public $user_active ;
        public $user_key ;
        public $user_name ;
        public $user_date ;
        public $user_email ;
        public $user_password ;
        public $user_datetime ;

        public $connection ;
        public $tblUser;

        public function __construct($db) {
            $this->connection = $db;
            $this->tblUser = "user_account";
        }

        public function create() {
            $sql = "insert into {$this->tblUser} ";     
            $sql .= "( user_active, ";      
            $sql .= "user_key, ";     
            $sql .= "user_name, "; 
            $sql .= "user_date, "; 
            $sql .= "user_email, "; 
            $sql .= "user_password, "; 
            $sql .= "user_datetime ) values ( ";
            $sql .= "'{$this->user_active}', ";
            $sql .= "'{$this->user_key}', ";
            $sql .= "'{$this->user_name}', ";
            $sql .= "'{$this->user_date}', ";
            $sql .= "'{$this->user_email}', ";
            $sql .= "'{$this->user_password}', ";
            $sql .= "'{$this->user_datetime}' ) ";
            
            $result = $this->connection->query($sql);
            return $result;
        }

        // update for new password
        public function updateNewPassword() {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_key = '', ";
            $sql .= "user_password = '{$this->user_password}', ";
            $sql .= "user_active = 1, ";
            $sql .= "user_datetime = '{$this->user_datetime}' ";

            $sql .= "where user_key = '{$this->user_key}' ";
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
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_cus_id = '{$this->user_cus_id}', ";
            $sql .= "user_datetime = '{$this->user_datetime}' ";

            $sql .= "where user_email = '{$this->user_email}' ";
            $sql .= "and user_active = 1 ";
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
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_key = '{$this->user_key}', ";
            $sql .= "user_datetime = '{$this->user_datetime}' ";

            $sql .= "where user_email = '{$this->user_email}' ";
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
            $sql = "select * from {$this->tblUser} ";
            $sql .= "where user_key = '{$this->user_key}' ";
            $result = $this->connection->query($sql);
            return $result;
        }

        // login
        public function readLogin() {
            $sql = "select * from {$this->tblUser} ";
            $sql .= "where user_email = '{$this->user_email}' ";
            $sql .= "and user_active = 1 ";
            $result = $this->connection->query($sql);            
            return $result;
        }

        public function archive() {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_active = '0', ";
            $sql .= "user_datetime = '{$this->user_datetime}' ";
            $sql .= "where user_aid  = '{$this->user_aid}' ";
            
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;
    
            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        public function isEmailExist() {
            $sql = "select * from {$this->tblUser} ";
            $sql .= "where user_email = '{$this->user_email}' ";
            $result = $this->connection->query($sql);
            return $result;
        }  

        public function isEmailActive() {
            $sql = "select * from {$this->tblUser} ";
            $sql .= "where user_email = '{$this->user_email}' ";
            $sql .= "and user_active = 1 ";
            $result = $this->connection->query($sql);
            return $result;
        }

    }