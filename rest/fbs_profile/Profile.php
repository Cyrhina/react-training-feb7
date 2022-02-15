<?php
class Profile {
    public $profile_aid   ;
    public $profile_fname ;
    public $profile_lname ;
    public $profile_datetime ;

    public $connection ;
    public $tblProfile;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblProfile = "fbs_profile";
    }
    
    public function readAll() {
        $sql = "select * from {$this->tblProfile} ";
        $sql .= "order by profile_aid asc";
        // desc -descending -- z to a
        // asc -ascending --a to z
        $result = $this->connection->query($sql);

        return $result;
    }

    public function delete() {
        $sql = "delete from {$this->tblProfile} "; 
        $sql .= "where profile_aid  = '{$this->profile_aid }' ";
        $result = $this->connection->query($sql);
        return $result;
    }
    
    public function create() {
        $sql = "insert into {$this->tblProfile} ";
        $sql .= "( profile_aid, ";        
        $sql .= "profile_fname, "; 
        $sql .= "profile_lname, "; 
        $sql .= "profile_datetime ) values ( ";
        $sql .= "'{$this->profile_aid}', ";
        $sql .= "'{$this->profile_fname}', ";
        $sql .= "'{$this->profile_lname}', ";
        $sql .= "'{$this->profile_datetime}' ) ";
        
        $result = $this->connection->query($sql);
        return $result;
    }
    
    public function update() {
        $sql = "update {$this->tblProfile} set ";
        $sql .= "profile_fname = '{$this->profile_fname}', ";
        $sql .= "profile_lname = '{$this->profile_lname}', ";
        $sql .= "profile_datetime = '{$this->profile_datetime}' ";
        $sql .= "where profile_aid  = '{$this->profile_aid }' ";
        
        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if($c_affected > 0){
            return true;
        }else {
            return false;
        }
    }

}