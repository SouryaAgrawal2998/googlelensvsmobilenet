function setup(){
 canvas=createCanvas(300,300);
 canvas.position(550, 200);
 video=createCapture(VIDEO);
 video.hide();
 classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}
function draw(){
    image(video,300,300,250,250);
    classifier.classify(video,gotResults);
}
function modelLoaded(){
    console.log()
}
