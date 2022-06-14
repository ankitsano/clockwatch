function updateClock(){
    let now=new Date()
    let dname=now.getDay()
    let month=now.getMonth()
    let dnum=now.getDate()
    let year=now.getFullYear()
    let hour=now.getHours()
    let min=now.getMinutes()
    let sec=now.getSeconds()
    let period='AM';

    if (hour==0){
        hour=12;
    }
    if(hour>12){
        hour=hour -12;
        period="PM";
    }

    let months=['January','February','March','April','May','June','July','August','September','October','November','December']

    let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
     let ids=['dayname','month','daynum','year','hour','minutes','seconds','period']
     let value=[week[dname],months[month],dnum,year,hour,min,sec,period]
     for(let i=0; i<ids.length;i++)
     document.getElementById(ids[i]).firstChild.nodeValue=value[i];


}
function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
}