noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function modelLoaded(){
    console.log('PoseNet está inicializado');
}

function getPoses(results) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +"noseY = " +noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX +" rightWristX = "+ rightWristX + "difference = " + difference);
}

function draw(){
    background('#d0f5f4');

    document.getElementById("square_side").innerHTML = "Largura e Altura serão = " + difference +"px";
    fill("#a31743");
    stroke("#b8f2be");
    square(noseX, noseY, difference);
}
