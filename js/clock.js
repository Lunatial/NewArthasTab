window.onload = startTime();

function startTime() {
    var now = new Date();
    var hour = ('0' + now.getHours()).slice(-2);
    var mins = now.getMinutes();
    var secs = now.getSeconds();
    var msecs = now.getMilliseconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var day = ('0' + now.getDate()).slice(-2);
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var year = now.getFullYear();
    // 24/12 h
    //hour = hour % 24;
    hour = hour ? hour : 12;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;
    var timeString = hour + ':' + mins + ':' + secs;
    var dateString = month + '/' + day + '/' + year;
    document.getElementById('clock').innerHTML = timeString;
    document.getElementById('date').innerHTML = dateString;
    var t = setTimeout(startTime, 1000);
}