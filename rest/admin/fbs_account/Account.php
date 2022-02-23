<?php
    class Account {
        public $account_aid ;
        public $account_active ;
        public $account_key ;
        public $account_fname ;
        public $account_lname ;
        public $account_email ;
        public $account_password ;
        public $account_datetime ;

        public $connection ;
        public $tblAccount;

        public function __construct($db) {
            $this->connection = $db;
            $this->tblAccount = "fbs_account";
        }

        public function create() {
            $sql = "insert into {$this->tblAccount} ";     
            $sql .= "( account_active, ";      
            $sql .= "account_key, ";     
            $sql .= "account_fname, "; 
            $sql .= "account_lname, "; 
            $sql .= "account_email, "; 
            $sql .= "account_password, "; 
            $sql .= "account_datetime ) values ( ";
            $sql .= "'{$this->account_active}', ";
            $sql .= "'{$this->account_key}', ";
            $sql .= "'{$this->account_fname}', ";
            $sql .= "'{$this->account_lname}', ";
            $sql .= "'{$this->account_email}', ";
            $sql .= "'{$this->account_password}', ";
            $sql .= "'{$this->account_datetime}' ) ";
            
            $result = $this->connection->query($sql);
            return $result;
        }

        // update for new password
        public function updateNewPassword() {
            $sql = "update {$this->tblAccount} set ";
            $sql .= "account_key = '', ";
            $sql .= "account_password = '{$this->account_password}', ";
            $sql .= "account_active = 1, ";
            $sql .= "account_datetime = '{$this->account_datetime}' ";

            $sql .= "where account_key = '{$this->account_key}' ";
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
            $sql = "update {$this->tblAccount} set ";
            $sql .= "account_cus_id = '{$this->account_cus_id}', ";
            $sql .= "account_datetime = '{$this->account_datetime}' ";

            $sql .= "where account_email = '{$this->account_email}' ";
            $sql .= "and account_active = 1 ";
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
            $sql = "update {$this->tblAccount} set ";
            $sql .= "account_key = '{$this->account_key}', ";
            $sql .= "account_datetime = '{$this->account_datetime}' ";

            $sql .= "where account_email = '{$this->account_email}' ";
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
            $sql = "select * from {$this->tblAccount} ";
            $sql .= "where account_key = '{$this->account_key}' ";
            $result = $this->connection->query($sql);
            return $result;
        }

        // login
        public function readLogin() {
            $sql = "select * from {$this->tblAccount} ";
            $sql .= "where account_email = '{$this->account_email}' ";
            $sql .= "and account_active = 1 ";
            $result = $this->connection->query($sql);            
            return $result;
        }

        public function archive() {
            $sql = "update {$this->tblAccount} set ";
            $sql .= "account_active = '0', ";
            $sql .= "account_datetime = '{$this->account_datetime}' ";
            $sql .= "where account_aid  = '{$this->account_aid}' ";
            
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;
    
            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        public function isEmailExist() {
            $sql = "select * from {$this->tblAccount} ";
            $sql .= "where account_email = '{$this->account_email}' ";
            $result = $this->connection->query($sql);
            return $result;
        }  

        public function isEmailActive() {
            $sql = "select * from {$this->tblAccount} ";
            $sql .= "where account_email = '{$this->account_email}' ";
            $sql .= "and account_active = 1 ";
            $result = $this->connection->query($sql);
            return $result;
        }

    }