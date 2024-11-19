// Variáveis globais
let playerPosition = { x: 0, y: 0 }; // Posição inicial do jogador
let timeElapsed = 0; // Tempo decorrido
let timer; // Referência ao cronômetro
const endPosition = { x: 9, y: 7 }; // Posição de chegada (exemplo)
const maze = [
    ['S', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', ' ', 'W', ' ', ' ', ' ', ' ', 'W', ' ', 'W'],
    ['W', ' ', 'W', 'W', 'W', 'W', ' ', 'W', ' ', 'W'],
    ['W', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W'],
    ['W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', ' ', 'W'],
    ['W', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', 'W'],
    ['W', ' ', 'W', 'W', 'W', 'W', ' ', 'W', ' ', 'W'],
    ['W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'E']
];



// Alterar o tamanho do labirinto
const mazeSize = 15; // Tamanho maior (15x15) - aumente para mais desafio

// Atualize o código existente que cria o labirinto com o novo valor
function createMaze() {
    mazeElement.style.gridTemplateColumns = `repeat(${mazeSize}, 1fr)`;
    mazeElement.innerHTML = '';
    for (let i = 0; i < mazeSize * mazeSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if (Math.random() < 0.3) {
            cell.classList.add('wall'); // Maior densidade de paredes
        }
        mazeElement.appendChild(cell);
    }
    setStartAndEnd();
}





// Função para construir o labirinto
const buildMaze = () => {
    $('#maze').empty(); // Limpa o labirinto
    maze.forEach((row, y) => {
        row.forEach((cell, x) => {
            const div = $('<div class="cell"></div>');
            if (cell === 'W') div.addClass('wall');
            if (cell === 'S') div.addClass('start');
            if (cell === 'E') div.addClass('end');
            if (x === playerPosition.x && y === playerPosition.y) div.addClass('player');
            $('#maze').append(div);
        });
    });
};


function addMovingWalls() {
    const walls = document.querySelectorAll('.wall');
    setInterval(() => {
        walls.forEach(wall => {
            if (Math.random() < 0.3) {
                wall.classList.toggle('wall');
            }
        });
    }, 2000); // Muda a cada 2 segundos
}

// Chame a função após criar o labirinto
createMaze();
addMovingWalls();


// Função para iniciar o cronômetro
const startTimer = () => {
    timer = setInterval(() => {
        timeElapsed += 0.1; // Incrementa o tempo
        $('#time').text(`${timeElapsed.toFixed(1)}s`);
    }, 100);
};

// Função para detectar vitória
const checkWin = () => {
    if (playerPosition.x === endPosition.x && playerPosition.y === endPosition.y) {
        clearInterval(timer); // Para o cronômetro
        alert(`Parabéns! Você venceu em ${timeElapsed.toFixed(1)} segundos!`);
        $('#reset-container').show(); // Mostra o botão de reiniciar
    }
};

// Função para reiniciar o jogo
const resetGame = () => {
    clearInterval(timer); // Para o cronômetro
    timeElapsed = 0; // Reseta o tempo
    $('#time').text('0s'); // Atualiza o tempo
    playerPosition = { x: 0, y: 0 }; // Reposiciona o jogador no início
    $('#reset-container').hide(); // Esconde o botão de reiniciar
    buildMaze(); // Reconstrói o labirinto
    startTimer(); // Reinicia o cronômetro
};

// Lógica para mover o jogador
const movePlayer = (dx, dy) => {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;
    if (
        newX >= 0 &&
        newX < maze[0].length &&
        newY >= 0 &&
        newY < maze.length &&
        maze[newY][newX] !== 'W'
    ) {
        playerPosition.x = newX;
        playerPosition.y = newY;
        buildMaze();
        checkWin();
    }
};

// Adiciona os controles do teclado
$(document).on('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
});

// Adiciona evento ao botão de reiniciar
$('#resetButton').on('click', resetGame);

// Inicializa o jogo
buildMaze();
startTimer();
