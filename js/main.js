function CalcTime(dates) {
  getEventName();
  clearInterval();

  if (dates != "") {
    date = new Date(dates).getTime();
  } else {
    alert("Please enter the date of the event");
    CountDown.preventDefault();
  }

  //time calculation and text replacement
  function CountDown() {
    let now = new Date().getTime();
    let fromTo = date - now;
    let day = Math.floor(fromTo / (1000 * 60 * 60 * 24));
    let hour = Math.floor((fromTo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((fromTo % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((fromTo % (1000 * 60)) / 1000);

    document.querySelector(".day").innerHTML = day;
    document.querySelector(".hour").innerHTML = hour;
    document.querySelector(".minute").innerHTML = minute;
    document.querySelector(".second").innerHTML = second;
  }
  setInterval(function () {
    CountDown();
  }, 1000);
}

//checking the name of the event
function getEventName() {
  let eventName = document.getElementById("name_event").value;
  if (eventName == "") {
    alert("Please enter the name of the event");
    CountDown.preventDefault();
  } else {
    document.getElementById("time_left").innerHTML =
      "Time left until " + eventName + ":";
  }
}