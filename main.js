//var clown=document.getElementById("clown").value;
//var lipstick=document.getElementById("lipstick").value;
//var mustache=document.getElementById("mustache").value;

//for(i = 0; i < value_thing.length; i++) {
   // if(value_thing[i].checked)
    //document.getElementById("selected").innerHTML= "Filter: "+value_thing[i].value; 
//}

//if(clown=="clown"){
  //  document.getElementById("selected").innerHTML="Filter: Clown Nose";
  //  console.log("clownyboy");
//}

//if(lipstick=="lipstick"){
  //  document.getElementById("selected").innerHTML="Filter: Lipstick";
//}

//if(mustache=="mustache"){
  //  document.getElementById("selected").innerHTML="Filter: Mustache";
//}


//if (value_thing=="Clown Nose"){
//console.log("clown");
//}
//if(value_thing=="Lipstick"){
//console.log("lip");
//}
//if(value_thing=="Mustache"){
//console.log("mustache");
//}

noseX=0;
noseY=0;

function preload(){
mustache=loadImage("https://lh3.googleusercontent.com/proxy/Pv9ZL69Js4M63WStvAquXOI7d9izZKNPZtHMRQp3z2jdmmj1xb4oSk_YUQHfYZ003BOkZh2OmUywtPq34R2nzRqlo6od_WoI-6tHtKVmYig719JvOQjA");
//lip=loadImage("https://www.seekpng.com/png/detail/2-26681_lips-png-transparent-image-lips-png.png"); 
//must=loadImage("https://lh3.googleusercontent.com/proxy/Pv9ZL69Js4M63WStvAquXOI7d9izZKNPZtHMRQp3z2jdmmj1xb4oSk_YUQHfYZ003BOkZh2OmUywtPq34R2nzRqlo6od_WoI-6tHtKVmYig719JvOQjA");
}

function setup(){
canvas=createCanvas(500,400);
canvas.position(525,220);
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getPose)
}



function modelLoaded(){
    console.log("model loaded");
}

function getPose(results){
if(results.length>0){
    console.log(results);

    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
}
}

function draw(){
    image(video,0,0,500,400);
image(mustache,noseX-140, noseY-100, 150, 130);

    
    }

function takepic(){
save('fliterpic.png');
}

//function drawclown(){
  //  image(clown,noseX-140, noseY-120, 150, 130);
//}

//function drawlip(){
  //  image(lip,noseX-140, noseY+200, 100, 100);

//}

//function drawmust(){
  //  image(must,noseX-140, noseY+50, 100,100);
//}
