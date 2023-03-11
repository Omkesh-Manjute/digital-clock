var cl = console.log;
// const digitalClock = document.getElementById(`digitalClock`)
// // // 1 way
// // const setZero = (num) => {
// //     if(num < 10) {
// //         return "0" + num
// //     } else {
// //         return num
// //     }
// // }
// // cl(setZero(3))
// // // 2 way

// // const setZero1 =(num) => {
// //     return num < 10 ? "0" + num : num;
// // }
// // cl(setZero1(5))

//  3 way one line code 
 const setZero2 = num =>  num < 10 ? "0" + num : num;
 cl(setZero2(6))

//   using function create digital clock
 function createDisitalClock(){
    let d = new Date()
     let hr = d.getHours()
     let min = d.getMinutes()
    let sec = d.getSeconds()
    let session = "AM"
    if (hr <10){
       hr = hr - 12;
       session =  `pm`
   }
    if (hr <10 ) {
         hr = "0" + hr
    }
    if (min <10 ) {
        min = "0" + min
     }
    if (sec <10 ) {
        sec = "0" + sec
    }
     let result = `${hr}: ${min} :${sec}: ${session}`; 
 digitalClock.innerHTML = result;
 settimeout(() =>{
     createDisitalClock();
  }, 1000);
 }
 createDisitalClock();

