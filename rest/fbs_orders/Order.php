<?php
class Order {
    public $order_aid ;
    public $order_name ;
    public $order_date ;
    public $order_datetime ;

    public $connection ;
    public $tblOrder;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblOrder = "fbs_orders";
    }
    
    public function readAll() {
        $sql = "select * from {$this->tblOrder} ";
        $sql .= "order by order_aid desc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function delete() {
        $sql = "delete from {$this->tblOrder} "; 
        $sql .= "where order_aid  = '{$this->order_aid }' ";
        $result = $this->connection->query($sql);
        return $result;
    }
    
    public function create() {
        $sql = "insert into {$this->tblOrder} ";
        $sql .= "( order_aid, ";        
        $sql .= "order_name, "; 
        $sql .= "order_date, "; 
        $sql .= "order_datetime ) values ( ";
        $sql .= "'{$this->order_aid}', ";
        $sql .= "'{$this->order_name}', ";
        $sql .= "'{$this->order_date}', ";
        $sql .= "'{$this->order_datetime}' ) ";
        
        $result = $this->connection->query($sql);
        return $result;
    }
    
    public function update() {
        $sql = "update {$this->tblOrder} set ";
        $sql .= "order_name = '{$this->order_name}', ";
        $sql .= "order_date = '{$this->order_date}', ";
        $sql .= "order_datetime = '{$this->order_datetime}' ";
        $sql .= "where order_aid  = '{$this->order_aid }' ";
        
        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if($c_affected > 0){
            return true;
        }else {
            return false;
        }
    }

}