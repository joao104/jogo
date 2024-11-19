<?php
$pdo = new PDO('mysql:host=localhost;dbname=labirinto', 'root', '');
$stmt = $pdo->prepare("INSERT INTO scores (player_name, completion_time) VALUES (:player_name, :completion_time)");
$stmt->execute([
    ':player_name' => $_POST['player_name'],
    ':completion_time' => $_POST['completion_time']
]);
