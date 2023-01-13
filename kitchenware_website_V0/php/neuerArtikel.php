<?php

require('config.php');
require('autorisieren.php');

$userID =  $_POST["userID"];
$artikel = $_POST["artikel"];
$kategorie_id = $_POST["kategorie_id"];
$bild = $_POST["bild"];
$beschreibung = $_POST["beschreibung"];
$preis = $_POST["preis"];
$status = $_POST["status"];

$sql = "INSERT INTO artikel (artikel, bild, kategorie_id, beschreibung, preis, user_id, status) VALUES (:artikel, :bild, :kategorie_id, :beschreibung, :preis, :user_id, :status);";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('artikel' => $artikel, 'bild' => $bild, 'kategorie_id' => $kategorie_id, 'beschreibung' => $beschreibung, 'preis' => $preis, 'user_id' => $userID, 'status' => $status));

if ($erfolg) {

    print_r('Artikel erfolgreich erstellt!');

    $letzteID = $pdo->lastInsertId();

} else {

    print_r($erfolg);
};
