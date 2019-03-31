var canvas;
var ctx;
var sx, sy;                      // 현재 위치
var drawing = false;          // 현재 그리는 중인가?
var colorPicker = document.getElementById("colorpicker");
var colorpickerValue = document.getElementById("colorpicker").value;

window.onload = function() {
     draw();
}

function draw(){
     canvas = document.getElementById("canvas");
     canvas.width = window.innerWidth * .8;
     canvas.height = window.innerHeight * .8;
     if (canvas == null || canvas.getContext == null) return;
     ctx = canvas.getContext("2d");
     //ctx.lineCap="round";
     //ctx.strokeStyle=colorpickerValue;
     ctx.fillStyle="red";
     ctx.lineWidth = 20;
     var lineWidth = ctx.lineWidth;
     var currentlineWidth = ctx.lineWidth
     
     /*
     // 현재 위치를 저장한다.
     canvas.onmousedown = function(e) {
          e.preventDefault();
          sx = canvasX(e.clientX);
          sy = canvasY(e.clientY);
          drawing = true;
     }
     */

     // 현재 위치에서 새로 이동한 곳까지 선을 그린다.
     canvas.onmousemove = function(e) {
          drawing = true;
          if (drawing) {
               e.preventDefault();
               ctx.beginPath();
               ctx.moveTo(sx, sy);
               sx = canvasX(e.clientX);
               sy = canvasY(e.clientY);
               //ctx.lineTo(sx, sy);
               ctx.stroke();
               ctx.arc(sx, sy, ctx.lineWidth, 0, 2 * Math.PI);
               ctx.fill();
          }
     }

     /*
     // 그리기를 종료한다.
     canvas.onmouseup = function(e) {
          drawing = false;
     }
     */           
}

/*
// 선 색상 변경
var selcolor = document.getElementById("selcolor");
selcolor.onchange = function(e) {
     ctx.strokeStyle = selcolor.value;
}

// 선 굵기 변경
var selwidth = document.getElementById("selwidth");
selwidth.onchange = function(e) {
     ctx.lineWidth = selwidth.value;
}

// 모두 지우기
var btnclear = document.getElementById("clear");
btnclear.onclick = function(e) {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
}
*/

function canvasX(clientX) {
     var bound = canvas.getBoundingClientRect();
     var bw = 5;
     return (clientX - bound.left - bw) * (canvas.width / (bound.width - bw * 2));
}

function canvasY(clientY) {
     var bound = canvas.getBoundingClientRect();
     var bw = 5;
     return (clientY - bound.top - bw) * (canvas.height / (bound.height - bw * 2));
}

window.addEventListener('keydown',function(e){
    var currentlineWidth = ctx.lineWidth
    switch(e.keyCode){
      case 32:
        console.log('spacebar');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        break;
      case 40:
        console.log('down');
        currentlineWidth -= 5;
        ctx.lineWidth = currentlineWidth;
        //console.log(ctx.lineWidth)
        break;
      case 38:
        console.log('up');
        currentlineWidth += 5;
        ctx.lineWidth = currentlineWidth;
        break;
      case 82:
        console.log("red");
        ctx.fillStyle="red";
        break;
      case 89:
        console.log("yellow");
        ctx.fillStyle="yellow";
        break;
      case 66:
        console.log("blue");
        ctx.fillStyle="blue";
        break;
      case 71:
      console.log("green");
      ctx.fillStyle="green";
      break;
    }
  });

colorPicker.addEventListener('change',function(e) {
     var color = e.target.value;
     ctx.fillStyle=color;
});

window.addEventListener('resize', canvasResize);
function canvasResize() {
     canvas.width = window.innerWidth * .8;
     canvas.height = window.innerHeight * .8;
     draw();
}

window.addEventListener('touchmove', function(e){
     draw();
})