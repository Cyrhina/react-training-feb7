<?php
class Email {
    public $email_aid ;
    public $email_name ;
    public $email_email ;
    public $email_datetime ;

    public $connection ;
    public $tblEmail;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblEmail = "fbs_email";
    }
    
    public function readAll() {
        $sql = "select * from {$this->tblEmail} ";
        $sql .= "order by email_aid asc ";
        // desc -descending - z to a
        // asc -ascending a to z
        $result = $this->connection->query($sql);

        return $result;
    }

    public function delete() {
        $sql = "delete from {$this->tblEmail} "; 
        $sql .= "where email_aid  = '{$this->email_aid }' ";
        $result = $this->connection->query($sql);
        return $result;
    }
    
    public function create() {
        $sql = "insert into {$this->tblEmail} ";
        $sql .= "( email_aid, ";        
        $sql .= "email_name, "; 
        $sql .= "email_email, "; 
        $sql .= "email_datetime ) values ( ";
        $sql .= "'{$this->email_aid}', ";
        $sql .= "'{$this->email_name}', ";
        $sql .= "'{$this->email_email}', ";
        $sql .= "'{$this->email_datetime}' ) ";
        
        $result = $this->connection->query($sql);
        return $result;
    }
    
    public function update() {
        $sql = "update {$this->tblEmail} set ";
        $sql .= "email_name = '{$this->email_name}', ";
        $sql .= "email_email = '{$this->email_email}', ";
        $sql .= "email_datetime = '{$this->email_datetime}' ";
        $sql .= "where email_aid  = '{$this->email_aid }' ";
        
        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if($c_affected > 0){
            return true;
        }else {
            return false;
        }
    }

}