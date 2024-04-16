// ******************VIDEO*****************************

var myVideo = document.getElementById('myVideo');

$(".video-date").on('click',function () {
    // debugger;
        if (myVideo.paused){
        $("#myBtn").hide();
        myVideo.play();
       
        } 
        else {
        myVideo.pause();
        $("#myBtn").show();
        }
    });