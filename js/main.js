function CalcTime(dates) {
  clearInterval();

  if (dates != "") {
    date = new Date(dates).getTime();
    localStorage.setItem("info", date);
  } else {
    alert("Please enter the date of the event");
    CountDown.preventDefault();
  }
  //given date is past
  let now = new Date().getTime();
  if (date < now) {
    alert(
      "We cannot go back in time :( Please enter a valid date of the event"
    );
    CountDown.preventDefault();
    GetEventName.preventDefault();
  }

  GetEventName();

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

    if (now >= date) {
      clearInterval();
      document.querySelector(".day").innerHTML = "0";
      document.querySelector(".hour").innerHTML = "0";
      document.querySelector(".minute").innerHTML = "0";
      document.querySelector(".second").innerHTML = "0";

      FinishedEvent();
    }
  }

  setInterval(function () {
    CountDown();
  }, 1000);
}

//checking the name of the event
function GetEventName() {
  let eventName = document.getElementById("name_event").value;
  if (eventName == "") {
    alert("Please enter the name of the event");
    CountDown.preventDefault();
  } else {
    document.getElementById("time_left").innerHTML =
      "Time left until " + eventName + ":";
  }
}
function FinishedEvent() {
  let eventName = document.getElementById("name_event").value;
  document.getElementById("time_left").innerHTML =
    "It's time for " + eventName + "!!!";
}
