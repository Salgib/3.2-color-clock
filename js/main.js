
function displayRefresh() {
  var refresh = 1000;
  myTime = setTimeout("displayTime()", refresh);
}


function displayTime() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var timeSegments = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = timeSegments;
  document.body.style.backgroundColor = "#" + hours + minutes + seconds;
  tt = displayRefresh();
}


//
// //
//
// function formattedTime(); {
//   var formattedHours = ("0" + hours).slice(-2);
//   var formattedMinutes = ("0" + minutes).slice(-2);
//   var formattedSeconds = ("0" + seconds).slice(-2);
//   return formatted;
// }
//






// function displayTime() {
//   var time = new Date();
//   var timeSegments = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
//   document.getElementById("clock").innerHTML = timeSegments;
//
//   tt = displayRefresh();
// }
