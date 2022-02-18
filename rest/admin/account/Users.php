<?php
    class User {
        public $users_aid ;
        public $users_active ;
        public $users_name ;
        public $users_email ;
        public $users_key ;
        public $users_password ;
        public $users_datetime ;

        public $connection ;
        public $tblUsers;

        public function __construct($db) {
            $this->connection = $db;
            $this->tblUsers = "fbs_users";
        }


        public function create() {
            $sql = "insert into {$this->tblUsers} ";
            $sql .= "( users_active, ";           
            $sql .= "users_name, "; 
            $sql .= "users_email, "; 
            $sql .= "users_key, "; 
            $sql .= "users_datetime ) values ( ";
            $sql .= "'{$this->users_active}', ";
            $sql .= "'{$this->users_name}', ";
            $sql .= "'{$this->users_email}', ";
            $sql .= "'{$this->users_key}', ";

            $sql .= "'{$this->users_datetime}' ) ";
            
            $result = $this->connection->query($sql);
            return $result;
        }

        // update for new password
        public function updateNewPassword() {
            $sql = "update {$this->tblUsers} set ";
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
            $sql = "update {$this->tblUsers} set ";
            $sql .= "donor_cus_id = '{$this->donor_cus_id}', ";
            $sql .= "donor_datetime = '{$this->donor_datetime}' ";

            $sql .= "where donor_email = '{$this->donor_email}' ";
            $sql .= "and donor_active = 1 ";
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
            $sql = "update {$this->tblUsers} set ";
            $sql .= "donor_key = '{$this->donor_key}', ";
            $sql .= "donor_datetime = '{$this->donor_datetime}' ";

            $sql .= "where donor_email = '{$this->donor_email}' ";
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
            $sql = "select * from {$this->tblUsers} ";
            $sql .= "where users_key = '{$this->users_key}' ";
            $result = $this->connection->query($sql);
            return $result;
        }

        // login
        public function readLogin() {
            $sql = "select * from {$this->tblUsers} ";
            $sql .= "where donor_email = '{$this->donor_email}' ";
            $sql .= "and donor_active = 1 ";
            $result = $this->connection->query($sql);            
            return $result;
        }

        public function archive() {
            $sql = "update {$this->tblUsers} set ";
            $sql .= "donor_active = '0', ";
            $sql .= "donor_datetime = '{$this->donor_datetime}' ";
            $sql .= "where donor_aid  = '{$this->donor_aid}' ";
            
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;
    
            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        public function isEmailExist() {
            $sql = "select * from {$this->tblUsers} ";
            $sql .= "where users_email = '{$this->users_email}' ";
            $result = $this->connection->query($sql);
            return $result;
        }  

        public function isEmailActive() {
            $sql = "select * from {$this->tblUsers} ";
            $sql .= "where donor_email = '{$this->donor_email}' ";
            $sql .= "and donor_active = 1 ";
            $result = $this->connection->query($sql);
            return $result;
        }

    }