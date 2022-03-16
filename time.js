function clock(){
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var d = new Date().getDate();
    var mo = new Date().getMonth();
    

    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    document.getElementById("hour").innerHTML = h + ' : ' + m;
    document.getElementById("month").innerHTML = monthNames[mo] + ' ' + d;
    if (h<12){
     document.getElementById("name").innerHTML= 'Good' + 'Morning' + 'Thaylor!'
    } else if (h>12){
        document.getElementById("hour").innerHTML = 'Good' + 'Night' + 'Thaylor!'
    }
}

var interval = setInterval(clock, 1000)
