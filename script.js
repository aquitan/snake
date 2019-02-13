let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i = 1; i < 101; i++) {
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}

let excel = document.getElementsByClassName('excel');

let x = 1,
    y = 10;

for(let i = 0; i < excel.length; i++) {
    excel[i].setAttribute('posX', x);
    excel[i].setAttribute('posY', y);
    x++;

    if (x > 10) {
        x = 1;
        y--
    }
}

//Генерируем появление элементов змеи
function generateSnake() {
    let posX = Math.round(Math.random() * (10 - 3) + 3);
    let posY = Math.round(Math.random() * (10 - 1) + 1);
    return [posX, posY];
}

let coordinates = generateSnake();
//Генерация ячеек змеи подряд через массив
let snakeBody = [document.querySelector('[posX =  "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX =  "' + (coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'), document.querySelector('[posX =  "' + (coordinates[0] - 2) + '"][posY = "' + coordinates[1] + '"]')];

//Присваиваем класс snakeBody для ячеек с телом змеии
for (var i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snake-body');
}

snakeBody[0].classList.add('snake-head');

//Создаем мышь

let mouse;

function createMouse() {
    function generateMouse() {
        let posX = Math.round(Math.random() * (10 - 3) + 3);
        let posY = Math.round(Math.random() * (10 - 1) + 1);
        return [posX, posY];
    }

    let mouseCoordinates = generateMouse();
        mouse = document.querySelector('[posX =  "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');

    while(mouse.classList.contains('snake-body')) {
        let mouseCoordinates = generateMouse();
        mouse = document.querySelector('[posX =  "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
    }

    mouse.classList.add('mouse');

}

createMouse();
