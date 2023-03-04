let strtbtn=document.getElementById('start');
let stopbtn=document.getElementById('stop');
let rstbtn=document.getElementById('reset');

let hr1=00;
let min1=00;
let sec1=00;
let millisec1=00;

Strtbtn.addEventListener('click',function(){
    timer=true;
    stopwatch();
});
Stopbtn.addEventListener('click',function(){
    timer=false;
    
});
rstbtn.addEventListener('click',function(){
    timer=false;
    hr1=0;
    min1=0;
    sec1=0;
    millisec1=0;
    document.getElementById('hr').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('millisec').innerHTML="00";
    
});
function stopwatch()
{
    if(timer)
    {
        millisec1++;
        if(millisec1==100)
        {
            sec1++;
            millisec1=0;
        }
        if(sec1==60)
        {
            min1++;
            sec1=0;
        }
        if(min1==60)
        {
            hr1++;
            min1=0;
            sec1=0;
        }
        let hrstr=hr1;
        let minstr=min1;
        let secstr=sec1;
        let millisecstr=millisec1;
        if(hr<10)
        {
            hrstr="0"+hrstr;
        }
        if(min<10)
        {
            minstr="0"+minstr;
        }
        if(sec<10)
        {
            secstr="0"+secstr;
        }
        if(millisec<10)
        {
            millisec="0"+millisec;
        }
        document.getElementById("hr").innerHtml=hrstr;
        document.getElementById("min").innerHtml=minstr;
        document.getElementById("sec").innerHtml=secstr;
        document.getElementById("millisec").innerHtml=millisecstr;
        setTimeout(stopwatch,5);

    }
}
