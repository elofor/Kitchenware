<?php

require_once('config.php');
require_once('autorisieren.php');

$userID = $_POST["userID"];
$artikel = $_POST["artikel"];
$kategorie_id = $_POST["kategorie_id"];
$beschreibung = $_POST["beschreibung"];
$preis = $_POST["preis"];
$status = $_POST["status"];
$bild = $_POST["bild"];
$artikelID = $_POST["artikelID"];

$sql = "UPDATE artikel SET artikel=?, bild=?, kategorie_id=?, preis=?, beschreibung=?, status=? WHERE user_id=?;";
$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute([$artikel, $bild, $kategorie_id, $preis, $beschreibung, $status, $userID]);

print_r("Dein Inserat wurde aktualisiert.");