<?php
    class Account {
        public $donor_aid ;
        public $donor_active ;
        public $donor_cus_id ;
        public $donor_fname ;
        public $donor_lname ;
        public $donor_email ;
        public $donor_key ;
        public $donor_password ;
        public $donor_created ;
        public $donor_datetime ;

        public $connection ;
        public $tblDonorAccount;

        public function __construct($db) {
            $this->connection = $db;
            $this->tblDonorAccount = "fca_donor_account";
        }


        public function create() {
            $sql = "insert into {$this->tblDonorAccount} ";
            $sql .= "( donor_fname, ";        
            $sql .= "donor_lname, ";        
            $sql .= "donor_email, "; 
            $sql .= "donor_key, "; 
            $sql .= "donor_active, "; 
            $sql .= "donor_cus_id, "; 
            $sql .= "donor_created, "; 
            $sql .= "donor_datetime ) values ( ";
            $sql .= "'{$this->donor_fname}', ";
            $sql .= "'{$this->donor_lname}', ";
            $sql .= "'{$this->donor_email}', ";
            $sql .= "'{$this->donor_key}', ";
            $sql .= "'{$this->donor_active}', ";
            $sql .= "'{$this->donor_cus_id}', ";
            $sql .= "'{$this->donor_created}', ";
            $sql .= "'{$this->donor_datetime}' ) ";
            
            $result = $this->connection->query($sql);
            return $result;
        }

        // update for new password
        public function updateNewPassword() {
            $sql = "update {$this->tblDonorAccount} set ";
            $sql .= "donor_key = '', ";
            $sql .= "donor_password = '{$this->donor_password}', ";
            $sql .= "donor_active = 1, ";
            $sql .= "donor_datetime = '{$this->donor_datetime}' ";

            $sql .= "where donor_key = '{$this->donor_key}' ";
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
            $sql = "update {$this->tblDonorAccount} set ";
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
            $sql = "update {$this->tblDonorAccount} set ";
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
            $sql = "select * from {$this->tblDonorAccount} ";
            $sql .= "where donor_key = '{$this->donor_key}' ";
            $result = $this->connection->query($sql);
            return $result;
        }

        // login
        public function readLogin() {
            $sql = "select * from {$this->tblDonorAccount} ";
            $sql .= "where donor_email = '{$this->donor_email}' ";
            $sql .= "and donor_active = 1 ";
            $result = $this->connection->query($sql);            
            return $result;
        }

        public function archive() {
            $sql = "update {$this->tblDonorAccount} set ";
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
            $sql = "select * from {$this->tblDonorAccount} ";
            $sql .= "where donor_email = '{$this->donor_email}' ";
            $result = $this->connection->query($sql);
            return $result;
        }  

        public function isEmailActive() {
            $sql = "select * from {$this->tblDonorAccount} ";
            $sql .= "where donor_email = '{$this->donor_email}' ";
            $sql .= "and donor_active = 1 ";
            $result = $this->connection->query($sql);
            return $result;
        }

    }