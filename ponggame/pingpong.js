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