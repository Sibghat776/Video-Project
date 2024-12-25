var myBtn = document.querySelector("#myBtn")
var myVideo = document.querySelector("video")
var myImage = document.querySelector("#myImage")


myBtn.addEventListener('click', function () {
    console.log("Chal raha hun")
    if (myVideo.paused) {
        myVideo.play()
        myImage.src = "./Start.png"
    } else {
        myImage.src = "./Stop.png"
        myVideo.pause()
    }
})