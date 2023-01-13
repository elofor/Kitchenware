<?php

require("config.php");

$sql = "
SELECT A.ID, A.artikel, A.bild, A.beschreibung, A.status, A.preis, U.name, U.email, K.kategorie, A.timestamp
FROM artikel A
INNER JOIN user U
ON A.user_id = U.ID
INNER JOIN kategorie K
ON A.kategorie_id = K.ID
ORDER BY A.timestamp DESC;
";

$stmt = $pdo->prepare($sql);
$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();
    $jsonArray = json_encode($array);
    print_r($jsonArray);
}