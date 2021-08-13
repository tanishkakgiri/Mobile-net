Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
});
Webcam.attach('#camera');
camera = document.getElementById("camera");
function take_snap(){
    Webcam.snap(function(e){
        document.getElementById("result").innerHTML = '<img id="image1" src="'+e+'"/>';
    });
}
console.log("ml5",ml5.version);
classfier = ml5.imageClassifier("MobileNet",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function identify(){
    d = document.getElementById("image1");
    classfier.classify(d,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}