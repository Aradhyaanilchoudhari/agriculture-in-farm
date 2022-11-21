
song = "";
objects = [];
status = "";

function preload()
{
	/*start code here*/
  sound = loadSound("Alarm.mp3");
}

function setup() {
  /*start code here*/
  canvas=creatcanvas(380,380);
   canvas.center();
   video=createcapture(VIDEO);
   video.size(380,380);
   video.hide();
   objectDetector = ml5.objectDetector('cocossd',modelLoaded;
   document.getElementById("status").innerHTML= "Status : Detecting objects";
 
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
}

function gotResult(error, results) {
  /*start code here*/
  if (error){
    console.log(error);
  }else
  {
    console.log(results);
    objects=results;
  }
}


function draw() {
  image(video, 0, 0, 380, 380);
      if(status != "")
      {
        r =  random(255);
        g =  random(255);
        b =  random(255);      
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected";
 
          fill(r,g,b);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke(r,g,b);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
         
          if(objects[i].label == "elephant")
          {
            /*start code here*/
            document.getElementById("number_of_objects").innerHTML="elephant found";
            console.log("play");
            song.play();
          }
          else
          document.getElementById("number_of_objects").innerHTML="elephant not found";
          console.log("stop");
          song.stop();
          {
            
            /*start code here*/
          }
         }

        if(objects.length == 0)
        {
          /*start code here*/
        }
      }
}

