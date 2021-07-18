var mouseEvent ="empty";

canvas= document.getElementById ("MyCanvasSwissCheese");

ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown",My_Mousedown);
function My_Mousedown(e){
    color= document.getElementById("colorpizza").value;
    width= document.getElementById("widthbread").value;
    radius= document.getElementById("radiuscheese").value;
mouseEvent="MouseDown";

}
canvas.addEventListener("mouseup",My_MouseUP);
function My_MouseUP(e){
    
mouseEvent="MouseUP";

}
canvas.addEventListener("mouseleave",My_MouseLeave);
function My_MouseLeave(e){
    
mouseEvent="MouseLeave";

}
canvas.addEventListener("mousemove",My_Mousemove);
function My_Mousemove(e){
current_x =e.clientX - canvas.offsetLeft;
current_y =e.clientY - canvas.offsetTop;
if(mouseEvent == "MouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= width;
    ctx.arc(current_x ,current_y ,radius ,0 , 2*Math.PI);
    ctx.stroke();   
}
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
    
}