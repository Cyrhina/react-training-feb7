<?php
class Customer {
    public $customer_aid   ;
    public $customer_fullname ;
    public $customer_date ;
    public $customer_active ;
    public $customer_datetime ;

    public $connection ;
    public $tblCustomers;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblCustomers = "fbs_customer";
    }
    
    public function readAll() {
        $sql = "select * from {$this->tblCustomers} ";
        $sql .= "where customer_active = 1 ";
        $sql .= "order by customer_aid asc";
        // desc -descending -- z to a
        // asc -ascending --a to z
        $result = $this->connection->query($sql);

        return $result;
    }

    public function delete() {
        $sql = "delete from {$this->tblCustomers} "; 
        $sql .= "where customer_aid  = '{$this->customer_aid }' ";
        $result = $this->connection->query($sql);
        return $result;
    }
    
    public function active() {
        $sql = "update {$this->tblCustomers} set ";
        $sql .= "customer_active = '{$this->customer_active}', ";
        $sql .= "customer_datetime = '{$this->customer_datetime}' ";
        $sql .= "where customer_aid  = '{$this->customer_aid }' ";
        
        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if($c_affected > 0){
            return true;
        }else {
            return false;
        }
    }
    

    public function create() {
        $sql = "insert into {$this->tblCustomers} ";
        $sql .= "( customer_aid, ";        
        $sql .= "customer_fullname, "; 
        $sql .= "customer_date, "; 
        $sql .= "customer_active, "; 
        $sql .= "customer_datetime ) values ( ";
        $sql .= "'{$this->customer_aid}', ";
        $sql .= "'{$this->customer_fullname}', ";
        $sql .= "'{$this->customer_date}', ";
        $sql .= "'{$this->customer_active}', ";
        $sql .= "'{$this->customer_datetime}' ) ";
        
        $result = $this->connection->query($sql);
        return $result;
    }
    
    public function update() {
        $sql = "update {$this->tblCustomers} set ";
        $sql .= "customer_fullname = '{$this->customer_fullname}', ";
        $sql .= "customer_date = '{$this->customer_date}', ";
        $sql .= "customer_active = '{$this->customer_active}', ";
        $sql .= "customer_datetime = '{$this->customer_datetime}' ";
        $sql .= "where customer_aid  = '{$this->customer_aid }' ";
        
        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if($c_affected > 0){
            return true;
        }else {
            return false;
        }
    }

}