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