function clock(){
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var d = new Date().getDate();
    var mo = new Date().getMonth();

    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    document.getElementById("hour").innerHTML = h + ' : ' + m;
    document.getElementById("month").innerHTML = monthNames[mo] + ' ' + d;
}

var interval = setInterval(clock, 1000)