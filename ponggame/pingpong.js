const canvas = document.getElementById("pong");

const ctx = canvas.getContext('2d');

const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    velocityX : 5,
    velocityY : 5,
    speed : 10,
    color : "WHITE"
}

const user = {
    x : 0, //left side of canvas
    y : (canvas.height -100)/2, //-100 the height of paddle
    width : 10,
    height : 100,
    color : "WHITE"
}

const com = {
    x : canvas.width - 10,
    y : (canvas.height - 100)/2,
    width : 10,
    height : 100,
    score : 0,
    color : "WHITE"
}

const net = {
    x : (canvas.width -2)/2,
    y : 0,
    height : 10,
    width : 2,
    color : "WHITE"
}

function drawRect(x,y,w,h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
}

function drawArc(x,y,r, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

canvas.addEventListener('mousemovement', getMousePos);

function getMousePos(evt){
    let rect = canvas.getBoundingClientRect();
    
    user.y = evt.clientY - rect.top - user.height/2;
}

function resetball(){
    ball.x = canvas.width/2;
    ball.y = canvas.height/2;
    ball.velocityX =-ball.velocityx;
    ball.speed = 10;
}

function drawNet(){
    for(let i = 0; i <= canvas.height; i+=15){
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}   

function drawText(text,x,y){
    ctx.fillStyle = "FFF";
    ctx.font = "75px verdana";
    ctx.fillText(text,x,y);
}

function update(){
    if( ball.x - ball.radius < 0){
        com.score++;
        comScore.play();
        resetball();
    }
    else if( ball.x + ball.radius > canvas.width){
        user.score++;
        userScore.play();
        resetball();
    }
    
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
}


function render(){
    drawRect(0,0, canvas.width, canvas.height, "#000");
    
    drawText(user.score,canvas.width/4,canvas.height/5);
    
    drawText(com.score,3*canvas.width/4,canvas.height/5);
    
    drawNet();
    
    drawRect(user.x,user.y, user.width, user.height, user.color);
    
    drawRect(com.x,com.y, com.width, com.height, com.color);
    
    drawArc(ball.x,ball.y,ball.radius,ball.color);
    
}

function game(){
    update();
    render();
}