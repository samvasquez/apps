<?php

require_once "parametros.php"

class conexiondb{
    private static $db = null

private static $pdo;
 
final private __construct(){

    try{
        self:: obtenerDB();
    } catch(PDOException $e){

    }


}

public static function obtenerinstancia(){
    if(self::$db == null){
        self:: $db =new self();

    }
    return self::$db;
}
public static function obtenerDB(){
    if(self::$pdo == null){
        self::$pdo= new PDO(
            'mysql:dbname='.BASE_DE_DATOS.
            ';host='.NOMBRE_HOST.';',USUARIO,CONTRASEÑA,
            array (PDO::MYSQL_ATTR_INIT_COMMAND=>'SET NAMES utf 8'));

            self::$pdo->setAtrribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

    }
    return self::$pdo;

}
final protected function __clone(){

}
function __destructor(){

    self::$pdo = null;
}
}