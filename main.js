var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function circle(x, y,color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}



ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.rect(130, 125, 430, 200 );
ctx.stroke();
circle(200,210,"blue");
circle(300,210,"black");
circle(400,210,"red");
circle(250,260,"yellow");
circle(350,260,"green")

