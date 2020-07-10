
let xSpeed = 5;
let ySpeed = 5;

let direction = 'right';


const snake = document.getElementById('snake');
const food = document.getElementById('food');
const text = document.getElementById('abc');

// 食物的位置
function setFoodPosition(){
  xFood = Math.random() * 980;
  yFood = Math.random() * 580;
  food.style.top = yFood;
  food.style.left = xFood;
}

setFoodPosition();


document.onkeydown= function(event){
  console.log(event.code);
  let x = parseFloat(snake.style.left);
  let y = parseFloat(snake.style.top);
  
  if(event.code === 'KeyL' || event.code === 'ArrowRight'){
    direction = 'right';
    x += xSpeed;
  } else if(event.code === 'KeyJ' || event.code === 'ArrowLeft'){
    direction = 'left'
    x -= xSpeed;
  } else if(event.code === 'KeyI' || event.code === 'ArrowUp') {
    direction = 'up';
    y -= ySpeed;
  } else if(event.code === 'KeyK' || event.code === 'ArrowDown') {
    direction = 'down';
    y += ySpeed;
  }
  
  snake.style.left = x + 'px';
  snake.style.top = y + 'px';
}

let timer;
let count = 0;

setInterval(function() {
  let x = parseFloat(snake.style.left);
  let y = parseFloat(snake.style.top);

  if(direction === 'right') {
    x += xSpeed;
  } else if (direction === 'left') {
    x -= xSpeed;
  } else if(direction === 'down') {
    y += xSpeed;
  } else if(direction === 'up') {
    y -= xSpeed;
  }

  if(x >= 1000) {
    x = -15;
  }
  if(x <= -20) {
    x = 1000 - 5;
  }
  if(y >= 600){
    y = -15;
  }
  if(y<=-20){
    y = 600 - 5;
  }

  // 蛇的位置
  snake.style.left  = x + 'px';
  snake.style.top = y + 'px';

  let xFood = parseFloat(food.style.left);
  let yFood = parseFloat(food.style.top);

  if(
    ((x+20 > xFood && x+20 < xFood + 20) || (x > xFood && x < xFood+20)) && 
    ((y > yFood && y < yFood + 20) || (y+20 > yFood && y+20 < yFood + 20))
  ) {
    count = count + 1;
    const div = document.createElement('div');
    div.setAttribute('class', 'snakeCell');
    div.style.left = count * 22;
    snake.appendChild(div);
    
    text.innerText = count;
    food.style.top = -1000000;
    food.style.left = -1000000;

    timer = setTimeout(setFoodPosition, 500);

  }

  // 这里判断是否吃到食物

}, 100)