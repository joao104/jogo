<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo do Labirinto</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.6.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
    <div class="container text-center mt-5">
        <h1>Jogo do Labirinto</h1>
        <p>Tempo: <span id="time">0s</span></p>
        <div id="maze" class="maze"></div>
        <div id="reset-container" class="mt-4" style="display: none;">
            <button id="resetButton" class="btn btn-primary">Reiniciar Jogo</button>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="assets/game.js"></script>
</body>
</html>
