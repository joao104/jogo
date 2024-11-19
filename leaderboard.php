<?php
$pdo = new PDO('mysql:host=localhost;dbname=labirinto', 'root', '');
$scores = $pdo->query("SELECT player_name, completion_time FROM scores ORDER BY completion_time ASC LIMIT 10")->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ranking</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center">Ranking</h1>
        <table class="table table-striped mt-3">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tempo (s)</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($scores as $score): ?>
                <tr>
                    <td><?= htmlspecialchars($score['player_name']) ?></td>
                    <td><?= $score['completion_time'] ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</body>
</html>
