var seconds = 00;
var tens = 00;
/*document.getElementById is used to reference another id. In this case
we are referencing our tens and seconds equal to countTens and 
CountSeconds along with other references*/
var countTens = document.getElementById('tens');
var countSeconds = document.getElementById('seconds');
var buttonStart = document.getElementById('start');
var buttonStop = document.getElementById('stop')
var buttonReset = document.getElementById('reset');

var interval; //To store timer values

//This function will run when click on start
function startTimer() {
    tens++;
    /*innerHTML changes the value in web page. Then tens is increase
    and will be store in the innerHTML. */
    if(tens < 9) {
        countTens.innerHTML = "0" + tens;
    }

    /*When tens become bigger than 9 it will revert back to its
    original value which is 00.*/
    if (tens > 9) {
        countTens.innerHTML = tens;
    }

    /*When tens become bigger than 99, seconds will increase and will 
    store the addition seconds into countSeconds. */
    if (tens > 99){
        seconds++;
        countSeconds.innerHTML = "0" + seconds;
        //Returns tens to 00
        tens = 0;
        countTens.innerHTML = "0" + 0;
    }

    /*Add the seconds in countSeconds. Make sure the stays within its 
    digits*/
    if (seconds > 9) {
        countSeconds.innerHTML = seconds;
    }
}

//.onclick executes a Javascript when the button is click.
buttonStart.onclick = function () {
    //Interval stores the time value and starts the startTimer function
    interval = setInterval(startTimer);
};

//Stops the button
buttonStop.onclick = function() {
    //clearInterval stops the time
    clearInterval(interval);
};

//Stops the startTimer and resets everthing back to 00
buttonReset.onclick = function() {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    countSeconds.innerHTML = seconds;
    countTens.innerHTML = tens;
};