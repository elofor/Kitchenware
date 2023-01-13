<?php

require_once('config.php');
require_once('autorisieren.php');

$userID = $_POST["userID"];
$artikelID = $_POST["artikelID"];

$sql = "DELETE FROM artikel WHERE user_id = ? AND ID = ?;";
$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute([$userID, $artikelID]);

print_r("Dein Inserat wurde gelöscht.");


