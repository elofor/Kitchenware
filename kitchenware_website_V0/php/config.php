<?php

$host = "localhost";
$user = "739527_2_1";
$password = "SFzKmUPftTiQ";
$dbname = "739527_2_1";

$pdo = new PDO('mysql:host='. $host . '; dbname=' . $dbname . ';charset=utf8', $user, $password);
$pdo->exec("set names utf8");