canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
width_of_line=2;
color="red";
last_x=0;
last_y=0;
new_width = screen.width - 70;
new_height = screen.height - 300;
var width = screen.width;
var height = screen.height;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");

    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    console.log("my_touchMove")
    current_mouse_x_touches = e.touches[0].clientX - canvas.offsetLeft;
    current_mouse_y_touches = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates =")
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current positon of x and y coordinates =")
        console.log("x = " + current_mouse_x_touches + "y = " + current_mouse_y_touches);
        ctx.lineTo(current_mouse_x_touches, current_mouse_y_touches);
        ctx.stroke();

        last_x = current_mouse_x_touches;
        last_y = current_mouse_y_touches;
}