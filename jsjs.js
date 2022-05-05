let info = document.querySelector("#info")
let losecheck = document.querySelector("#losecheck")
document.getElementById('timer').innerHTML =
  05 + ":" + 1;
starts();


function starts() {
  var pt = document.getElementById('timer').innerHTML;
  var arrr = pt.split(/[:]+/);
  var m = arrr[0];
  var s = cc((arrr[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  // console.log(m)
  setTimeout(starts, 1000);
  
}

function cc(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  if (timer.innerHTML == "0:00") {
    console.log("null");
    console.log(list);
    list.style.display = "none"
    info.style.display = "none"
    losecheck.classList.add("df")
  }
  return sec;
}



// e.target.parentElement.previousElementSibling.classList.add("zeroo")

// console.log(t.innerHTML);
// if (t.innerHTML == "0:00") {
//   console.log("null");
// }


