const digitalClock = document.getElementById(`digitalClock`)
const setZero = (num) => num < 10 ? "0" + num : num;
function createDigitalClock(){
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "AM";
    if (hr > 10){
        hr = hr - 12;
        session = `pm`
    }


let result = `${setZero(hr)} :${setZero(min)} :${setZero(sec)} :${setZero(session)}`;
digitalClock.innerHTML = result;
setTimeout(() => {
    createDigitalClock();
}, 1000);
}
createDigitalClock()