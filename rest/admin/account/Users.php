<?php
    class Users {
        public $users_aid ;
        public $users_active ;
        public $users_key ;
        public $users_name ;
        public $users_email ;
        public $users_password ;
        public $users_datetime ;

        public $connection ;
        public $tblUsersAccount;

        public function __construct($db) {
            $this->connection = $db;
            $this->tblUsersAccount = "fbs_users";
        }

        public function create() {
            $sql = "insert into {$this->tblUsersAccount} ";     
            $sql .= "( users_active, ";      
            $sql .= "users_key, ";     
            $sql .= "users_name, "; 
            $sql .= "users_email, "; 
            $sql .= "users_password, "; 
            $sql .= "users_datetime ) values ( ";
            $sql .= "'{$this->users_active}', ";
            $sql .= "'{$this->users_key}', ";
            $sql .= "'{$this->users_name}', ";
            $sql .= "'{$this->users_email}', ";
            $sql .= "'{$this->users_password}', ";
            $sql .= "'{$this->users_datetime}' ) ";
            
            $result = $this->connection->query($sql);
            return $result;
        }

        // update for new password
        public function updateNewPassword() {
            $sql = "update {$this->tblUsersAccount} set ";
            $sql .= "users_key = '', ";
            $sql .= "users_password = '{$this->users_password}', ";
            $sql .= "users_active = 1, ";
            $sql .= "users_datetime = '{$this->users_datetime}' ";

            $sql .= "where users_key = '{$this->users_key}' ";
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
            $sql = "update {$this->tblUsersAccount} set ";
            $sql .= "users_cus_id = '{$this->users_cus_id}', ";
            $sql .= "users_datetime = '{$this->users_datetime}' ";

            $sql .= "where users_email = '{$this->users_email}' ";
            $sql .= "and users_active = 1 ";
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
            $sql = "update {$this->tblUsersAccount} set ";
            $sql .= "users_key = '{$this->users_key}', ";
            $sql .= "users_datetime = '{$this->users_datetime}' ";

            $sql .= "where users_email = '{$this->users_email}' ";
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
            $sql = "select * from {$this->tblUsersAccount} ";
            $sql .= "where users_key = '{$this->users_key}' ";
            $result = $this->connection->query($sql);
            return $result;
        }

        // login
        public function readLogin() {
            $sql = "select * from {$this->tblUsersAccount} ";
            $sql .= "where users_email = '{$this->users_email}' ";
            $sql .= "and users_active = 1 ";
            $result = $this->connection->query($sql);            
            return $result;
        }

        public function archive() {
            $sql = "update {$this->tblUsersAccount} set ";
            $sql .= "users_active = '0', ";
            $sql .= "users_datetime = '{$this->users_datetime}' ";
            $sql .= "where users_aid  = '{$this->users_aid}' ";
            
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;
    
            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        public function isEmailExist() {
            $sql = "select * from {$this->tblUsersAccount} ";
            $sql .= "where users_email = '{$this->users_email}' ";
            $result = $this->connection->query($sql);
            return $result;
        }  

        public function isEmailActive() {
            $sql = "select * from {$this->tblUsersAccount} ";
            $sql .= "where users_email = '{$this->users_email}' ";
            $sql .= "and users_active = 1 ";
            $result = $this->connection->query($sql);
            return $result;
        }

    }