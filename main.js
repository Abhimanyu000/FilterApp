noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas=createCanvas(600, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 350);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 350);
    image(clown_nose, noseX, noseY, 35, 35);
}

function takeImg(){
    save("filteredIMAGE.png");
}

function modelLoaded(){
    console.log("model has been loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-10;
        console.log("nose x = " + noseX);
        console.log("npse y = " + noseY);
    }
}