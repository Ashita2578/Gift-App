function preload()    {

}
function setup()    {
    canvas= createCanvas(480,500);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw()     {
 image (video,0,0,480,500);
 tint(tint_color);  
}
function take_snapshot()   {
    save('student_activity.png');
}
function filter()       {
    tint_color= document.getElementById("color_name").value;
}