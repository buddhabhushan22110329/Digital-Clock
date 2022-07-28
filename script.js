var h;
var m;
var s;
var AMorPM;

function clock(){

    var hh = document.getElementById('Hours');
    var mm = document.getElementById('Minutes');
    var ss = document.getElementById('Seconds');
    var ampm = document.getElementById('ampm');


    h = new Date().getHours();
    console.log(h);
    m = new Date().getMinutes();
    s = new Date().getSeconds();

    // handling AM or PM
    AMorPM = (h>12)? "PM": "AM";

    // convert 24 hrs to 12 hrs
     if(h>12) h= h-12;

    if(s<10){
        s= '0'+s;
    }

    if(h<10){
        h= '0'+h;
    }

    if(m<10){
        m = '0'+m;
    }

    hh.innerText=h;
    mm.innerText=m;
    ss.innerText=s;
    ampm.innerText=AMorPM;

}

var interval = setInterval(clock,1000);
