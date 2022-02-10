Webcam.set({
    height: 300,
    width: 345,
    image_format:'png',
png_quality: 120
})
camera= document.getElementById("cam")
Webcam.attach(camera)
function cap(){
Webcam.snap(function(imgo){
document.getElementById("imge").innerHTML="<img src='"+imgo+"'>"
})
}
function rec(){
}