function clock(e) {
    var el = document.getElementById('canvas');
    var ctx = el.getContext('2d');
    var isDrawing;

    ctx.strokeStyle = 'red';

    el.onmousedown = function(e) {
    isDrawing = true;
    ctx.lineWidth = 20;
    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.moveTo(e.clientX, e.clientY);
    };

    el.onmousemove = function(e) {
    if (isDrawing) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
      }
    };

    el.onmouseup = function() {
    isDrawing = false;
    };
  }