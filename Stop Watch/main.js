const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#reserBtn');

//for time var
let seconds = 0;
let minutes = 0;
let hours = 0;

//var  leading 0
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//to set interval and timerstatus
let timerInterval = 0;
let timerStatus = "stopped";

//stop watch function
function stopWatch() {


    seconds++;
    if(seconds / 60 === 1){
        seconds = 0;
        minutes ++;
        if(minutes / 60 ==1){
            minutes = 0;
            hours ++;
        }
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString;
    } else{
        leadingSeconds = seconds;
    }
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString;
    } else{
        leadingMinutes = minutes;
    }
    if(hours < 10){
        leadingHours= "0" + hours.toString;
    } else{
        leadingHours = hours;
    }

    let displayHour = document.getElementById('timer').innerText = 
    hours + ":" + minutes + ":" + seconds;
}

//window.setInterval(stopWatch, 1000)

startStopBtn.addEventListener