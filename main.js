status1 = "";
function setup(){
    canvas = createCanvas(500 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded );
  document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function start(){
    value = document.getElementById("object_name").innerHTML;
}
function draw(){
    image(video , 0 , 0 , 500 , 300);
}
function modelLoaded() {
    console.log("model Loaded!")
    status1 = "true";
}